const e=new Set([{name:"clean",description:"Clean GitHub repositories",arguments:new Set([{name:"[repositories...]",description:"Repositories to clean."}]),action:(await import("../command/clean.js")).default},{name:"dispatch",description:"Trigger dispatch events.",arguments:new Set([{name:"[repositories...]",description:"Repositories on which to trigger dispatch events."}]),action:(await import("../command/dispatch.js")).default},{name:"dependabot",type:"workflow",description:"Put Dependabot everywhere.",action:(await import("../command/dependabot.js")).default},{name:"edit",arguments:new Set([{name:"[repositories...]",description:"Repositories to edit."}]),description:"Edit features for all repositories.",action:(await import("../command/edit.js")).default},{name:"node",type:"workflow",description:"Put node into GitHub Actions.",action:(await import("../command/node.js")).default},{name:"npm",type:"workflow",description:"Put NPM into GitHub Actions.",action:(await import("../command/npm.js")).default},{name:"rust",type:"workflow",description:"Put rust into GitHub Actions.",action:(await import("../command/rust.js")).default},{name:"workflows",description:"Trigger all workflow tasks.",action:async()=>{e.forEach(t=>{t.type==="workflow"&&t.action()})}},{name:"star",description:"Star all my used repositories.",action:(await import("../command/star.js")).default}]);var i=e;export{i as default};
