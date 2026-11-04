export function parseCSV(text) {
  const rows=[]; let row=[], cell='', quoted=false;
  text=text.replace(/^\uFEFF/,'');
  for(let i=0;i<text.length;i++) { const c=text[i];
    if(c==='"') { if(quoted && text[i+1]==='"'){cell+='"';i++;} else if(quoted || cell==='') quoted=!quoted; else throw Error('Invalid quote in CSV.'); }
    else if(c===','&&!quoted){row.push(cell);cell='';}
    else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);if(row.some(x=>x.trim()))rows.push(row);row=[];cell='';}
    else cell+=c;
  }
  if(quoted)throw Error('Unclosed quoted field.');
  row.push(cell);if(row.some(x=>x.trim()))rows.push(row);
  if(rows.length<2)throw Error('Add a header and at least one company.');
  const headers=rows.shift().map(x=>x.trim().toLowerCase());
  if(!headers.includes('company'))throw Error('The CSV needs a company column.');
  if(new Set(headers).size!==headers.length)throw Error('Duplicate column names.');
  const seen=new Set();return rows.map((r,i)=>{
    if(r.length!==headers.length)throw Error(`Row ${i+2} has a different number of columns.`);
    const o=Object.fromEntries(headers.map((h,j)=>[h,r[j].trim()]));
    const key=(o.domain||o.company).toLowerCase().replace(/^https?:\/\//,'').replace(/^www\./,'').split('/')[0];
    if(!o.company||seen.has(key))return null;seen.add(key);
    return {...o,employees:/^\d+$/.test(o.employees||'')?Number(o.employees):null,origin:'Imported · unverified'};
  }).filter(Boolean);
}
export function csv(rows,headers){return [headers,...rows.map(o=>headers.map(h=>o[h]??''))].map(r=>r.map(v=>'"'+String(v).replace(/^[\s]*[=+@-]/,"'$&").replaceAll('"','""')+'"').join(',')).join('\r\n');}
export function qualify(a,icp){
  let score=0;const reasons=[];
  for(const [key,weight,label] of [['industry',35,'Industry'],['country',20,'Market']]){
    if(icp[key]==='All'){score+=weight;reasons.push(`${label}: unrestricted (+${weight})`);}
    else if((a[key]||'').toLowerCase()===icp[key].toLowerCase()){score+=weight;reasons.push(`${label}: matches (+${weight})`);}else reasons.push(`${label}: no match / unknown (+0)`);
  }
  if(Number.isFinite(a.employees)&&a.employees>=icp.min&&a.employees<=icp.max){score+=25;reasons.push('Headcount: in range (+25)');}else reasons.push('Headcount: outside range / unknown (+0)');
  if((a.signal||'').trim()){score+=20;reasons.push('Signal supplied (+20; not independently verified)');}else reasons.push('No signal supplied (+0)');
  return {...a,score,reasons:reasons.join('; ')};
}
export function sampleAccounts(){const sectors=['B2B SaaS','Fintech','Healthcare','E-commerce','IT services'];const countries=['US','Canada','UK','India','UAE','Australia'];return Array.from({length:200},(_,i)=>({company:`Example ${['Northstar','Orbit','Summit','Cedar','Atlas'][i%5]} ${String(i+1).padStart(3,'0')}`,domain:`account-${i+1}.example`,industry:sectors[i%5],country:countries[i%6],employees:[25,80,150,320,750][Math.floor(i/5)%5],signal:i%3===0?'Illustrative: hiring engineers':i%3===1?'Illustrative: enterprise launch':'',buyer:'CTO / VP Engineering (role hypothesis)',source:'Fictional demonstration record',origin:'Sample · fictional'}));}
export function transition(item,status){if(!['approved','rejected','draft'].includes(status))throw Error('Invalid status');if(status==='approved'&&item.status!=='draft')throw Error('Return this item to draft before approving.');return {...item,status,updated:new Date().toISOString()};}
