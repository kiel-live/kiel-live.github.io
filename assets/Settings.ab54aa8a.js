import{d as i,t as u,o as c,a as m,l as t,u as p,I as _,k as f,b as o,p as a,j as x,V as h,R as V}from"./index.b1afd707.js";import{S as k}from"./SettingsContainer.77f07581.js";const g=["checked"],b=i({__name:"Checkbox",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(n){const e=u(n,"modelValue");return(d,s)=>(c(),m("input",{type:"checkbox",class:"w-5 h-5 flex-shrink-0 rounded",checked:t(e),onChange:s[0]||(s[0]=r=>d.$emit("update:modelValue",!t(e)))},null,40,g))}}),B={class:"mb-2 text-xl font-bold"},C={class:"flex gap-4 items-center"},S={class:"flex flex-col",for:"lite-mode"},y={class:"text-sm dark:text-gray-400"},R=i({__name:"Settings",setup(n){const{liteMode:l}=V(),{t:e}=p();return(d,s)=>(c(),_(k,null,{default:f(()=>[o("h1",B,a(t(e)("settings")),1),o("div",C,[o("label",S,[o("span",null,a(t(e)("lite_mode")),1),o("span",y,a(t(e)("lite_mode_description")),1)]),x(b,{id:"lite-mode",modelValue:t(l),"onUpdate:modelValue":s[0]||(s[0]=r=>h(l)?l.value=r:null)},null,8,["modelValue"])])]),_:1}))}});export{R as default};
//# sourceMappingURL=Settings.ab54aa8a.js.map