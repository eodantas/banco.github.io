import{u as e,r as t,o as a,c as o,a as l,t as r,b as n,m as s,F as i,p as d,d as u,w as c,e as m,f as p,g,h as x,i as b,j as f,k as h,l as v,n as w,q as y,s as k,T as S,v as L,x as V,y as B,C as I,z as M}from"./vendor.ef65e1d2.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const o=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const n=new URL(e,o);if(self[t].moduleMap[n])return a(self[t].moduleMap[n]);const s=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){r(new Error(`Failed to import: ${e}`)),l(i)},onload(){a(self[t].moduleMap[n]),l(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");const C={name:"App",setup(){e().commit("alreadyAuth")}},O={class:"mx-auto"};C.render=function(e,r,n,s,i,d){const u=t("router-view");return a(),o("div",O,[l(u)])};const U={props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},error:{type:String,default:""}},emits:["update:modelValue"],setup:(e,{emit:t})=>({uuid:function(){let e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){const a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?a:3&a|8).toString(16)}))}(),updateValue:e=>{t("update:modelValue",e.target.value)}})};U.render=function(e,t,d,u,c,m){return a(),o(i,null,[d.label?(a(),o("label",{key:0,for:u.uuid,class:"block text-gray-700 text-sm font-bold mb-2 ml-3"},r(d.label),9,["for"])):n("",!0),l("input",s(e.$attrs,{value:d.modelValue,onInput:t[1]||(t[1]=(...e)=>u.updateValue&&u.updateValue(...e)),id:u.uuid,"aria-describedby":d.error?`${u.uuid}-error`:null,"aria-invalid":!!d.error||null,class:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600\n      transition duration-500 px-3 pb-3\n    "}),null,16,["value","id","aria-describedby","aria-invalid"]),d.error?(a(),o("p",{key:1,class:"errorMessage",id:`${u.uuid}-error`,"aria-live":"assertive"},r(d.error),9,["id"])):n("",!0)],64)};const q={},j=c();d("data-v-1677a8ec");const H={class:"loader ease-linear rounded-full border-2 border-t-2 border-purple-900 h-5 w-5"};u();const _=j(((e,t)=>(a(),o("div",H))));q.render=_,q.__scopeId="data-v-1677a8ec";var D="./assets/cifrao_g.e7a60860.png";const E={name:"Login",components:{Loader:q},setup(){const t=e(),a=p();g();const o=m(!0),l=m({email:"",senha:""}),r=m(!1);return{hideLoader:o,form:l,falhaLogin:r,login:async()=>{o.value=!1,r.value=!1;const e=await t.dispatch("login",{form:l.value});o.value=!0,e?a.push({name:"Dashboard"}):r.value=!0}}}},$={class:"bg-purple-400 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0",style:{"background-color":"#9921e8","background-image":"linear-gradient(315deg, #9921e8 0%, #5f72be 74%)"}},N=l("header",{class:"fixed bg-black top-0 left-0 w-full p-2 flex items-center"},[l("img",{src:D,alt:"banco",class:"w-10 mr-2"}),l("h1",{class:"text-4xl bont-bold text-white text-center"},"Banco")],-1),z={class:"bg-white max-w-lg mx-auto p-8 md:p-12 mt-20 rounded-lg shadow-2xl"},A=l("h3",{class:"font-bold text-2xl"},"Bem Vindo ao Banco",-1),R=l("p",{class:"text-gray-600 pt-2"},"Faça o login.",-1),P={key:0,class:"text-red-700 text-center font-bold"},F={class:"mt-10"},T={class:"mb-6 pt-3 rounded bg-gray-200"},J={class:"mb-6 pt-3 rounded bg-gray-200"},K=l("div",{class:"flex justify-end"},[l("a",{href:"#",class:"text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"},"Esqueceu sua senha?")],-1),G={class:"bg-purple-600 text-white hover:bg-purple-700 font-bold py-2 rounded shadow-lg hover-shadow-xl transition duration-200\n              flex justify-center px-2\n            ",type:"submit"},Q=l("div",{class:"flex-1"},[l("span",null,"Login")],-1),W={class:"max-w-lg mx-auto text-center mt-10 mb-6"},X={class:"text-white"},Y=f(" Não tem uma conta? "),Z=f("Criar conta"),ee=f(". "),te=l("footer",{class:"max-w-lg mx-auto flex text-white justify-center"},[l("a",{href:"#",class:"hover:underline"},"Contato"),l("span",{class:"mx-3"},"-"),l("a",{href:"#",class:"hover:underline"},"Privacidade")],-1);E.render=function(e,r,s,i,d,u){const c=t("BaseInput"),m=t("Loader"),p=t("router-link");return a(),o("div",$,[N,l("main",z,[l("section",null,[A,R,i.falhaLogin?(a(),o("p",P,"LOGIN FALHOU")):n("",!0)]),l("section",F,[l("form",{onSubmit:r[3]||(r[3]=x(((...e)=>i.login&&i.login(...e)),["prevent"])),class:"flex flex-col",method:"get"},[l("div",T,[l(c,{type:"email",label:"E-Mail",required:"",autocomplete:"email",autofocus:"",modelValue:i.form.email,"onUpdate:modelValue":r[1]||(r[1]=e=>i.form.email=e)},null,8,["modelValue"])]),l("div",J,[l(c,{type:"password",label:"Senha",required:"",autocomplete:"current-password",modelValue:i.form.senha,"onUpdate:modelValue":r[2]||(r[2]=e=>i.form.senha=e)},null,8,["modelValue"])]),K,l("button",G,[Q,l("div",{class:[{hidden:i.hideLoader},"inline-block self-center"]},[l(m)],2)])],32)])]),l("div",W,[l("p",X,[Y,l(p,{to:{name:"Register"},class:"font-bold hover:underline"},{default:b((()=>[Z])),_:1}),ee])]),te])};const ae={name:"Register",setup:()=>({form:m({nome:"",email:"",senha:"",confirm:""})})},oe={class:"min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0",style:{"background-color":"#9921e8","background-image":"linear-gradient(315deg, #9921e8 0%, #5f72be 74%)"}},le=l("header",{class:"fixed bg-black top-0 left-0 w-full p-2 flex items-center"},[l("img",{src:D,alt:"banco",class:"w-10 mr-2"}),l("h1",{class:"text-4xl bont-bold text-white text-center"},"Banco")],-1),re={class:"bg-white max-w-lg mx-auto p-8 md:p-12 my-20 rounded-lg shadow-2xl"},ne=l("section",null,[l("h3",{class:"font-bold text-2xl"},"Bem vindo ao Banco"),l("p",{class:"text-gray-600 pt-2"},"Crie Sua Conta.")],-1),se={class:"mt-10"},ie={action:"",class:"flex flex-col",method:"post"},de={class:"mb-6 pt-3 rounded bg-gray-200"},ue={class:"mb-6 pt-3 rounded bg-gray-200"},ce={class:"mb-6 pt-3 rounded bg-gray-200"},me={class:"mb-6 pt-3 rounded bg-gray-200"},pe=l("button",{class:"bg-purple-600 text-white hover:bg-purple-700 font-bold py-2 rounded shadow-lg hover-shadow-xl transition duration-200",type:"submit"}," Criar ",-1);ae.render=function(e,r,n,s,i,d){const u=t("BaseInput");return a(),o("div",oe,[le,l("main",re,[ne,l("section",se,[l("form",ie,[l("div",de,[l(u,{type:"text",label:"Nome",required:"",autofocus:"",modelValue:s.form.nome,"onUpdate:modelValue":r[1]||(r[1]=e=>s.form.nome=e)},null,8,["modelValue"])]),l("div",ue,[l(u,{type:"email",label:"E-Mail",required:"",modelValue:s.form.email,"onUpdate:modelValue":r[2]||(r[2]=e=>s.form.email=e)},null,8,["modelValue"])]),l("div",ce,[l(u,{type:"password",label:"Senha",required:"",modelValue:s.form.senha,"onUpdate:modelValue":r[3]||(r[3]=e=>s.form.senha=e)},null,8,["modelValue"])]),l("div",me,[l(u,{type:"password",label:"Confirme a Senha",required:"",modelValue:s.form.confirm,"onUpdate:modelValue":r[4]||(r[4]=e=>s.form.confirm=e)},null,8,["modelValue"])]),pe])])])])};const ge={props:{title:{type:String,required:!0}},emits:["logout"],setup(e,{emit:t}){const a=m([[{icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />',text:"Logout",index:0,disabled:!1}]]),o=m(!1),l=m(null),r=m(-1);let n=-1;const s=h((()=>null!=l.value?l.value.getElementsByClassName("menu-item"):[])),i=h((()=>s.value.length));return{dropItems:a,isOpen:o,menuDrop:l,actualIndex:r,items:s,totalItems:i,logout:()=>t("logout"),open:()=>o.value=!0,close:()=>o.value=!1,toggleOpen:()=>o.value=!o.value,downPressed:()=>{if(o.value){-1!=n&&(r.value=n,n=-1),r.value++,r.value==i.value&&(r.value=0);for(let e=r.value;e<i.value&&"true"==s.value[e].getAttribute("disabled");e++)r.value++,r.value==i.value&&(r.value=0)}},upPressed:()=>{if(o.value){-1!=n&&(r.value=n,n=-1),r.value--,r.value<0&&(r.value=i.value-1);for(let e=r.value;e>=0&&"true"==s.value[e].getAttribute("disabled");e--)r.value--,r.value<0&&(r.value=i.value-1)}},mouseOver:e=>{n=e,r.value=-1}}}},xe=c();d("data-v-5333715a");const be={class:"relative"},fe=l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"},[l("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),he={key:0,ref:"menuDrop",class:"origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg\n          bg-purple-800 text-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100\n          focus:outline-none\n        "};u();const ve=xe(((e,t,s,d,u,c)=>{const m=v("click-outside");return a(),o("div",be,[w(l("button",{onClick:t[1]||(t[1]=(...e)=>d.toggleOpen&&d.toggleOpen(...e)),onKeyup:[t[2]||(t[2]=y(x(((...e)=>d.close&&d.close(...e)),["exact"]),["esc"])),t[3]||(t[3]=y(x(((...e)=>d.downPressed&&d.downPressed(...e)),["exact"]),["down"])),t[4]||(t[4]=y(x(((...e)=>d.upPressed&&d.upPressed(...e)),["exact"]),["up"]))],onKeydown:t[5]||(t[5]=y(x(((...e)=>d.close&&d.close(...e)),["shift","exact"]),["tab"])),class:"inline-flex justify-center w-full rounded-md border\n        border-gray-300 shadow-sm px-4 py-2 bg-purple-600 hover:bg-purple-900 text-sm font-medium\n        text-white focus:outline-none focus:ring-2\n        focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black\n      "},[f(r(s.title)+" ",1),fe],544),[[m,d.close]]),l(S,{name:"fade"},{default:xe((()=>[d.isOpen?(a(),o("div",he,[(a(!0),o(i,null,k(d.dropItems,((e,l)=>(a(),o("div",{key:l,class:"py-1"},[(a(!0),o(i,null,k(e,(e=>(a(),o("a",{key:e.text,href:"#",onMouseover:t=>d.mouseOver(e.index),onClick:t[6]||(t[6]=x(((...e)=>d.logout&&d.logout(...e)),["prevent"])),class:["group flex items-center px-4 py-2 text-sm menu-item",{"text-white":e.index==d.actualIndex,"bg-purple-900":e.index==d.actualIndex,"text-white":e.index!=d.actualIndex&&!e.disabled,"text-gray-300":e.disabled,"hover:font-extrabold":-1==d.actualIndex&&!e.disabled}],disabled:e.disabled},[(a(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",stroke:"currentColor",class:["mr-3 h-5 w-5",{"text-white":e.index==d.actualIndex,"text-white":e.index!=d.actualIndex&&!e.disabled,"text-gray-300":e.disabled,"group-hover:text-white":-1==d.actualIndex&&!e.disabled}],"aria-hidden":"true",innerHTML:e.icon},null,10,["innerHTML"])),f(" "+r(e.text),1)],42,["onMouseover","disabled"])))),128))])))),128))],512)):n("",!0)])),_:1})])}));ge.render=ve,ge.__scopeId="data-v-5333715a";const we={name:"HeaderBar",components:{DropDownButton:ge},props:{userName:{type:String,required:!0}},emits:["showSidebar","logout"]},ye={class:"h-16 bg-white shadow-sm pl-8 lg:pl-80 pr-8 fixed w-full top-0 left-0 flex items-center justify-between lg:justify-end z-10"},ke=l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1);we.render=function(e,r,n,s,i,d){const u=t("DropDownButton");return a(),o("div",ye,[l("div",{onClick:r[1]||(r[1]=t=>e.$emit("showSidebar")),class:"w-6 cursor-pointer lg:hidden"},[ke]),l(u,{title:n.userName,onLogout:r[2]||(r[2]=t=>e.$emit("logout"))},null,8,["title"])])};const Se={name:"SideBar",props:{escondeSidebar:{type:Boolean,default:!0}},emits:["hideSidebar"]},Le={class:"flex items-center border-b-2"},Ve=l("div",{class:"flex items-center bg-black w-full p-4"},[l("img",{src:D,alt:"banco",class:"w-10 mr-4"}),l("h1",{class:"text-4xl bont-bold text-white text-center"},"Banco")],-1),Be=l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-white",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1);Se.render=function(e,t,r,n,s,i){return a(),o("div",{class:["\n      fixed\n      left-0\n      top-0\n      w-72\n      min-h-screen\n      bg-purple-800\n      shadow-md\n      transform\n      lg:-translate-x-0\n      transition-transform\n      duration-300\n      z-20\n    ",{"-translate-x-full":r.escondeSidebar}]},[l("div",Le,[Ve,l("div",{onClick:t[1]||(t[1]=t=>e.$emit("hideSidebar")),class:"self-stretch cursor-pointer bg-black lg:hidden"},[Be])])],2)};const Ie={name:"Dashboard",components:{HeaderBar:we,SideBar:Se},setup(){const t=e(),a=p(),o=t.state.user.nome,l=m(!0);return{userName:o,escondeSidebar:l,showSidebar:()=>{l.value=!1},hideSidebar:()=>{l.value=!0},logout:()=>{t.dispatch("logout"),a.push({name:"Login"})}}}},Me=l("div",{class:"fixed min-w-full min-h-screen top-0 left-0 bg-gray-200 pl-8 lg:pl-80 pt-24"},[l("h1",{class:"text-3xl text-gray-700 font-fold"},"Dashboard")],-1);Ie.render=function(e,r,n,s,i,d){const u=t("HeaderBar"),c=t("SideBar");return a(),o("div",null,[l(u,{"user-name":s.userName,onShowSidebar:s.showSidebar,onLogout:s.logout},null,8,["user-name","onShowSidebar","onLogout"]),l(c,{escondeSidebar:s.escondeSidebar,onHideSidebar:s.hideSidebar},null,8,["escondeSidebar","onHideSidebar"]),Me])};const Ce=[{path:"/",name:"Login",component:E},{path:"/register",name:"Register",component:ae},{path:"/dashboard",name:"Dashboard",component:Ie,meta:{requiresAuth:!0}}],Oe=L({history:V(),routes:Ce});Oe.beforeEach(((e,t,a)=>{e.meta.requiresAuth&&!sessionStorage.getItem("user")?a({name:"Login"}):"Login"===e.name&&sessionStorage.getItem("user")?a({name:"Dashboard"}):a()}));var Ue=B({state:{user:null},getters:{},actions:{async login({commit:e},{form:t}){try{const a=await I.get(`https://laravel.gq/auth/login?email=${t.email}&senha=${t.senha}`);if(a){const t=await I.post("https://laravel.gq/auth/me",{},{headers:{Authorization:"Bearer "+a.data.access_token}});return!!t.data.email&&(e("setUser",{user:t.data,token:a.data.access_token}),!0)}return!1}catch(a){return!1}},logout({commit:e}){e("logout"),sessionStorage.clear("user")}},mutations:{setUser(e,{user:t,token:a}){e.user=t,e.user.token=a,sessionStorage.setItem("user",JSON.stringify(e.user))},alreadyAuth(e){const t=sessionStorage.getItem("user");t&&(e.user=JSON.parse(t))},logout(e){e.user=null}}});const qe=M(C);qe.directive("click-outside",{beforeMount(e,t,a){e.clickOutsideEvent=function(a){e===a.target||e.contains(a.target)||t.value(a,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}),qe.component("BaseInput",U),qe.use(Oe),qe.use(Ue),qe.mount("#app");
