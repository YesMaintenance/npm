import * as r from "fs";
import l from "../lib/git-directories.js";
import n from "../lib/packages.js";
import w from "../options/pull.js";
const f=async i=>{for(const{path:t,name:s,workflow:e}of i)for(const[c]of await l(await n())){const o=`${c}/.github`,a=await e();if(a.size>0){try{await r.promises.mkdir(`${o}${t}`,{recursive:!0})}catch{console.log(`Could not create: ${o}${t}`)}try{await r.promises.writeFile(`${o}${t}${s}`,`${[...a].join("")}`)}catch{console.log(`Could not create workflow for: ${o}/workflows/pull.yml`)}}else try{await r.promises.access(`${o}${t}${s}`,r.constants.F_OK);try{await r.promises.rm(`${o}${t}${s}`)}catch{console.log(`Could not remove ${t}${s} for: ${o}`)}}catch{}}};var u=async()=>{await f(w)};export { u as default };

