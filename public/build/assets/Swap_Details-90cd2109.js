import{r,j as a,F as x,a as e,b as D}from"./app-175e8514.js";import{L as M}from"./Layout-0b1535c5.js";import{d as _}from"./index-558f4f74.js";import"./user-icon-4fd58570.js";import"./headerlogo-23388e30.js";const j=({auth:c,bookings:d,success:l,error:n})=>{const[o,N]=r.useState(1),[h,v]=r.useState([]),[m,y]=r.useState(""),[u,w]=r.useState(""),s=10;r.useEffect(()=>{v(d)},[d]);const p=o*s,S=p-s,C=h.slice(S,p),P=t=>{N(t)};r.useEffect(()=>{l&&y(l),n&&w(n)},[]);const b=(t,i)=>{_.Inertia.get(route("admin.swap_Ins.status",{id:t,status:i}))};return a(x,{children:[e(D,{title:"Payments | List"}),a("div",{className:"container-fluid",children:[m&&a("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[m,e("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),u&&a("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[u,e("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),e("h1",{className:"h3 mb-2 text-gray-800",children:"Swap Inspection Details"}),e("div",{className:"card shadow mb-4",children:a("div",{className:"card-body",children:[e("div",{className:"table-responsive",children:a("table",{className:"table table-bordered",children:[e("thead",{children:a("tr",{children:[e("th",{children:"Inspection Time"}),e("th",{children:"Inspection Date"}),e("th",{children:"Selected Car"}),e("th",{children:"Swaped Car"}),e("th",{children:"Price"}),e("th",{children:"Price Diffrence"}),e("th",{children:"Status"})]})}),e("tbody",{children:C.map(t=>{var i,f,g;return a("tr",{children:[e("td",{children:t==null?void 0:t.Inspection_Time}),e("td",{children:t==null?void 0:t.Inspection_date}),e("td",{children:(i=t.mycar)==null?void 0:i.title}),e("td",{children:(f=t.car)==null?void 0:f.title}),e("td",{children:(g=t.car)==null?void 0:g.price}),e("td",{children:t==null?void 0:t.price_diff}),e("td",{children:a("div",{className:"dropdown mb-4",children:[e("button",{className:`btn btn-${t&&t.status&&t.status===1?"success":"danger"} dropdown-toggle`,type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:t&&t.status&&t.status===1?"Active":"Deactive"}),a("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[e("button",{className:"dropdown-item",onClick:()=>b(t.id,1),children:"Active"}),e("button",{className:"dropdown-item",onClick:()=>b(t.id,0),children:"Deactive"})]})]})})]},t.id)})})]})}),e("div",{className:"d-flex justify-content-center",children:e("ul",{className:"pagination",children:Array(Math.ceil(h.length/s)).fill(0).map((t,i)=>e("li",{className:`page-item ${o===i+1?"active":""}`,children:e("button",{className:"page-link",onClick:()=>P(i+1),children:i+1})},i))})})]})})]})]})};j.layout=c=>e(M,{children:c});export{j as default};
