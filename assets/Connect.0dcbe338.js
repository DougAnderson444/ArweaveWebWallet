var te=Object.defineProperty,ne=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var O=(t,a,n)=>a in t?te(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,q=(t,a)=>{for(var n in a||(a={}))se.call(a,n)&&O(t,n,a[n]);if(R)for(var n of R(a))oe.call(a,n)&&O(t,n,a[n]);return t},G=(t,a)=>ne(t,ae(a));import{e as p,d as y,w as le,P as ce,o as s,f as o,k as m,l as C,M as K,R as D,I as B,J as W,g as l,j as _,D as E,s as g,F as V,h as $,p as b,O as k,a as L,C as de,N as ie,T as re}from"./vendor.9d5857d8.js";import{_ as w,c as F,d as H,f as P,D as _e,b as Q,T as ue,i as me,A as T,j as ve,n as fe,k as xe,l as he,a as ge,m as pe,o as Y,s as U,p as we}from"./index.b9a14d3b.js";const ye={props:["modelValue"],setup(t,{emit:a}){const n=p({get(){return t.modelValue},set(c){a("update:modelValue",c)}}),e=y(null),i=p(()=>{var c;return((c=e.value)==null?void 0:c.children)?Array(...e.value.children).slice(1,e.value.children.length-1):null}),r=()=>{var c,d;(d=(c=i.value)==null?void 0:c[Math.max(n.value||0,0)])==null||d.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})};return le(r),ce(()=>setTimeout(r)),{model:n,root:e}}},J=t=>(B("data-v-7561eed9"),t=t(),W(),t),be={ref:"root",class:"carousel flex-row no-scrollbar"},ke=J(()=>l("div",{class:"margin fade-list-item",key:"margin1"},null,-1)),Ie=J(()=>l("div",{class:"margin fade-list-item",key:"margin2"},null,-1));function Ce(t,a,n,e,i,r){return s(),o("div",be,[m(D,{name:"fade-list"},{default:C(()=>[ke,K(t.$slots,"default",{},void 0,!0),Ie]),_:3})],512)}var Ve=w(ye,[["render",Ce],["__scopeId","data-v-7561eed9"]]);const $e={components:{AddressIcon:F},props:["modelValue","default","exit","active"],setup(t,{emit:a}){return{model:p({get(){return t.modelValue||t.default},set(e){a("update:modelValue",e)}}),InterfaceStore:H}}},X=t=>(B("data-v-5a61efe6"),t=t(),W(),t),Te={class:"wallet-selector"},Se=X(()=>l("div",{class:"exit-background"},null,-1)),Ae=X(()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[l("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1)),Be=[Se,Ae];function We(t,a,n,e,i,r){const c=_("AddressIcon");return s(),o("div",Te,[e.model?(s(),o("button",{key:0,type:"button",onClick:a[0]||(a[0]=d=>t.$emit("selectWallet")),class:E(["tab",{active:n.active}])},[m(c,{address:e.model},null,8,["address"])],2)):g("",!0),n.exit?(s(),o("button",{key:1,class:"exit",type:"button",onClick:a[1]||(a[1]=d=>t.$emit("exit"))},Be)):g("",!0)])}var Ee=w($e,[["render",We],["__scopeId","data-v-5a61efe6"]]);const Me={components:{AddressIcon:F},props:["addresses","modelValue"],setup(t,{emit:a}){return{model:p({get(){return t.modelValue},set(e){a("update:modelValue",e)}})}}},Ne={class:"wallet-tabs"},ze=["onClick"];function De(t,a,n,e,i,r){const c=_("AddressIcon");return s(),o("div",Ne,[(s(!0),o(V,null,$(n.addresses,d=>(s(),o("button",{key:d,type:"button",onClick:f=>e.model=d,class:E(["tab",{active:d==e.model}])},[m(c,{address:d},null,8,["address"])],10,ze))),128))])}var Le=w(Me,[["render",De],["__scopeId","data-v-09215434"]]);const Fe={components:{Icon:P},props:["icon","img"],setup(){}},He={class:"icon-background"};function Pe(t,a,n,e,i,r){const c=_("Icon");return s(),o("div",He,[n.img?(s(),b(c,{key:0,class:"page-logo",icon:n.img},null,8,["icon"])):(s(),b(c,{key:1,class:"page-logo placeholder",icon:n.icon},null,8,["icon"]))])}var Z=w(Fe,[["render",Pe],["__scopeId","data-v-34c166f1"]]);const Ue={props:["modelValue"],setup(t,{emit:a}){return{expanded:p({get(){return t.modelValue},set(e){a("update:modelValue",e)}})}}},ee=t=>(B("data-v-52e2fbe0"),t=t(),W(),t),je=ee(()=>l("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"},null,-1)),Re=ee(()=>l("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},null,-1)),Oe=[je,Re];function qe(t,a,n,e,i,r){return s(),o("button",{type:"button",class:"expand",onClick:a[0]||(a[0]=c=>e.expanded=!e.expanded)},[(s(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:E({expanded:e.expanded})},Oe,2))])}var Ge=w(Ue,[["render",qe],["__scopeId","data-v-52e2fbe0"]]);const Ke={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFF"},Qe=l("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Ye=l("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"},null,-1),Je=[Qe,Ye];function Xe(t,a){return s(),o("svg",Ke,Je)}var Ze={render:Xe};const et={components:{IconBackground:Z,Icon:P,Date:_e,Expand:Ge},props:["data"],setup(t){return{IconNotification:Ze}}},tt={class:"flex-row"},nt={class:"flex-row",style:{flex:"1 1 0"}},at={class:"content"},st={class:"title"},ot={class:"secondary-text"},lt={key:1,class:"actions flex-row"},ct=["onClick"];function dt(t,a,n,e,i,r){const c=_("IconBackground"),d=_("Date"),f=_("Icon"),x=_("Expand");return s(),o("div",{class:E(["notification",{expanded:n.data.expanded}])},[l("div",tt,[l("div",nt,[m(c,{icon:n.data.icon||e.IconNotification,img:n.data.img},null,8,["icon","img"]),l("div",at,[n.data.expanded?(s(),b(d,{key:0,class:"secondary-text",timestamp:n.data.timestamp},null,8,["timestamp"])):g("",!0),l("div",st,k(n.data.title),1),l("div",ot,[K(t.$slots,"default",{},void 0,!0)]),n.data.expanded?(s(),o("div",lt,[(s(!0),o(V,null,$(n.data.actions,h=>(s(),o("button",{key:h.name,onClick:h.run,type:"button",class:"action flex-row"},[m(f,{icon:h.icon},null,8,["icon"]),l("div",null,k(h.name),1)],8,ct))),128))])):g("",!0)])]),m(x,{modelValue:n.data.expanded,"onUpdate:modelValue":a[0]||(a[0]=h=>n.data.expanded=h)},null,8,["modelValue"])])],2)}var it=w(et,[["render",dt],["__scopeId","data-v-46c98511"]]);const rt={components:{Address:Q},props:["tx"],setup(t){return{verticalElement:p(()=>H.breakpoints.verticalLayout)}}},_t={class:"tx-card-extension"},ut={class:"secondary-text"};function mt(t,a,n,e,i,r){return s(),o("div",_t,[l("div",ut,[(s(!0),o(V,null,$(n.tx.tags,c=>(s(),o("div",null,k(c.name+": "+c.value),1))),256))])])}var vt=w(rt,[["render",mt]]);const ft={components:{TxCard:ue,TxCardExtension:vt},props:["messageEntry"],setup(t){const a=y(null);if(t.messageEntry.message.method==="signTransaction"){console.log(t.messageEntry.message.params.tx);const n=t.messageEntry.message.params.tx,e=n.tags.map(({name:i,value:r})=>({name:window.atob(i),value:window.atob(r)}));a.value=G(q({},n),{tags:e})}return{tx:a}}},xt={key:0};function ht(t,a,n,e,i,r){const c=_("TxCard"),d=_("TxCardExtension");return n.messageEntry.message.method==="signTransaction"?(s(),o("div",xt,[m(c,{tx:e.tx},null,8,["tx"]),m(d,{tx:e.tx},null,8,["tx"])])):g("",!0)}var gt=w(ft,[["render",ht]]);const pt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#fff"},wt=l("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),yt=l("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},null,-1),bt=[wt,yt];function kt(t,a){return s(),o("svg",pt,bt)}var It={render:kt};const Ct={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#fff"},Vt=l("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),$t=l("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"},null,-1),Tt=[Vt,$t];function St(t,a){return s(),o("svg",Ct,Tt)}var At={render:St};const Bt={components:{PermissionCard:gt,WalletSelector:Ee,WalletTabs:Le,Tabs:me,IconBackground:Z,Icon:P,Notification:it},props:["state"],setup(t){var j;const a=(j=T.wallets[0])==null?void 0:j.key,n=p(()=>T.wallets.map(u=>u.key)),e=y(t.state.wallet||a),i=[{name:"Requests",color:"var(--orange)"},{name:"Permissions",color:"var(--green)"}],r=y(e.value?i[0].name:null);L(()=>t.state.wallet,u=>{x.value=!1,e.value=u,r.value=i[0].name});const c=()=>t.state.wallet=!1,d=()=>{x.value=!1,t.state.wallet=e.value},f=()=>{x.value=!1,e.value=t.state.wallet},x=y(!t.state.wallet),h=()=>{var u;if(!x.value){x.value=!0;return}e.value=t.state.wallet||((u=T.wallets[0])==null?void 0:u.key),x.value=!1},M=p(()=>{var A;const u=t.state.wallet?`Switch to ${e.value}`:`Connect to ${((A=t.state.appInfo)==null?void 0:A.name)||t.state.origin} from the account ${e.value}`;return{title:t.state.wallet?"Switch":"Connect",timestamp:Date.now(),actions:[{name:"Connect",icon:It,run:d},{name:t.state.wallet?"Cancel":"Switch",icon:ve,run:t.state.wallet?f:h}],expanded:!0,content:u}}),N=p(()=>t.state.messageQueue.filter(u=>!u.fulfilled)),S=de(H.breakpoints,"verticalLayout"),I=y(null),v=(u,A)=>u>A?I.value="slide-left":I.value="slide-right";L(()=>i.findIndex(u=>u.name===r.value),v),L(()=>T.wallets.findIndex(u=>u.key===e.value),v);const z=y(null);return(async()=>z.value=await ge.createTransaction({data:"hello",quantity:"100000000000",target:"32s5eCodNO16YMtSkmKNipQMtjpWz_SORUKwkGvrcrg"}))().then(()=>console.log(z.value)),{test:z,defaultAddress:a,addresses:n,currentAddress:e,tabs:i,currentTab:r,isSelectingWallet:x,selectWallet:h,connectData:M,connectionFeed:N,verticalLayout:S,transitionName:I,disconnect:c,navigateBack:fe,navigateBackAvailable:xe,IconConnection:he,IconLauch:At}}},Wt=t=>(B("data-v-67db906c"),t=t(),W(),t),Et={class:"connection-card flex-column no-scrollbar"},Mt={class:"flex-row"},Nt=["disabled"],zt={style:{"min-width":"0"}},Dt={class:"ellipsis"},Lt={class:"secondary-text ellipsis"},Ft={class:"flex-column",style:{flex:"1 1 0"}},Ht={class:"container"},Pt={class:"container-scroll"},Ut={key:0},jt={class:"box status fade-list-item",key:"0"},Rt={key:1},Ot=Wt(()=>l("div",{class:"box status fade-list-item",key:"0"},"WIP",-1));function qt(t,a,n,e,i,r){var S,I;const c=_("IconBackground"),d=_("Icon"),f=_("WalletSelector"),x=_("Tabs"),h=_("WalletTabs"),M=_("Notification"),N=_("PermissionCard");return s(),o("div",Et,[l("div",Mt,[l("button",{type:"button",class:"info flex-row",onClick:a[0]||(a[0]=(...v)=>e.navigateBack&&e.navigateBack(...v)),disabled:!e.navigateBackAvailable(n.state.origin,n.state.session)},[m(c,{img:(S=n.state.appInfo)==null?void 0:S.logo,icon:e.IconConnection},null,8,["img","icon"]),l("div",zt,[l("div",Dt,k(((I=n.state.appInfo)==null?void 0:I.name)||"Connector"),1),l("div",Lt,k(n.state.origin),1)]),e.navigateBackAvailable(n.state.origin,n.state.session)?(s(),b(d,{key:0,icon:e.IconLauch},null,8,["icon"])):g("",!0)],8,Nt),m(f,{modelValue:n.state.wallet,"onUpdate:modelValue":a[1]||(a[1]=v=>n.state.wallet=v),default:e.defaultAddress,exit:!0,active:!e.isSelectingWallet,onSelectWallet:e.selectWallet,onExit:e.disconnect},null,8,["modelValue","default","active","onSelectWallet","onExit"])]),l("div",Ft,[m(x,{tabs:e.tabs,modelValue:e.currentTab,"onUpdate:modelValue":a[2]||(a[2]=v=>e.currentTab=v),disabled:!e.currentAddress},null,8,["tabs","modelValue","disabled"]),l("div",Ht,[l("div",Pt,[m(re,{name:e.transitionName,mode:"out-in"},{default:C(()=>[(s(),o("div",{key:(e.currentAddress||"")+e.currentTab,class:"content"},[e.currentTab==="Requests"?(s(),o("div",Ut,[m(D,{name:"fade-list"},{default:C(()=>[e.isSelectingWallet?(s(),b(h,{addresses:e.addresses,modelValue:e.currentAddress,"onUpdate:modelValue":a[3]||(a[3]=v=>e.currentAddress=v),class:"box fade-list-item",key:"0"},null,8,["addresses","modelValue"])):g("",!0),e.connectionFeed.length===0&&n.state.wallet&&n.state.wallet===e.currentAddress?(s(),o("div",jt,"Connected")):g("",!0),e.currentAddress!==n.state.wallet?(s(),b(M,{data:e.connectData,class:"box fade-list-item",key:"1"},{default:C(()=>[ie(k(e.connectData.content),1)]),_:1},8,["data"])):g("",!0),(s(!0),o(V,null,$(e.connectionFeed,v=>(s(),b(N,{key:v.timestamp,messageEntry:v,style:{padding:"var(--spacing)"},class:"box flex-column fade-list-item"},null,8,["messageEntry"]))),128))]),_:1})])):e.currentTab==="Permissions"?(s(),o("div",Rt,[m(D,{name:"fade-list"},{default:C(()=>[e.isSelectingWallet?(s(),b(h,{addresses:e.addresses,modelValue:e.currentAddress,"onUpdate:modelValue":a[4]||(a[4]=v=>e.currentAddress=v),class:"box fade-list-item",key:"0"},null,8,["addresses","modelValue"])):g("",!0),Ot]),_:1})])):g("",!0)]))]),_:1},8,["name"])])])])])}var Gt=w(Bt,[["render",qt],["__scopeId","data-v-67db906c"]]);const Kt={components:{Carousel:Ve,ConnectionCard:Gt,AddressIcon:F,Address:Q,Button:pe},setup(){const t=y(Y.value.findIndex(n=>n.origin===U.origin&&n.session===U.session)),a=p(()=>T.currentWallet);return{currentConnectorIndex:t,currentWallet:a,connectors:Y,state:U,states:we}}},Qt={class:"connect flex-column"},Yt={class:"bottom-info secondary-text",style:{opacity:"0.0","pointer-events":"none"}};function Jt(t,a,n,e,i,r){const c=_("ConnectionCard"),d=_("Carousel");return s(),o("div",Qt,[m(d,{modelValue:e.currentConnectorIndex,"onUpdate:modelValue":a[0]||(a[0]=f=>e.currentConnectorIndex=f),class:"connectors"},{default:C(()=>[(s(!0),o(V,null,$(e.connectors,f=>(s(),o("div",{key:f.session,class:"connection-card-container fade-list-item"},[m(c,{state:f,class:"box"},null,8,["state"])]))),128))]),_:1},8,["modelValue"]),l("div",Yt,[l("div",null,"All Channels "+k(Object.keys(e.states).length),1),(s(!0),o(V,null,$(e.states,(f,x)=>(s(),o("div",{key:x},k(f),1))),128))])])}var nn=w(Kt,[["render",Jt],["__scopeId","data-v-0cc1a1fc"]]);export{nn as default};
