import{V as l,W as i,u as o,c}from"./index-KiWmxDDy.js";const a=l(`${i}.feature_flags`,[]);function _(){const{t:n}=o(),u=[{id:"new_api",name:n("feature_flag_new_api")},{id:"vehicle_stop_actions",name:n("feature_flag_actions"),description:n("feature_flag_actions_description")}].map(e=>({...e,enabled:c({get:()=>a.value.includes(e.name),set:t=>{t?a.value=[...a.value,e.name]:a.value=a.value.filter(r=>r!==e.name)}})}));function s(e){const t=u.find(r=>r.id===e);if(!t)throw new Error(`Unknown feature flag: ${e}`);return t.enabled}return{featureFlags:u,checkFeatureFlag:s}}export{_ as u};
//# sourceMappingURL=useFeatureFlags-A7w9DXu8.js.map
