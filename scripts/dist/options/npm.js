import{dirname as o,resolve as t}from"path";import{readFile as e}from"fs/promises";import{fileURLToPath as r}from"url";const m=r(import.meta.url),i=o(m);var f=new Set([{path:"/workflows/",name:"npm.yml",workflow:async()=>new Set([(await e(t(`${i}/../../src/templates/.github/workflows/npm.yml`),"utf-8")).toString()])}]);export{f as default};
