import{_ as y,O as U,A as I,a as D,B as H,I as P,F as q,g as J,b as M,c as $,d as A,h as E,e as G}from"./index.ce97a49d.js";import{d as k,e as h,p as w,o,u as R,s as L,a,M as F,f as b,c as i,r as N,x as O,y as T,q as u,Q as f,z as g,aa as Q,t as V,L as s,ab as Z,Z as z,F as W,U as K,V as X}from"./vendor.ff995856.js";const Y={components:{Observer:U},props:["src"],setup(n,{emit:t}){const d=k(null),e=k(null),r=k(null),v=p=>{console.log(p),e.value=p.width/p.height},_=()=>{r.value=d.value.naturalWidth/d.value.naturalHeight,t("load")},l=h(()=>e.value&&r.value&&e.value<r.value),m=h(()=>e.value&&r.value&&e.value>=r.value);return{x:l,y:m,resize:v,load:_,imgRef:d}}},ee={class:"frame-scroller"},te=["src"];function ae(n,t,d,e,r,v){const _=w("Observer");return o(),R(_,{observe:"resize",onResize:e.resize,class:F(["img",{x:e.x,y:e.y}])},{default:L(()=>[a("div",ee,[a("img",{ref:"imgRef",src:d.src,onLoad:t[0]||(t[0]=(...l)=>e.load&&e.load(...l))},null,40,te)])]),_:1},8,["onResize","class"])}var se=y(Y,[["render",ae],["__scopeId","data-v-729c6e3c"]]);const ne={props:["tx"],setup(n){b(()=>n.tx,t=>{console.log(t),!!t},{immediate:!0})}},oe={class:"smart-weave"};function re(n,t,d,e,r,v){return o(),i("div",oe," SmartWeave Contract ")}var de=y(ne,[["render",re]]);const le={components:{Img:se,SmartWeave:de},props:["tx"],setup(n){const t=N({handler:null,loaded:!1,payload:null}),d=h(()=>I.gatewayURL+n.tx.id);return b(()=>n.tx,async()=>{var e,r,v,_,l,m;if(!!n.tx&&(t.handler=null,t.loaded=!1,((e=n.tx.data)==null?void 0:e.size)!=="0"))if(((r=n.tx.data)==null?void 0:r.type)==="application/x.arweave-manifest+json"||((v=n.tx.data)==null?void 0:v.type)==="text/html"||((_=n.tx.data)==null?void 0:_.type)==="application/pdf")t.handler="iframe";else if(((m=(l=n.tx.data)==null?void 0:l.type)==null?void 0:m.split("/")[0])==="image")t.handler="img";else{t.handler="raw";try{if(t.payload=await D.transactions.getData(n.tx.id,{decode:!0,string:!0}),t.payload[0]==="{")try{t.payload=JSON.stringify(JSON.parse(t.payload),null,2),t.handler="json"}catch{}}catch{}}},{immediate:!0}),{gatewayLink:d,data:t}}},ie={key:"iframe",class:"selector iframe-container box"},ce=["src"],_e={key:"img",class:"selector img-container box"},ue={key:"smartweave",class:"selector"},ve={key:"json",class:"selector data-container box"},me={class:"raw"};function he(n,t,d,e,r,v){const _=w("Img"),l=w("SmartWeave");return e.data.handler==="iframe"?O((o(),i("div",ie,[a("iframe",{class:"iframe",src:e.gatewayLink,onLoad:t[0]||(t[0]=m=>e.data.loaded=!0)},null,40,ce)],512)),[[T,e.data.loaded]]):e.data.handler==="img"?O((o(),i("div",_e,[u(_,{src:e.gatewayLink,onLoad:t[1]||(t[1]=m=>e.data.loaded=!0)},null,8,["src"])],512)),[[T,e.data.loaded]]):e.data.handler==="smartweave"?(o(),i("div",ue,[u(l,{tx:d.tx},null,8,["tx"])])):e.data.handler==="json"||e.data.handler==="raw"?(o(),i("div",ve,[a("pre",me,f(e.data.payload),1)])):g("",!0)}var fe=y(le,[["render",he],["__scopeId","data-v-ee87589c"]]);const x=n=>(K("data-v-72a4821d"),n=n(),X(),n),ge={class:"meta flex-column"},pe={class:"card"},xe={class:"row flex-row"},ye={class:"item",style:{"font-size":"1.5em"}},ke={class:"row flex-row"},we={class:"item"},be={class:"row flex-row"},Se={class:"item"},Ie=x(()=>a("h3",null,"Properties",-1)),Le={class:"card flex-column"},ze=x(()=>a("h3",null,"ID",-1)),je={class:"ellipsis"},Be={key:0},Ce=["href"],De={key:1},$e=["href"],Ae={key:0},Re=x(()=>a("h3",null,"Pending",-1)),Fe={key:0},Ne={key:1},Oe=x(()=>a("h3",null,"Block",-1)),Te={class:"ellipsis"},Ve=x(()=>a("h3",null,"Data",-1)),We=z(" Fee "),Ue=x(()=>a("h3",null,"Tags",-1)),He={style:{background:"var(--background2)","border-radius":"var(--border-radius)"}},Pe={key:1},qe=Q({props:{txId:null},setup(n){const t=n;let d=N({});const e=h(()=>d.value);b(()=>t.txId,()=>d.value=J(t.txId),{immediate:!0});const r=h(()=>{var c;return((c=e.value.data)==null?void 0:c.size)!="0"}),v=h(()=>!e.value.block),_=h(()=>{if(!e.value.block)return"";const c=new Date(e.value.block.timestamp*1e3);return c.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})+" "+c.toLocaleTimeString()}),l=k(null),m=V(H,"currentHeight"),p=h(()=>{if(!e.value.tags)return;const c=[];for(const S of e.value.tags)c.push({items:[{name:"",value:S.name,attrs:{disabled:!0}},{name:"",value:S.value,attrs:{disabled:!0}}]});return c});b(()=>t.txId,async()=>{M(),D.transactions.getStatus(t.txId).then(c=>l.value=c.status).catch(()=>l.value="Not Found")},{immediate:!0});const j=V(P.breakpoints,"verticalContent");return(c,S)=>{const B=w("Amount");return s(e)?(o(),R(q,{key:0},Z({left:L(()=>{var C;return[a("div",ge,[a("div",pe,[a("div",xe,[a("div",ye,[u(B,{ar:s(e).quantity.ar},null,8,["ar"])])]),a("div",ke,[a("div",we,[u($,{address:s(e).owner.address},null,8,["address"]),u(A,{class:"secondary-text",address:s(e).owner.address},null,8,["address"])])]),a("div",be,[a("div",Se,[u($,{address:s(e).recipient},null,8,["address"]),u(A,{class:"secondary-text",address:s(e).recipient},null,8,["address"])])])]),Ie,a("div",Le,[a("div",null,[ze,a("div",je,f(s(e).id),1),s(r)?(o(),i("div",Be,[a("a",{href:s(I).gatewayURL+s(e).id,target:"_blank"},"Link",8,Ce)])):g("",!0),((C=s(e).data)==null?void 0:C.type)==="application/x.arweave-manifest+json"?(o(),i("div",De,[a("a",{href:s(I).gatewayURL+"tx/"+s(e).id+"/data.json",target:"_blank"},"Manifest",8,$e)])):g("",!0)]),s(v)?(o(),i("div",Ae,[Re,l.value?(o(),i("div",Fe,"Status: "+f(l.value),1)):g("",!0)])):(o(),i("div",Ne,[Oe,a("div",Te,f(s(e).block.id),1),a("span",null,[z(f(s(e).block.height)+" ",1),s(m)?(o(),i(W,{key:0},[z("/ "+f(s(m)),1)],64)):g("",!0)]),a("div",null,f(s(_)),1)])),a("div",null,[Ve,a("div",null,"Data size "+f(s(E)(s(e).data.size)),1),a("div",null,[We,u(B,{ar:s(e).fee.ar},null,8,["ar"])])])]),s(p).length?(o(),i(W,{key:0},[Ue,a("div",He,[u(G,{schema:s(p),disabled:""},null,8,["schema"])])],64)):g("",!0),s(j)?(o(),i("br",Pe)):g("",!0)])]}),_:2},[s(r)?{name:"right",fn:L(()=>[u(fe,{tx:s(e),class:F({inline:!s(j)})},null,8,["tx","class"])])}:void 0]),1024)):g("",!0)}}});var Ee=y(qe,[["__scopeId","data-v-72a4821d"]]);export{Ee as default};
