import{r as n,a as x,j as e,d as p,N as f}from"./index-DjgXxVfn.js";import{P as j,a as w,b as L}from"./index-MxTyqqxA.js";const v=[{text:"Day",URL:"/day"},{text:"Week",URL:"/week"},{text:"Month",URL:"/month"},{text:"Schedule",URL:"/schedule"}],b=({date:m,setDate:u,changeCalender:d})=>{const[l,o]=n.useState(!1),[r,c]=n.useState("Month"),h=()=>{o(!l)},s=x();n.useEffect(()=>{let t=s.pathname.charAt(1).toUpperCase()+s.pathname.slice(2);s.pathname==="/"?c("Month"):c(t)},[s]);const a=n.useRef(null);return n.useEffect(()=>{function t(i){a.current&&!a.current.contains(i.target)&&o(!1)}return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[a]),e.jsxs("div",{className:"header-container",children:[e.jsxs("div",{className:"header-left",children:[e.jsx("button",{type:"button",className:"today-button",onClick:()=>u(p().tz("Asia/Kolkata")),children:"Today"}),e.jsxs("div",{className:"navigation-icons",children:[e.jsx(j,{onClick:()=>d("prev")}),e.jsx(w,{onClick:()=>d("next")})]}),e.jsx("h1",{className:"date-title",children:m.format("MMMM YYYY")})]}),e.jsxs("div",{className:"dropdown-container",ref:a,children:[e.jsx("div",{className:"dropdown-button-container",children:e.jsxs("button",{type:"button",className:"dropdown-button",onClick:h,children:[r,e.jsx(L,{className:"dropdown-icon","aria-hidden":"true"})]})}),l&&e.jsx("div",{className:"dropdown-menu",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",children:e.jsx("div",{className:"dropdown-menu-items",role:"none",children:v.map((t,i)=>e.jsx(f,{to:t.URL,className:`dropdown-menu-item ${t.text.toLowerCase()!==r.toLowerCase()&&"hover-bg"}`,style:{color:t.text.toLowerCase()===r.toLowerCase()&&"#419eff"},onClick:()=>o(!1),children:t.text},i))})})]})]})};export{b as default};