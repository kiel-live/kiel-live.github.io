var ot=Object.defineProperty;var Me=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var Se=(t,e,s)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,H=(t,e)=>{for(var s in e||(e={}))it.call(e,s)&&Se(t,s,e[s]);if(Me)for(var s of Me(e))at.call(e,s)&&Se(t,s,e[s]);return t};import{_ as W,i as ct,a as Ie,b as Ee,s as te,c as se,u as ne,v as Ae,t as de,d as lt,e as ut,f as dt}from"./index.1e898100.js";import{d as T,j as re,H as V,f as C,I as ze,J as Ce,o as h,c as g,a as p,p as x,l as Le,n as oe,K as ht,b as U,e as Re,L as Te,r as Q,i as w,w as I,M as pt,t as k,g as m,N as Y,O as X,h as $,s as Oe,P as Ne,m as ie,Q as ft,R as _t,q as mt,T as gt}from"./vendor.3aab7ad4.js";import{_ as vt}from"./logo.25de555e.js";const yt=T({name:"DetailsPopup",props:{isOpen:{type:Boolean,required:!0},size:{type:String,default:"3/4"},disableResize:{type:Boolean}},emits:{close:()=>!0},setup(t,{emit:e}){const s=re(!1),n=re(),r=V(t,"isOpen"),o=V(t,"size"),a=V(t,"disableResize"),i=C(()=>{if(a.value&&o.value==="1")return"full";if(!r.value)return"closed";if(s.value){if(n.value===void 0)return"closed";const u=n.value/window.innerHeight;return o.value==="1/2"&&u>.6||o.value==="3/4"&&u>.85?"maximizing":o.value==="1/2"&&u<.4||o.value==="3/4"&&u<.65?"closing":"defaulting"}return n.value===0?"closed":n.value===window.innerHeight?"full":"default"});function c(u){a.value||(s.value=!0,n.value=window.innerHeight-u.touches[0].clientY)}function l(u){!s.value||(n.value=window.innerHeight-u.touches[0].clientY)}function d(){!s.value||(i.value==="maximizing"?n.value=window.innerHeight:i.value==="closing"?(n.value=void 0,e("close")):i.value==="defaulting"&&(n.value=void 0),s.value=!1)}return{drag:c,move:l,drop:d,actualSize:i,height:n,dragging:s}}}),kt={class:"flex-shrink-0 bg-gray-500 w-12 h-1.5 rounded-full mx-auto"};function $t(t,e,s,n,r,o){return ze((h(),g("div",{class:oe(["absolute bottom-0 left-0 right-0 flex flex-col w-full z-10 bg-white shadow-top md:shadow-right md:rounded-none md:w-80 md:top-0 md:h-auto transition dark:bg-dark-400 dark:text-gray-300 dark:border-dark-800",{"overflow-hidden max-h-0":t.actualSize==="closed","h-full md:mx-auto md:w-200 md:shadow-none":t.actualSize==="full","h-1/2":t.size==="1/2"&&t.actualSize==="default","h-3/4":t.size==="3/4"&&t.actualSize==="default","p-4 pb-0 pt-2":t.actualSize!=="closed"&&t.actualSize!=="full","rounded-t-2xl":t.actualSize!=="full","rounded-none p-4 pt-16":t.actualSize==="full","opacity-80":t.actualSize==="closing",fade:!t.dragging}]),style:ht({height:t.isOpen?t.height===void 0?void 0:`${t.height}px`:0}),onTouchmove:e[1]||(e[1]=(...a)=>t.move&&t.move(...a)),onTouchend:e[2]||(e[2]=(...a)=>t.drop&&t.drop(...a))},[t.disableResize?x("",!0):(h(),g("div",{key:0,class:"w-full -mt-4 pt-4 pb-4 md:hidden",onTouchstart:e[0]||(e[0]=(...a)=>t.drag&&t.drag(...a))},[ze(p("div",kt,null,512),[[Ce,t.actualSize!=="full"]])],32)),Le(t.$slots,"default",{},void 0,!0)],38)),[[Ce,t.isOpen]])}var he=W(yt,[["render",$t],["__scopeId","data-v-a1895d76"]]);const bt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},xt=p("path",{d:"M19.35 10.04A7.49 7.49 0 0 0 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46a5.497 5.497 0 0 1 8.05 4.87v.5H19c1.66 0 3 1.34 3 3c0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73L4.27 4L3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z",fill:"currentColor"},null,-1),wt=[xt];function Mt(t,e){return h(),g("svg",bt,wt)}var St={name:"ic-baseline-cloud-off",render:Mt};const It=T({name:"AppBar",props:{searchInput:{type:String,required:!0}},emits:{"update:search-input":t=>!0},setup(t,{emit:e}){const{t:s}=U(),n=Re(),r=Te(),o=V(t,"searchInput"),a=C({get(){return o.value},set(i){e("update:search-input",i),i.length>0&&n.name!=="search"&&r.push({name:"search"}),i.length===0&&n.name==="search"&&r.push({name:"home"})}});return{t:s,isConnected:ct,internalSearchInput:a}}}),Et={class:"absolute top-0 left-0 right-0 mx-2 mt-2 h-12 flex rounded-md py-4 items-center justify-between bg-white border-1 border-gray-200 shadow-xl z-20 md:transform md:-translate-x-1/2 md:right-auto md:left-1/2 md:w-96 dark:bg-dark-400 dark:text-gray-300 dark:border-dark-800"},At=["alt"],zt={key:0,class:"flex flex-grow mr-2"},Ct=["value","placeholder"],Lt={key:1,class:"flex space-x-2 mr-2 items-center"};function Rt(t,e,s,n,r,o){const a=Q("router-link"),i=St;return h(),g("div",Et,[w(a,{to:{name:"home"},class:"p-2"},{default:I(()=>[p("img",{alt:t.t("logo_alt"),src:vt,class:"w-6 h-6"},null,8,At)]),_:1}),t.isConnected?(h(),g("div",zt,[p("input",{value:t.internalSearchInput,type:"text",class:"bg-transparent p-2 border border-transparent focus:outline-none focus-visible:outline-none focus-visible:rounded-md focus-visible:border-gray-300 focus-visible:border-opacity-50 w-full h-full",placeholder:`${t.t("search")} ...`,autofocus:"",onInput:e[0]||(e[0]=c=>t.internalSearchInput=c.currentTarget.value),onKeydown:e[1]||(e[1]=pt(c=>t.$router.back(),["escape"])),onClick:e[2]||(e[2]=c=>t.$router.push({name:"search"}))},null,40,Ct)])):(h(),g("div",Lt,[p("span",null,k(t.t("no_connection")),1),w(i,{class:"text-red-600"})]))])}var Tt=W(It,[["render",Rt]]);const Ot={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Nt=p("path",{d:"M18 8H8c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h10c1.11 0 2-.89 2-2v-6a2 2 0 0 0-2-2m-4 8H8v-2h6v2m4-4H8v-2h10v2m4-6H4v16H2V2h2v2h18v2z",fill:"currentColor"},null,-1),Pt=[Nt];function Bt(t,e){return h(),g("svg",Ot,Pt)}var pe={name:"mdi-sign-real-estate",render:Bt};const fe="kiel-live-favorites-v1",Pe="favoriteStops",Be=localStorage.getItem(Pe);if(Be!==null){const t=JSON.parse(Be);localStorage.setItem(fe,JSON.stringify(t.map(e=>({id:`kvg-${e.id}`,name:e.name,type:"bus-stop"})))),localStorage.removeItem(Pe)}const je=re(JSON.parse(localStorage.getItem(fe)||"[]")),J=C({get(){return je.value},set(t){je.value=t,localStorage.setItem(fe,JSON.stringify(t))}});function jt({id:t,name:e,type:s}){J.value=[...J.value,{id:t,name:e,type:s}]}function Ft(t){J.value=J.value.filter(e=>e.id!==t.id)}function Ht(t){return J.value.some(e=>e.id===t.id)}function Fe(){return{favorites:J,addFavorite:jt,removeFavorite:Ft,isFavorite:Ht}}const Vt={class:"flex flex-col min-h-0 flex-grow"},Yt={class:"flex pb-2 mb-2 border-b-1 dark:border-dark-100 space-x-2 items-center"},Dt={class:"text-lg"},Kt={key:0,class:"m-auto max-w-52 text-center text-xl"},qt={class:"flex flex-col overflow-y-auto"},Ut={class:""},Jt=T({name:"FavoritesPopup",setup(t){const{t:e}=U(),{favorites:s}=Fe();return(n,r)=>{const o=Ie,a=pe,i=Q("router-link");return h(),g("div",Vt,[p("div",Yt,[w(o),p("span",Dt,k(m(e)("favorites")),1)]),m(s).length===0?(h(),g("div",Kt,[p("p",null,k(m(e)("add_favourites")),1)])):x("",!0),p("div",qt,[(h(!0),g(Y,null,X(m(s),c=>(h(),$(i,{key:c.id,to:{name:"map-marker",params:{markerType:c.type,markerId:c.id}},class:"flex py-2 not-last:border-b-1 dark:border-dark-300"},{default:I(()=>[c.type==="bus-stop"?(h(),$(a,{key:0,class:"mr-2"})):x("",!0),p("div",Ut,k(c.name),1)]),_:2},1032,["to"]))),128))])])}}}),Gt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},Wt=p("path",{d:"M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184c-101.689 0-184-82.295-184-184c0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z",fill:"currentColor"},null,-1),Qt=[Wt];function Xt(t,e){return h(),g("svg",Gt,Qt)}var He={name:"fa-solid-circle-notch",render:Xt};const Zt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 416 512"},es=p("path",{d:"M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48s21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52l-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37l-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17l-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09c3.19 1 6.41 1.48 9.58 1.48c13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14l31.31-78.28l20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z",fill:"currentColor"},null,-1),ts=[es];function ss(t,e){return h(),g("svg",Zt,ts)}var ns={name:"fa-solid-running",render:ss};const rs={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 448 512"},os=p("path",{d:"M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007C209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823c-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z",fill:"currentColor"},null,-1),is=[os];function as(t,e){return h(),g("svg",rs,is)}var cs={name:"fa-solid-hand-paper",render:as};const ls={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},us=p("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm92.49 313l-20 25a16 16 0 0 1-22.49 2.5l-67-49.72a40 40 0 0 1-15-31.23V112a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v144l58 42.5a16 16 0 0 1 2.49 22.5z",fill:"currentColor"},null,-1),ds=[us];function hs(t,e){return h(),g("svg",ls,ds)}var ps={name:"fa-solid-clock",render:hs};const fs={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1536 1792"},_s=p("path",{d:"M384 1216q0-53-37.5-90.5T256 1088t-90.5 37.5T128 1216t37.5 90.5T256 1344t90.5-37.5T384 1216zm1024 0q0-53-37.5-90.5T1280 1088t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5zm-46-396l-72-384q-5-23-22.5-37.5T1227 384H309q-23 0-40.5 14.5T246 436l-72 384q-5 30 14 53t49 23h1062q30 0 49-23t14-53zm-226-612q0-20-14-34t-34-14H448q-20 0-34 14t-14 34t14 34t34 14h640q20 0 34-14t14-34zm400 725v603h-128v128q0 53-37.5 90.5T1280 1792t-90.5-37.5t-37.5-90.5v-128H384v128q0 53-37.5 90.5T256 1792t-90.5-37.5T128 1664v-128H0V933q0-112 25-223l103-454q9-78 97.5-137t230-89T768 0t312.5 30t230 89t97.5 137l105 454q23 102 23 223z",fill:"currentColor"},null,-1),ms=[_s];function gs(t,e){return h(),g("svg",fs,ms)}var Ve={name:"fa-bus",render:gs};const vs={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ys=p("path",{d:"M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21z",fill:"currentColor"},null,-1),ks=[ys];function $s(t,e){return h(),g("svg",vs,ks)}var bs={name:"mdi-alert",render:$s};const xs={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256"},ws=p("path",{d:"M187.264 235.988a20.215 20.215 0 0 1-10.84-3.165L128 202.143l-44.86 28.421a21.78 21.78 0 0 1-24.569-.772a22.35 22.35 0 0 1-8.527-23.74l13.015-51.2l-43.614-36.3a20.639 20.639 0 0 1-6.409-22.372a20.34 20.34 0 0 1 18.068-14.13l56.749-3.683l21.217-53.428a20.317 20.317 0 0 1 37.86 0l21.217 53.428l56.749 3.683a20.34 20.34 0 0 1 18.068 14.13a20.638 20.638 0 0 1-6.41 22.372l-43.613 36.3l14.074 55.362a20.615 20.615 0 0 1-7.871 21.895a20.2 20.2 0 0 1-11.88 3.879zm2.005-23.438zM128 177.469a20.237 20.237 0 0 1 10.833 3.127l42.78 27.103l-12.43-48.894a20.834 20.834 0 0 1 6.792-21.056l38.812-32.305l-50.51-3.278a20.517 20.517 0 0 1-17.624-12.898L128 42.297L109.346 89.27a20.515 20.515 0 0 1-17.622 12.896l-50.511 3.278l38.813 32.305a20.833 20.833 0 0 1 6.791 21.055L74.39 207.698l42.778-27.102A20.235 20.235 0 0 1 128 177.469zm-2.01 23.4l.002.003l-.003-.003z",fill:"currentColor"},null,-1),Ms=[ws];function Ss(t,e){return h(),g("svg",xs,Ms)}var Is={name:"ph-star-bold",render:Ss};const Es={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1216 1312"},As=p("path",{d:"M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68z",fill:"currentColor"},null,-1),zs=[As];function Cs(t,e){return h(),g("svg",Es,zs)}var Ls={name:"fa-close",render:Cs};const Rs={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},Ts=p("path",{d:"M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248s248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z",fill:"currentColor"},null,-1),Os=[Ts];function Ns(t,e){return h(),g("svg",Rs,Os)}var Ps={name:"fa-solid-ban",render:Ns};const Bs={class:"flex flex-col items-center flex-grow"},js={class:"flex flex-col items-center my-2 text-lg"},ae=T({name:"NoData",setup(t){const{t:e}=U();return(s,n)=>{const r=Ps,o=Ls;return h(),g("div",Bs,[w(r,{class:"text-3xl mt-auto"}),p("div",js,[Le(s.$slots,"default")]),w(Ee,{class:"mt-auto mb-4",to:{name:"home"},replace:""},{default:I(()=>[w(o,{class:"mr-2"}),p("span",null,k(m(e)("close")),1)]),_:1})])}}}),Fs={key:0,class:"flex flex-col min-h-0 flex-grow"},Hs={class:"flex flex-row pb-2 mb-2 border-b-1 dark:border-dark-100 items-center"},Vs={class:"text-lg ml-2"},Ys={class:"flex ml-auto items-center cursor-pointer select-none"},Ds={class:"flex flex-col flex-grow overflow-y-auto"},Ks={key:0,class:"bg-red-600 bg-opacity-50 p-2 mb-2 rounded-md"},qs={class:"flex items-center border-b-1 mb-4"},Us={class:"font-bold"},Js={class:"mr-2"},Gs={class:"flex-grow"},Ws={class:"ml-2"},Ye=T({name:"BusStopPopup",props:{marker:null},setup(t){const e=t,{addFavorite:s,removeFavorite:n,isFavorite:r}=Fe(),{t:o}=U(),a=V(e,"marker"),i=C(()=>te.value[e.marker.id]);let c=null;const l=d=>{const u=Math.round(d.eta/60);return d.state==="stopping"?o("stopping"):u<1?o("immediately"):o("minutes",{minutes:u})};return Oe(a,async()=>{c!==null&&await ne(c),c=`data.map.stop.${e.marker.id}`,await se(c,te)},{immediate:!0}),Ne(async()=>{c!==null&&await ne(c)}),(d,u)=>{const f=pe,v=Ie,y=Is,M=bs,L=Ve,A=ps,P=cs,R=ns,K=Q("router-link"),le=He;return m(i)?(h(),g("div",Fs,[p("div",Hs,[m(i).type==="bus-stop"?(h(),$(f,{key:0})):x("",!0),p("span",Vs,k(m(i).name),1),p("div",Ys,[m(r)(m(i))?(h(),$(v,{key:0,class:"text-yellow-300",onClick:u[0]||(u[0]=b=>m(n)(m(i)))})):(h(),$(y,{key:1,onClick:u[1]||(u[1]=b=>m(s)(m(i)))}))])]),p("div",Ds,[m(i).alerts&&m(i).alerts.length>=1?(h(),g("div",Ks,[p("div",qs,[w(M,{class:"mr-2"}),p("span",Us,k(m(o)("alerts")),1)]),(h(!0),g(Y,null,X(m(i).alerts,(b,S)=>(h(),g("div",{key:S,class:"flex items-center"},k(b),1))),128))])):x("",!0),m(i).arrivals?(h(),g(Y,{key:1},[m(i).arrivals.length>0?(h(!0),g(Y,{key:0},X(m(i).arrivals,b=>(h(),$(K,{key:b.tripId,class:"flex py-2 w-full not-last:border-b-1 dark:border-dark-300",to:{name:"map-marker",params:{markerType:"bus",markerId:b.vehicleId}}},{default:I(()=>[w(L,{class:"mr-2"}),p("span",Js,k(b.routeName),1),p("span",Gs,k(b.direction),1),p("span",null,k(l(b)),1),p("div",Ws,[b.state==="planned"?(h(),$(A,{key:0})):x("",!0),b.state==="stopping"?(h(),$(P,{key:1})):x("",!0),b.state==="predicted"?(h(),$(R,{key:2})):x("",!0)])]),_:2},1032,["to"]))),128)):(h(),$(ae,{key:1},{default:I(()=>[ie(k(m(o)("no_bus_wants_to_stop_here_right_now")),1)]),_:1}))],64)):(h(),$(le,{key:2,class:"m-auto text-3xl animate-spin"}))])])):(h(),$(ae,{key:1},{default:I(()=>[ie(k(m(o)("this_stop_probably_does_not_exist"))+" ",1),m(r)(m(a))?(h(),$(Ee,{key:0,class:"mt-2",onClick:u[2]||(u[2]=()=>{m(n)(m(a)),d.$router.replace({name:"home"})})},{default:I(()=>[w(v,{class:"mr-2 text-yellow-300"}),p("span",null,k(m(o)("remove_favorite")),1)]),_:1})):x("",!0)]),_:1}))}}});const Qs=T({name:"BusPopup",components:{NoData:ae},props:{marker:{type:Object,required:!0}},setup(t){const{t:e}=U(),s=V(t,"marker");let n=null;const r=C(()=>Ae.value[s.value.id]),o=C(()=>!de.value||!r.value?null:de.value[r.value.tripId]);return Oe(r,async()=>{n!==null&&await ne(n),!!r.value&&(n=`data.map.trip.${r.value.tripId}`,await se(n,de))},{immediate:!0}),Ne(async()=>{n!==null&&await ne(n)}),{t:e,trip:o,vehicle:r}}}),Xs=t=>(ft("data-v-6678f48e"),t=t(),_t(),t),Zs={key:0,class:"flex flex-col min-h-0 flex-grow"},en={class:"flex pb-2 mb-2 border-b-1 dark:border-dark-100 space-x-2 items-center"},tn={class:"text-lg"},sn={key:0,class:"overflow-y-auto"},nn={class:"w-14 min-w-12"},rn=Xs(()=>p("div",{class:"pulsating border-3 border-red-700 border-solid rounded-full"},null,-1)),on=[rn],an={key:1,class:"rounded-full h-4 w-4 flex items-center justify-center bg-gray-800 dark:bg-gray-300"},cn={class:"w-full"};function ln(t,e,s,n,r,o){var d;const a=Ve,i=Q("router-link"),c=ae,l=He;return t.vehicle?(h(),g("div",Zs,[p("div",en,[t.vehicle.type==="bus"?(h(),$(a,{key:0})):x("",!0),p("span",tn,k(t.vehicle.name),1)]),t.trip?(h(),g(Y,{key:0},[((d=t.trip.arrivals)==null?void 0:d.length)?(h(),g("div",sn,[(h(!0),g(Y,null,X(t.trip.arrivals,(u,f)=>(h(),$(i,{key:u.id,to:{name:"map-marker",params:{markerType:"bus-stop",markerId:u.id}},class:oe(["flex w-full items-center",{"text-gray-500":u.state==="departed","mt-6":f===0&&u.state==="predicted"}])},{default:I(()=>{var v;return[p("span",nn,k(u.planned),1),p("div",{class:oe(["marker relative flex justify-center items-center mx-4 h-12 w-8 min-w-4 after:absolute after:top-0 after:h-full after:bg-gray-800 after:dark:bg-gray-300",{"after:bg-gray-500 after:dark:bg-gray-500":u.state==="departed"}])},[u.state!=="departed"&&(t.trip.arrivals[f-1]===void 0||t.trip.arrivals[f-1].state==="departed")?(h(),g("div",{key:0,class:oe(["vehicle before:h-4 before:w-4 before:bg-red-700 before:rounded-full",{driving:u.state==="predicted"}])},on,2)):x("",!0),u.state!=="departed"&&((v=t.trip.arrivals[f-1])==null?void 0:v.state)!=="departed"||u.state==="predicted"?(h(),g("div",an)):x("",!0)],2),p("span",cn,k(u.name),1)]}),_:2},1032,["to","class"]))),128))])):(h(),$(c,{key:1},{default:I(()=>[ie(k(t.t("trip_expired")),1)]),_:1}))],64)):(h(),$(l,{key:1,class:"mx-auto mt-4 text-3xl animate-spin"}))])):(h(),$(c,{key:1},{default:I(()=>[ie(k(t.t("trip_does_not_exist")),1)]),_:1}))}var De=W(Qs,[["render",ln],["__scopeId","data-v-6678f48e"]]);const un=T({name:"MarkerPopup",components:{BusPopup:De,BusStopPopup:Ye},props:{marker:{type:Object,required:!0}}}),dn={key:2};function hn(t,e,s,n,r,o){const a=De,i=Ye;return t.marker.type==="bus"?(h(),$(a,{key:0,marker:t.marker},null,8,["marker"])):t.marker.type==="bus-stop"?(h(),$(i,{key:1,marker:t.marker},null,8,["marker"])):(h(),g("pre",dn,k(t.marker),1))}var pn=W(un,[["render",hn]]);function O(t){return Array.isArray?Array.isArray(t):Ue(t)==="[object Array]"}const fn=1/0;function _n(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-fn?"-0":e}function mn(t){return t==null?"":_n(t)}function N(t){return typeof t=="string"}function Ke(t){return typeof t=="number"}function gn(t){return t===!0||t===!1||vn(t)&&Ue(t)=="[object Boolean]"}function qe(t){return typeof t=="object"}function vn(t){return qe(t)&&t!==null}function E(t){return t!=null}function _e(t){return!t.trim().length}function Ue(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const yn="Incorrect 'index' type",kn=t=>`Invalid value for key ${t}`,$n=t=>`Pattern length exceeds max of ${t}.`,bn=t=>`Missing ${t} property in key`,xn=t=>`Property 'weight' in key '${t}' must be a positive integer`,Je=Object.prototype.hasOwnProperty;class wn{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=Ge(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ge(t){let e=null,s=null,n=null,r=1;if(N(t)||O(t))n=t,e=We(t),s=me(t);else{if(!Je.call(t,"name"))throw new Error(bn("name"));const o=t.name;if(n=o,Je.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(xn(o));e=We(o),s=me(o)}return{path:e,id:s,weight:r,src:n}}function We(t){return O(t)?t:t.split(".")}function me(t){return O(t)?t.join("."):t}function Mn(t,e){let s=[],n=!1;const r=(o,a,i)=>{if(!!E(o))if(!a[i])s.push(o);else{let c=a[i];const l=o[c];if(!E(l))return;if(i===a.length-1&&(N(l)||Ke(l)||gn(l)))s.push(mn(l));else if(O(l)){n=!0;for(let d=0,u=l.length;d<u;d+=1)r(l[d],a,i+1)}else a.length&&r(l,a,i+1)}};return r(t,N(e)?e.split("."):e,0),n?s:s[0]}const Sn={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},In={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},En={location:0,threshold:.6,distance:100},An={useExtendedSearch:!1,getFn:Mn,ignoreLocation:!1,ignoreFieldNorm:!1};var _=H(H(H(H({},In),Sn),En),An);const zn=/[^ ]+/g;function Cn(t=3){const e=new Map,s=Math.pow(10,t);return{get(n){const r=n.match(zn).length;if(e.has(r))return e.get(r);const o=1/Math.sqrt(r),a=parseFloat(Math.round(o*s)/s);return e.set(r,a),a},clear(){e.clear()}}}class ge{constructor({getFn:e=_.getFn}={}){this.norm=Cn(3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,N(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();N(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!E(e)||_e(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,o)=>{let a=this.getFn(e,r.path);if(!!E(a)){if(O(a)){let i=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:l,value:d}=c.pop();if(!!E(d))if(N(d)&&!_e(d)){let u={v:d,i:l,n:this.norm.get(d)};i.push(u)}else O(d)&&d.forEach((u,f)=>{c.push({nestedArrIndex:f,value:u})})}n.$[o]=i}else if(!_e(a)){let i={v:a,n:this.norm.get(a)};n.$[o]=i}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function Qe(t,e,{getFn:s=_.getFn}={}){const n=new ge({getFn:s});return n.setKeys(t.map(Ge)),n.setSources(e),n.create(),n}function Ln(t,{getFn:e=_.getFn}={}){const{keys:s,records:n}=t,r=new ge({getFn:e});return r.setKeys(s),r.setIndexRecords(n),r}function ce(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=_.distance,ignoreLocation:o=_.ignoreLocation}={}){const a=e/t.length;if(o)return a;const i=Math.abs(n-s);return r?a+i/r:i?1:a}function Rn(t=[],e=_.minMatchCharLength){let s=[],n=-1,r=-1,o=0;for(let a=t.length;o<a;o+=1){let i=t[o];i&&n===-1?n=o:!i&&n!==-1&&(r=o-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[o-1]&&o-n>=e&&s.push([n,o-1]),s}const D=32;function Tn(t,e,s,{location:n=_.location,distance:r=_.distance,threshold:o=_.threshold,findAllMatches:a=_.findAllMatches,minMatchCharLength:i=_.minMatchCharLength,includeMatches:c=_.includeMatches,ignoreLocation:l=_.ignoreLocation}={}){if(e.length>D)throw new Error($n(D));const d=e.length,u=t.length,f=Math.max(0,Math.min(n,u));let v=o,y=f;const M=i>1||c,L=M?Array(u):[];let A;for(;(A=t.indexOf(e,y))>-1;){let S=ce(e,{currentLocation:A,expectedLocation:f,distance:r,ignoreLocation:l});if(v=Math.min(S,v),y=A+d,M){let B=0;for(;B<d;)L[A+B]=1,B+=1}}y=-1;let P=[],R=1,K=d+u;const le=1<<d-1;for(let S=0;S<d;S+=1){let B=0,j=K;for(;B<j;)ce(e,{errors:S,currentLocation:f+j,expectedLocation:f,distance:r,ignoreLocation:l})<=v?B=j:K=j,j=Math.floor((K-B)/2+B);K=j;let xe=Math.max(1,f-j+1),ue=a?u:Math.min(f+j,u)+d,q=Array(ue+2);q[ue+1]=(1<<S)-1;for(let z=ue;z>=xe;z-=1){let ee=z-1,we=s[t.charAt(ee)];if(M&&(L[ee]=+!!we),q[z]=(q[z+1]<<1|1)&we,S&&(q[z]|=(P[z+1]|P[z])<<1|1|P[z+1]),q[z]&le&&(R=ce(e,{errors:S,currentLocation:ee,expectedLocation:f,distance:r,ignoreLocation:l}),R<=v)){if(v=R,y=ee,y<=f)break;xe=Math.max(1,2*f-y)}}if(ce(e,{errors:S+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:l})>v)break;P=q}const b={isMatch:y>=0,score:Math.max(.001,R)};if(M){const S=Rn(L,i);S.length?c&&(b.indices=S):b.isMatch=!1}return b}function On(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class Xe{constructor(e,{location:s=_.location,threshold:n=_.threshold,distance:r=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:i=_.minMatchCharLength,isCaseSensitive:c=_.isCaseSensitive,ignoreLocation:l=_.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:o,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:l},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,v)=>{this.chunks.push({pattern:f,alphabet:On(f),startIndex:v})},u=this.pattern.length;if(u>D){let f=0;const v=u%D,y=u-v;for(;f<y;)d(this.pattern.substr(f,D),f),f+=D;if(v){const M=u-D;d(this.pattern.substr(M),M)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let y={isMatch:!0,score:0};return n&&(y.indices=[[0,e.length-1]]),y}const{location:r,distance:o,threshold:a,findAllMatches:i,minMatchCharLength:c,ignoreLocation:l}=this.options;let d=[],u=0,f=!1;this.chunks.forEach(({pattern:y,alphabet:M,startIndex:L})=>{const{isMatch:A,score:P,indices:R}=Tn(e,y,M,{location:r+L,distance:o,threshold:a,findAllMatches:i,minMatchCharLength:c,includeMatches:n,ignoreLocation:l});A&&(f=!0),u+=P,A&&R&&(d=[...d,...R])});let v={isMatch:f,score:f?u/this.chunks.length:1};return f&&n&&(v.indices=d),v}}class F{constructor(e){this.pattern=e}static isMultiMatch(e){return Ze(e,this.multiRegex)}static isSingleMatch(e){return Ze(e,this.singleRegex)}search(){}}function Ze(t,e){const s=t.match(e);return s?s[1]:null}class Nn extends F{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Pn extends F{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Bn extends F{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class jn extends F{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Fn extends F{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Hn extends F{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class et extends F{constructor(e,{location:s=_.location,threshold:n=_.threshold,distance:r=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:i=_.minMatchCharLength,isCaseSensitive:c=_.isCaseSensitive,ignoreLocation:l=_.ignoreLocation}={}){super(e);this._bitapSearch=new Xe(e,{location:s,threshold:n,distance:r,includeMatches:o,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class tt extends F{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],o=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+o,r.push([n,s-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}}const ve=[Nn,tt,Bn,jn,Hn,Fn,Pn,et],st=ve.length,Vn=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,Yn="|";function Dn(t,e={}){return t.split(Yn).map(s=>{let n=s.trim().split(Vn).filter(o=>o&&!!o.trim()),r=[];for(let o=0,a=n.length;o<a;o+=1){const i=n[o];let c=!1,l=-1;for(;!c&&++l<st;){const d=ve[l];let u=d.isMultiMatch(i);u&&(r.push(new d(u,e)),c=!0)}if(!c)for(l=-1;++l<st;){const d=ve[l];let u=d.isSingleMatch(i);if(u){r.push(new d(u,e));break}}}return r})}const Kn=new Set([et.type,tt.type]);class qn{constructor(e,{isCaseSensitive:s=_.isCaseSensitive,includeMatches:n=_.includeMatches,minMatchCharLength:r=_.minMatchCharLength,ignoreLocation:o=_.ignoreLocation,findAllMatches:a=_.findAllMatches,location:i=_.location,threshold:c=_.threshold,distance:l=_.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:a,ignoreLocation:o,location:i,threshold:c,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=Dn(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let o=0,a=[],i=0;for(let c=0,l=s.length;c<l;c+=1){const d=s[c];a.length=0,o=0;for(let u=0,f=d.length;u<f;u+=1){const v=d[u],{isMatch:y,indices:M,score:L}=v.search(e);if(y){if(o+=1,i+=L,n){const A=v.constructor.type;Kn.has(A)?a=[...a,...M]:a.push(M)}}else{i=0,o=0,a.length=0;break}}if(o){let u={isMatch:!0,score:i/o};return n&&(u.indices=a),u}}return{isMatch:!1,score:1}}}const ye=[];function Un(...t){ye.push(...t)}function ke(t,e){for(let s=0,n=ye.length;s<n;s+=1){let r=ye[s];if(r.condition(t,e))return new r(t,e)}return new Xe(t,e)}const Z={AND:"$and",OR:"$or"},$e={PATH:"$path",PATTERN:"$val"},be=t=>!!(t[Z.AND]||t[Z.OR]),Jn=t=>!!t[$e.PATH],Gn=t=>!O(t)&&qe(t)&&!be(t),nt=t=>({[Z.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function rt(t,e,{auto:s=!0}={}){const n=r=>{let o=Object.keys(r);const a=Jn(r);if(!a&&o.length>1&&!be(r))return n(nt(r));if(Gn(r)){const c=a?r[$e.PATH]:o[0],l=a?r[$e.PATTERN]:r[c];if(!N(l))throw new Error(kn(c));const d={keyId:me(c),pattern:l};return s&&(d.searcher=ke(l,e)),d}let i={children:[],operator:o[0]};return o.forEach(c=>{const l=r[c];O(l)&&l.forEach(d=>{i.children.push(n(d))})}),i};return be(t)||(t=nt(t)),n(t)}function Wn(t,{ignoreFieldNorm:e=_.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:o,score:a})=>{const i=r?r.weight:null;n*=Math.pow(a===0&&i?Number.EPSILON:a,(i||1)*(e?1:o))}),s.score=n})}function Qn(t,e){const s=t.matches;e.matches=[],!!E(s)&&s.forEach(n=>{if(!E(n.indices)||!n.indices.length)return;const{indices:r,value:o}=n;let a={indices:r,value:o};n.key&&(a.key=n.key.src),n.idx>-1&&(a.refIndex=n.idx),e.matches.push(a)})}function Xn(t,e){e.score=t.score}function Zn(t,e,{includeMatches:s=_.includeMatches,includeScore:n=_.includeScore}={}){const r=[];return s&&r.push(Qn),n&&r.push(Xn),t.map(o=>{const{idx:a}=o,i={item:e[a],refIndex:a};return r.length&&r.forEach(c=>{c(o,i)}),i})}class G{constructor(e,s={},n){this.options=H(H({},_),s),this.options.useExtendedSearch,this._keyStore=new wn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof ge))throw new Error(yn);this._myIndex=s||Qe(this.options.keys,this._docs,{getFn:this.options.getFn})}add(e){!E(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const o=this._docs[n];e(o,n)&&(this.removeAt(n),n-=1,r-=1,s.push(o))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:o,sortFn:a,ignoreFieldNorm:i}=this.options;let c=N(e)?N(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Wn(c,{ignoreFieldNorm:i}),o&&c.sort(a),Ke(s)&&s>-1&&(c=c.slice(0,s)),Zn(c,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=ke(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:o,i:a,n:i})=>{if(!E(o))return;const{isMatch:c,score:l,indices:d}=s.searchIn(o);c&&r.push({item:o,idx:a,matches:[{score:l,value:o,norm:i,indices:d}]})}),r}_searchLogical(e){const s=rt(e,this.options),n=(i,c,l)=>{if(!i.children){const{keyId:d,searcher:u}=i,f=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:u});return f&&f.length?[{idx:l,item:c,matches:f}]:[]}switch(i.operator){case Z.AND:{const d=[];for(let u=0,f=i.children.length;u<f;u+=1){const v=i.children[u],y=n(v,c,l);if(y.length)d.push(...y);else return[]}return d}case Z.OR:{const d=[];for(let u=0,f=i.children.length;u<f;u+=1){const v=i.children[u],y=n(v,c,l);if(y.length){d.push(...y);break}}return d}}},r=this._myIndex.records,o={},a=[];return r.forEach(({$:i,i:c})=>{if(E(i)){let l=n(s,i,c);l.length&&(o[c]||(o[c]={idx:c,item:i,matches:[]},a.push(o[c])),l.forEach(({matches:d})=>{o[c].matches.push(...d)}))}}),a}_searchObjectList(e){const s=ke(e,this.options),{keys:n,records:r}=this._myIndex,o=[];return r.forEach(({$:a,i})=>{if(!E(a))return;let c=[];n.forEach((l,d)=>{c.push(...this._findMatches({key:l,value:a[d],searcher:s}))}),c.length&&o.push({idx:i,item:a,matches:c})}),o}_findMatches({key:e,value:s,searcher:n}){if(!E(s))return[];let r=[];if(O(s))s.forEach(({v:o,i:a,n:i})=>{if(!E(o))return;const{isMatch:c,score:l,indices:d}=n.searchIn(o);c&&r.push({score:l,key:e,value:o,idx:a,norm:i,indices:d})});else{const{v:o,n:a}=s,{isMatch:i,score:c,indices:l}=n.searchIn(o);i&&r.push({score:c,key:e,value:o,norm:a,indices:l})}return r}}G.version="6.4.6";G.createIndex=Qe;G.parseIndex=Ln;G.config=_;G.parseQuery=rt;Un(qn);const er=T({name:"SearchPopup",props:{searchInput:{type:String,default:""}},emits:{"update:search-input":t=>!0},setup(t){const{t:e}=U(),s=V(t,"searchInput"),n=C(()=>[...Object.values(te.value)]),r=C(()=>new G(n.value,{includeScore:!0,keys:["name"],threshold:.4})),o=C(()=>s.value===""||s.value.length<3?[]:r.value.search(s.value).slice(0,20));return mt(async()=>{await se("data.map.vehicle.>",Ae),await se("data.map.stop.>",te)}),{t:e,searchResults:o}}}),tr={class:"flex flex-col min-h-0 flex-grow"},sr={class:"flex pb-2 mb-2 border-b-1 dark:border-dark-100 space-x-2 items-center"},nr={class:"text-lg"},rr={key:0,class:"m-auto max-w-52 text-center text-xl"},or={key:1,class:"m-auto max-w-52 text-center text-xl"},ir={class:"flex flex-col overflow-y-auto"},ar={class:""};function cr(t,e,s,n,r,o){const a=lt,i=pe,c=Q("router-link");return h(),g("div",tr,[p("div",sr,[w(a),p("span",nr,k(t.t("search_result")),1)]),t.searchResults.length===0&&t.searchInput.length<3?(h(),g("div",rr,[p("p",null,k(t.t("search_stop_vehicle")),1)])):t.searchResults.length===0&&t.searchInput.length>=3?(h(),g("div",or,[p("p",null,k(t.t("no_entry")),1)])):x("",!0),p("div",ir,[(h(!0),g(Y,null,X(t.searchResults,l=>(h(),$(c,{key:l.refIndex,to:{name:"map-marker",params:{markerType:l.item.type,markerId:l.item.id}},class:"flex py-2 not-last:border-b-1 dark:border-dark-300 max-w-full",onClick:e[0]||(e[0]=d=>t.$emit("update:search-input",""))},{default:I(()=>[l.item.type==="bus-stop"?(h(),$(i,{key:0,class:"mr-2"})):x("",!0),p("div",ar,k(l.item.name),1)]),_:2},1032,["to"]))),128))])])}var lr=W(er,[["render",cr]]);const ur={class:"relative h-full w-full items-center justify-center overflow-hidden"},mr=T({name:"Home",setup(t){const e=gt(()=>ut(()=>import("./Map.53a9d372.js"),["assets/Map.53a9d372.js","assets/Map.edbeb514.css","assets/index.1e898100.js","assets/index.7f4859f5.css","assets/vendor.3aab7ad4.js"])),{liteMode:s}=dt(),n=Re(),r=Te(),o=C({get(){if(n.name==="map-marker")return{type:n.params.markerType,id:n.params.markerId}},async set(i){if(!i){await r.replace({name:"home"});return}await r.replace({name:"map-marker",params:{markerType:i.type,markerId:i.id}})}}),a=re("");return(i,c)=>(h(),g("div",ur,[w(Tt,{"search-input":a.value,"onUpdate:search-input":c[0]||(c[0]=l=>a.value=l)},null,8,["search-input"]),w(he,{"is-open":!!m(o),"disable-resize":m(s),size:m(s)?"1":"3/4",onClose:c[1]||(c[1]=l=>o.value=void 0)},{default:I(()=>[m(o)?(h(),$(pn,{key:0,marker:m(o)},null,8,["marker"])):x("",!0)]),_:1},8,["is-open","disable-resize","size"]),w(he,{"is-open":i.$route.name==="search","disable-resize":m(s),size:m(s)?"1":"1/2",onClose:c[3]||(c[3]=l=>i.$router.replace({name:"home"}))},{default:I(()=>[w(lr,{"search-input":a.value,"onUpdate:search-input":c[2]||(c[2]=l=>a.value=l)},null,8,["search-input"])]),_:1},8,["is-open","disable-resize","size"]),w(he,{"is-open":i.$route.name==="favorites","disable-resize":m(s),size:m(s)?"1":"1/2",onClose:c[4]||(c[4]=l=>i.$router.replace({name:"home"}))},{default:I(()=>[w(Jt)]),_:1},8,["is-open","disable-resize","size"]),m(s)?x("",!0):(h(),$(m(e),{key:0,"selected-marker":m(o),onMarkerClick:c[5]||(c[5]=l=>o.value=l)},null,8,["selected-marker"]))]))}});export{mr as default};
//# sourceMappingURL=Home.8cde9112.js.map