import{readFile as e}from"fs/promises";import{dirname as t,resolve as o}from"path";import{fileURLToPath as r}from"url";var m=new Set([{Path:"/workflows/",Name:"NPM.yml",Workflow:async()=>new Set([(await e(o(`${t(r(import.meta.url))}/../../Source/templates/.github/workflows/NPM.yml`),"utf-8")).toString()])}]);export{m as default};
