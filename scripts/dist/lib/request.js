import { Octokit as s } from "@octokit/core";
import { deepmerge as c } from "deepmerge-ts";
import r from "etag";
import i from "../lib/env.js";
const n=new s({auth:i.GH_AUTH_TOKEN}),m=async(t,o={},e="octokit")=>{try{switch(console.log(`Successfully ${t}`),e){case"octokit":return await n.request(t,c(o,{headers:{"If-None-Match":r(t)}}))}}catch{console.log(`Could not ${t}`)}};var k=m;export { k as default };

