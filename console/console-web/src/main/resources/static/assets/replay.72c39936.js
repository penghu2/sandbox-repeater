import{e as t}from"./base.3c7b4f95.js";function i(e,a,p){return t({url:"/api/v1/replay/execute",method:"post",data:{appName:e,traceId:a,ip:p}})}function u(e,a,p){return t({url:"/api/v1/replay/executeCase",method:"post",data:{appName:e,caseId:a,ip:p}})}function l(e,a){return t({url:`/api/v1/replay/detail?appName=${e}&repeatId=${a}`,method:"get"})}export{l as a,u as b,i as r};