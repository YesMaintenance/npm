import { Octokit as o } from "@octokit/core";
import e from "../lib/env.js";
const s=new o({auth:e.GH_AUTH_TOKEN});var a=async(r="")=>{if(typeof r!="string")return;const t=r.replace("git://","https://").replace("https://github.com/","").replace("git+","").replace(".git","");try{await s.request(`PUT /user/starred/${t}`),console.log(`Starred repository: ${t}`)}catch{console.log(`Could not star repository: ${t}`)}};export { a as default };

