import i from"../lib/env.js";import n from"../lib/request.js";const a=i.GITHUB_USER,c=[],s=[],w=async(t=[])=>{for(const o of(await n(`GET /users/${a}/repos`)).data)s.push({owner:a,name:o.name});for(const o of(await n(`GET /users/${a}/orgs`)).data){c.push({name:o.login});for(const e of(await n(`GET /orgs/${o.login}/repos`)).data)s.push({owner:o.login,name:e.name})}let r;for(const o of s){for(const e of t)o.name===e?r=!0:r=!1;if(typeof r>"u"||r){for(const e of(await n(`GET /repos/${o.owner}/${o.name}/actions/caches`,{owner:o.owner,repo:o.name})).data.actions_caches)await n(`DELETE /repos/${o.owner}/${o.name}/actions/caches/${e.id}`,{owner:o.owner,repo:o.name,cache_id:e.id});for(const e of(await n(`GET /repos/${o.owner}/${o.name}/actions/runs`,{owner:o.owner,repo:o.name})).data.workflow_runs)await n(`DELETE /repos/${o.owner}/${o.name}/actions/runs/${e.id}`,{owner:o.owner,repo:o.name,run_id:e.id}),await n(`DELETE /repos/${o.owner}/${o.name}/actions/runs/${e.id}/logs`,{owner:o.owner,repo:o.name,run_id:e.id})}}};var m=w;export{m as default};
