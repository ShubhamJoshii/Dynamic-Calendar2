import{r as d,C as j,j as t,d as l}from"./index-DjgXxVfn.js";import{T as f}from"./tooltip-BhLTGUFS.js";import{P as M}from"./PopUp-WH6JJVy9.js";import"./index-MxTyqqxA.js";const D=()=>{const{CalendarData:c}=d.useContext(j),[m,i]=d.useState(!1),[s,o]=d.useState({type:null,date:null}),h=(e,a=null)=>{a?i(a):o({type:"Task",date:l(e).format("YYYY-MM-DD")})};return t.jsxs("div",{className:"schedule-container",children:[t.jsxs("table",{className:"schedule-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"date",children:"DATE"}),t.jsx("th",{className:"month",children:"MONTH"}),t.jsx("th",{className:"time",children:"TIME"}),t.jsx("th",{className:"title",children:"TITLE"})]})}),t.jsx("tbody",{children:c.map((e,a)=>{const p=l(e.date).format("D"),x=l(e.date).format("MMM, ddd").toUpperCase(),r=l(`${e.date} ${e.time}`,"HH:mm:ss").format("HH:mm"),n={Task:"#f5265a",Meeting:"#33ca2f",Calling:"#5abbf0"}[e.type]||null;return t.jsxs("tr",{children:[t.jsx("td",{className:"date",children:p}),t.jsx("td",{className:"month",children:x}),t.jsx("td",{className:"time",children:r}),t.jsxs("td",{className:"title",style:n?{background:n}:{},onClick:()=>h(e.date,e==null?void 0:e._id),children:[t.jsx("p",{children:e.title}),t.jsx(f,{isVisible:m,setIsVisible:i,found:e,setShowPopUpType:o,color:n,position:"bottom"})]})]},a)})})]}),(s==null?void 0:s.type)&&t.jsx(M,{showPopUpType:s.type,setShowPopUpType:o,...s})]})};export{D as default};
