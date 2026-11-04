import assert from 'node:assert/strict';
import {parseCSV,csv,qualify,sampleAccounts,transition} from '../dist/core.mjs';
const rows=parseCSV('company,domain,employees,signal\r\n"Acme, Inc",acme.example,80,"Hiring\nengineers"\r\nDuplicate,https://www.acme.example/,100,yes\r\nOther,other.example,unknown,"A ""quote"""');
assert.equal(rows.length,2);assert.equal(rows[0].company,'Acme, Inc');assert.equal(rows[0].signal,'Hiring\nengineers');assert.equal(rows[1].employees,null);assert.equal(rows[1].signal,'A "quote"');
assert.throws(()=>parseCSV('name\nAcme'),/company/);assert.throws(()=>parseCSV('company\n"Acme'),/Unclosed/);assert.throws(()=>parseCSV('company,domain\nAcme'),/columns/);assert.throws(()=>parseCSV('company,company\na,b'),/Duplicate/);
assert.ok(csv([{company:'=HYPERLINK("x")'}],['company']).includes("'=HYPERLINK"));assert.ok(csv([{company:' @SUM(1)'}],['company']).includes("' @SUM"));
const icp={industry:'B2B SaaS',country:'US',min:50,max:500};assert.equal(qualify({industry:'B2B SaaS',country:'US',employees:50,signal:'hiring'},icp).score,100);assert.equal(qualify({industry:'Other',country:'India',employees:null,signal:''},icp).score,0);assert.equal(sampleAccounts().length,200);assert.ok(sampleAccounts().every(a=>a.domain.endsWith('.example')));
assert.equal(transition({status:'draft'},'approved').status,'approved');assert.throws(()=>transition({status:'rejected'},'approved'));assert.throws(()=>transition({status:'draft'},'sent'));console.log('Core checks passed: CSV boundaries, dedup, formula escaping, scoring and approval transitions.');
