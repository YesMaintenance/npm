import{access as s}from"fs/promises";import{dirname as c}from"path";import{constants as o}from"fs";const a=async(r,i)=>{const t=c(r),n=i||t;if(t===r)return n;try{return await s(`${t}/.git`,o.R_OK|o.W_OK),t}catch{return await a(t,n)}};var p=a;export{p as default};
