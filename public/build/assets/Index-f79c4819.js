import{r as a,j as t,F as P,a as e,b as y}from"./app-175e8514.js";import{L as C}from"./Layout-0b1535c5.js";import"./user-icon-4fd58570.js";import"./headerlogo-23388e30.js";import"./index-558f4f74.js";const E=({auth:i,payments:c,success:n,error:d})=>{const[o,f]=a.useState(1),[m,g]=a.useState([]),[h,N]=a.useState(""),[b,p]=a.useState(""),r=10;a.useEffect(()=>{g(c)},[c]);const u=o*r,v=u-r,S=m.slice(v,u),x=s=>{f(s)};return a.useEffect(()=>{n&&N(n),d&&p(d)},[]),t(P,{children:[e(y,{title:"Subscriber | List"}),t("div",{className:"container-fluid",children:[h&&t("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[h,e("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),b&&t("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[b,e("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),e("h1",{className:"h3 mb-2 text-gray-800",children:"Subscriber"}),e("div",{className:"card shadow mb-4",children:t("div",{className:"card-body",children:[e("div",{className:"table-responsive",children:t("table",{className:"table table-bordered",children:[e("thead",{children:e("tr",{children:e("th",{children:"Email"})})}),e("tbody",{children:S.map(s=>e("tr",{children:e("td",{children:s==null?void 0:s.email})},s.id))})]})}),e("div",{className:"d-flex justify-content-center",children:e("ul",{className:"pagination",children:Array(Math.ceil(m.length/r)).fill(0).map((s,l)=>e("li",{className:`page-item ${o===l+1?"active":""}`,children:e("button",{className:"page-link",onClick:()=>x(l+1),children:l+1})},l))})})]})})]})]})};E.layout=i=>e(C,{children:i});export{E as default};
