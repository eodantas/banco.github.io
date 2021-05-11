import{r as e,o as a,c as t,a as o,t as l,b as r,m as n,F as s,d as u,C as d,w as i,e as m,f as c,g as p,h as x,i as f,j as b}from"./vendor.1830ad31.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const o=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,r)=>{const n=new URL(e,o);if(self[a].moduleMap[n])return t(self[a].moduleMap[n]);const s=new Blob([`import * as m from '${n}';`,`${a}.moduleMap['${n}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){r(new Error(`Failed to import: ${e}`)),l(u)},onload(){t(self[a].moduleMap[n]),l(u)}});document.head.appendChild(u)})),self[a].moduleMap={}}}("/assets/");const g={name:"App"},h={class:"mx-auto"};g.render=function(l,r,n,s,u,d){const i=e("router-view");return a(),t("div",h,[o(i)])};const y={props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},error:{type:String,default:""}},emits:["update:modelValue"],setup:(e,{emit:a})=>({uuid:function(){let e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(a){const t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==a?t:3&t|8).toString(16)}))}(),updateValue:e=>{a("update:modelValue",e.target.value)}})};y.render=function(e,u,d,i,m,c){return a(),t(s,null,[d.label?(a(),t("label",{key:0,for:i.uuid,class:"block text-gray-700 text-sm font-bold mb-2 ml-3"},l(d.label),9,["for"])):r("",!0),o("input",n(e.$attrs,{value:d.modelValue,onInput:u[1]||(u[1]=(...e)=>i.updateValue&&i.updateValue(...e)),id:i.uuid,"aria-describedby":d.error?`${i.uuid}-error`:null,"aria-invalid":!!d.error||null,class:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600\n      transition duration-500 px-3 pb-3\n    "}),null,16,["value","id","aria-describedby","aria-invalid"]),d.error?(a(),t("p",{key:1,class:"errorMessage",id:`${i.uuid}-error`,"aria-live":"assertive"},l(d.error),9,["id"])):r("",!0)],64)};const v={name:"Login",setup(){const e=u({email:"",senha:""});return{form:e,login:()=>{d.post("https://laravel.gq/auth/login",e.value).then((e=>console.log(e.data))).catch((e=>console.log(e)))}}}},w={class:"bg-purple-400 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0",style:{"background-color":"#9921e8","background-image":"linear-gradient(315deg, #9921e8 0%, #5f72be 74%)"}},V=o("header",{class:"fixed bg-black top-0 left-0 w-full p-2 flex items-center"},[o("img",{src:"./assets/cifrao_g.e7a60860.png",alt:"banco",class:"w-10 mr-2"}),o("h1",{class:"text-4xl bont-bold text-white text-center"},"Banco")],-1),U={class:"bg-white max-w-lg mx-auto p-8 md:p-12 mt-20 rounded-lg shadow-2xl"},k=o("section",null,[o("h3",{class:"font-bold text-2xl"},"Bem Vindo ao Banco"),o("p",{class:"text-gray-600 pt-2"},"Faça o login.")],-1),B={class:"mt-10"},M={class:"mb-6 pt-3 rounded bg-gray-200"},L={class:"mb-6 pt-3 rounded bg-gray-200"},R=o("div",{class:"flex justify-end"},[o("a",{href:"#",class:"text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"},"Esqueceu sua senha?")],-1),S=o("button",{class:"bg-purple-600 text-white hover:bg-purple-700 font-bold py-2 rounded shadow-lg hover-shadow-xl transition duration-200",type:"submit"}," Login ",-1),j={class:"max-w-lg mx-auto text-center mt-10 mb-6"},q={class:"text-white"},C=c(" Não tem uma conta? "),$=c("Criar conta"),_=c(". "),E=o("footer",{class:"max-w-lg mx-auto flex text-white justify-center"},[o("a",{href:"#",class:"hover:underline"},"Contato"),o("span",{class:"mx-3"},"-"),o("a",{href:"#",class:"hover:underline"},"Privacidade")],-1);v.render=function(l,r,n,s,u,d){const c=e("BaseInput"),p=e("router-link");return a(),t("div",w,[V,o("main",U,[k,o("section",B,[o("form",{onSubmit:r[3]||(r[3]=i(((...e)=>s.login&&s.login(...e)),["prevent"])),class:"flex flex-col",method:"post"},[o("div",M,[o(c,{type:"email",label:"E-Mail",required:"",autocomplete:"email",autofocus:"",modelValue:s.form.email,"onUpdate:modelValue":r[1]||(r[1]=e=>s.form.email=e)},null,8,["modelValue"])]),o("div",L,[o(c,{type:"password",label:"Senha",required:"",autocomplete:"current-password",modelValue:s.form.senha,"onUpdate:modelValue":r[2]||(r[2]=e=>s.form.senha=e)},null,8,["modelValue"])]),R,S],32)])]),o("div",j,[o("p",q,[C,o(p,{to:{name:"Register"},class:"font-bold hover:underline"},{default:m((()=>[$])),_:1}),_])]),E])};const F={name:"Register",setup:()=>({form:u({nome:"",email:"",senha:"",confirm:""})})},I={class:"min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0",style:{"background-color":"#9921e8","background-image":"linear-gradient(315deg, #9921e8 0%, #5f72be 74%)"}},N=o("header",{class:"fixed bg-black top-0 left-0 w-full p-2 flex items-center"},[o("img",{src:"/assets/cifrao_g.e7a60860.png",alt:"banco",class:"w-10 mr-2"}),o("h1",{class:"text-4xl bont-bold text-white text-center"},"Banco")],-1),O={class:"bg-white max-w-lg mx-auto p-8 md:p-12 my-20 rounded-lg shadow-2xl"},P=o("section",null,[o("h3",{class:"font-bold text-2xl"},"Bem vindo ao Banco"),o("p",{class:"text-gray-600 pt-2"},"Crie Sua Conta.")],-1),A={class:"mt-10"},D={action:"",class:"flex flex-col",method:"post"},T={class:"mb-6 pt-3 rounded bg-gray-200"},z={class:"mb-6 pt-3 rounded bg-gray-200"},G={class:"mb-6 pt-3 rounded bg-gray-200"},H={class:"mb-6 pt-3 rounded bg-gray-200"},J=o("button",{class:"bg-purple-600 text-white hover:bg-purple-700 font-bold py-2 rounded shadow-lg hover-shadow-xl transition duration-200",type:"submit"}," Criar ",-1);F.render=function(l,r,n,s,u,d){const i=e("BaseInput");return a(),t("div",I,[N,o("main",O,[P,o("section",A,[o("form",D,[o("div",T,[o(i,{type:"text",label:"Nome",required:"",autofocus:"",modelValue:s.form.nome,"onUpdate:modelValue":r[1]||(r[1]=e=>s.form.nome=e)},null,8,["modelValue"])]),o("div",z,[o(i,{type:"email",label:"E-Mail",required:"",modelValue:s.form.email,"onUpdate:modelValue":r[2]||(r[2]=e=>s.form.email=e)},null,8,["modelValue"])]),o("div",G,[o(i,{type:"password",label:"Senha",required:"",modelValue:s.form.senha,"onUpdate:modelValue":r[3]||(r[3]=e=>s.form.senha=e)},null,8,["modelValue"])]),o("div",H,[o(i,{type:"password",label:"Confirme a Senha",required:"",modelValue:s.form.confirm,"onUpdate:modelValue":r[4]||(r[4]=e=>s.form.confirm=e)},null,8,["modelValue"])]),J])])])])};const K=[{path:"/",name:"Login",component:v},{path:"/register",name:"Register",component:F}];var Q=p({history:x(),routes:K}),W=f({state:{},getters:{},actions:{},mutations:{}});const X=b(g);X.component("BaseInput",y),X.use(Q),X.use(W),X.mount("#app");
