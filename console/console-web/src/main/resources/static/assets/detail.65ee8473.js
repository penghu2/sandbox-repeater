import{_ as G}from"./index.70bdb397.js";/* empty css               *//* empty css              *//* empty css                *//* empty css               */import{d as S,e as _,r as T,B as C,aD as V,aG as a,aH as e,aM as f,E as H,aV as $,aW as j,bF as P,c4 as W,c5 as J,bM as Q,bx as X,by as Y,bL as Z,bD as q,c as z,aK as ee,C as w,F as ae,u as b,aN as N,aE as te,aL as ue,aF as oe,bE as le,bK as ne,bB as se,bC as re}from"./arco.46b62ede.js";import{g as ce}from"./vue.4bab78c1.js";import{h as de,u as ie,c as pe}from"./case.0ede9485.js";import{R as me,a as _e,I as fe}from"./invocation.52076e09.js";import{_ as ve}from"./index.vue_vue_type_script_setup_true_lang.e0cb0599.js";import{b as ye}from"./replay.72c39936.js";/* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css              *//* empty css              *//* empty css               */import"./chart.42ea7243.js";import"./base.3c7b4f95.js";import"./module.bf6e4bd0.js";const be={name:"CaseConfig"},Fe=S({...be,props:{caseId:{type:String}},setup(A){const g=A,r=_(!1),E=_("add"),t=_("\u65B0\u589E"),F=()=>!0,p=T({id:"0",caseId:"",version:0,configs:[]}),o=_([]),k=[{title:"\u6392\u5E8F\u6570\u7EC4",dataIndex:"key"},{title:"\u6392\u5E8F\u5B57\u6BB5",dataIndex:"field"},{title:"\u64CD\u4F5C",slotName:"buttons"}];de(g.caseId).then(l=>{var u,d,n,s;p.id=(u=l.data)==null?void 0:u.id,p.caseId=g.caseId,p.version=(d=l.data)==null?void 0:d.version,p.configs=(n=l.data)==null?void 0:n.configs,o.value=(s=l.data)==null?void 0:s.configs});const c=T({key:"",field:""}),D=_(),v=()=>{D.value.validate(l=>{if(l!==void 0){r.value=!0;return}if(E.value==="add"){const u=o.value;u.push({key:c.key,field:c.field}),o.value=u}})},m=()=>{r.value=!1},B=()=>{r.value=!0,E.value="add",t.value="\u65B0\u589E"},I=(l,u,d)=>{const n=o.value;n.splice(n.findIndex(s=>s.key===l.key)),o.value=n},x=()=>{p.configs=o.value,ie(p).then(l=>{$.success("\u66F4\u65B0\u6210\u529F")})};return(l,u)=>{const d=j,n=P,s=W,R=J,i=Q,h=X,M=Y,O=Z,U=q;return C(),V(U,{class:"general-card"},{default:a(()=>[e(R,{"default-active-key":["1",2]},{default:a(()=>[e(s,{header:"\u6392\u5E8F\u914D\u7F6E",key:"1"},{default:a(()=>[e(d,{type:"primary",size:"mini",onClick:B,style:{marginRight:"5px"}},{default:a(()=>[f(" \u6DFB\u52A0 ")]),_:1}),e(d,{type:"primary",size:"mini",onClick:x,status:"success"},{default:a(()=>[f(" \u4FDD\u5B58 ")]),_:1}),e(n,{style:H([{"margin-top":"5px"},{width:"50%"}]),"row-key":"key",columns:k,data:o.value,pagination:{pageSize:200},size:"small"},{buttons:a(({record:y,column:K,rowIndex:L})=>[e(d,{type:"outline",size:"mini",shape:"round",status:"danger",onClick:()=>{I(y,K,L)}},{default:a(()=>[f(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1},8,["data"])]),_:1})]),_:1}),e(O,{visible:r.value,"onUpdate:visible":u[2]||(u[2]=y=>r.value=y),"on-before-ok":F,title:t.value,onOk:v,onCancel:m},{default:a(()=>[e(M,{ref_key:"formRef",ref:D,model:c,layout:"vertical"},{default:a(()=>[e(h,{field:"key",label:"\u6392\u5E8F\u6570\u7EC4jsonpath",required:""},{default:a(()=>[e(i,{modelValue:c.key,"onUpdate:modelValue":u[0]||(u[0]=y=>c.key=y),placeholder:"\u8BF7\u8F93\u5165\u6570\u7EC4\u7684jsonpath"},null,8,["modelValue"])]),_:1}),e(h,{field:"field",label:"\u6392\u5E8F\u5B57\u6BB5jsonpath",required:""},{default:a(()=>[e(i,{modelValue:c.field,"onUpdate:modelValue":u[1]||(u[1]=y=>c.field=y),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u7684jsonpath"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"])]),_:1})}}}),ke={class:"container"},Be={key:1},Ce={name:"CaseDetail"},ge=S({...Ce,setup(A){const g=ce(),{caseId:r}=g.params,E=r,t=_(),F=_("");typeof r=="string"?pe(r).then(v=>{t.value=v.data,F.value=v.data.appName}):$.error("\u53C2\u6570\u4E0D\u6B63\u786E");const p=z(()=>t.value?[{label:"\u7528\u4F8BID",key:"caseId",value:t.value.caseId},{label:"\u7528\u4F8B\u540D\u79F0",key:"name",value:t.value.caseName},{label:"\u5E94\u7528\u540D",key:"appName",value:t.value.appName},{label:"\u6D41\u91CF\u7C7B\u578B",key:"recordType",value:t.value.recordType},{label:"\u5F55\u5236\u673A\u5668",key:"host",value:t.value.host},{label:"\u5F55\u5236\u73AF\u5883",key:"environment",value:t.value.environment},{label:"\u6DFB\u52A0\u4EBA",key:"user",value:t.value.user},{label:"\u5F55\u5236\u65F6\u95F4",key:"gmtRecord",value:t.value.gmtRecord},{label:"\u6DFB\u52A0\u65F6\u95F4",key:"gmtCreate",value:t.value.gmtCreate},{label:"\u6D41\u91CF\u5165\u53E3",key:"entranceDesc",value:t.value.entranceDesc}]:[]),o=z(()=>t.value),k=_(!1),c=()=>{k.value=!0},D=(v,m)=>{ye(m.appName,m.caseId,v.ip).then(B=>{window.open(`/#/replay/detail/${m.appName}/${B.data}`)})};return(v,m)=>{const B=ee("Breadcrumb"),I=ue,x=oe,l=j,u=le,d=ne,n=q,s=se,R=re;return C(),w("div",ke,[e(B),e(x,null,{default:a(()=>[e(I,null,{default:a(()=>[f("\u7528\u4F8B\u67E5\u8BE2")]),_:1}),e(I,null,{default:a(()=>[f("\u7528\u4F8B\u8BE6\u60C5")]),_:1})]),_:1}),e(n,{class:"general-card",title:"\u57FA\u7840\u4FE1\u606F"},{extra:a(()=>[ae("span",null,[e(l,{type:"primary",shape:"round",onClick:c},{default:a(()=>[f("\u56DE\u653E")]),_:1})])]),default:a(()=>[e(d,{data:b(p),layout:"inline-horizontal",style:{width:"100%"},column:3},{label:a(({label:i})=>[f(N(i),1)]),value:a(({value:i,data:h})=>[h.key==="recordType"?(C(),V(u,{key:0,color:"green",size:"small"},{default:a(()=>[f(N(i),1)]),_:2},1024)):(C(),w("span",Be,N(i),1))]),_:1},8,["data"])]),_:1}),e(n,{class:"general-card",title:"\u8C03\u7528\u4FE1\u606F",style:{"margin-top":"10px"}},{default:a(()=>[e(R,{"default-active-key":"1",type:"rounded"},{default:a(()=>[e(s,{key:"1",title:"\u8BF7\u6C42\u4FE1\u606F"},{default:a(()=>[e(me,{record:b(o)},null,8,["record"])]),_:1}),e(s,{key:"2",title:"\u8FD4\u56DE\u7ED3\u679C"},{default:a(()=>[e(_e,{record:b(o)},null,8,["record"])]),_:1}),e(s,{key:"3",title:"\u5B50\u8C03\u7528"},{default:a(()=>[e(fe,{record:b(o)},null,8,["record"])]),_:1}),e(s,{key:"4",title:"\u5BF9\u6BD4\u914D\u7F6E"},{default:a(()=>[e(Fe,{caseId:b(E)},null,8,["caseId"])]),_:1})]),_:1})]),_:1}),F.value!==""?(C(),V(ve,{key:0,visible:k.value,"onUpdate:visible":m[0]||(m[0]=i=>k.value=i),record:b(o),"app-name":F.value,onOk:D},null,8,["visible","record","app-name"])):te("",!0)])}}});const Ge=G(ge,[["__scopeId","data-v-3c5d07b0"]]);export{Ge as default};