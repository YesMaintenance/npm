import{readFile as t}from"fs/promises";import{dirname as e,resolve as o}from"path";import{fileURLToPath as r}from"url";var m=new Set([{Path:"/workflows/",Name:"Rust.yml",Workflow:async()=>new Set([(await t(o(`${e(r(import.meta.url))}/../../Source/templates/.github/workflows/Rust.yml`),"utf-8")).toString()])}]);export{m as default};
