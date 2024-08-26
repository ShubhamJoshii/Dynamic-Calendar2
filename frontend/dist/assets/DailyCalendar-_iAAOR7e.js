import{d as s,r,C as R,j as e}from"./index-DjgXxVfn.js";import{w as U,a as V}from"./weekday-BfjX8A3v.js";import{c as _,T as q}from"./tooltip-BhLTGUFS.js";import{P as B,a as z}from"./index-MxTyqqxA.js";import{P as G}from"./PopUp-WH6JJVy9.js";s.extend(U);s.extend(V);s.extend(_);function J(f,Y,m){let d=[],c=s(f);for(;c.isBefore(s(Y))||c.isSame(s(Y));)d.push(c.format("hh:mm A")),c=c.add(m,"minute");return d}const te=()=>{r.useState(null);const[f,Y]=r.useState([]),[m,d]=r.useState({type:null,date:null,time:null}),[c,M]=r.useState(!1),[j,b]=r.useState([]),{CalendarData:S,reScheduleCalendar:w,publicHoliday:N}=r.useContext(R),[k,$]=r.useState({title:"",date:"",time:""}),[l,v]=r.useState(s()),H=s().hour(1).minute(0),P=s().hour(24).minute(0);r.useEffect(()=>{Y(J(H,P,30))},[]),r.useEffect(()=>{const a=document.querySelector(".table-container"),n=s(),i=n.minute(),u=Math.floor(i/30)*30,o=n.set("minute",u).format("hh:mm A"),h=f.findIndex(p=>p===o);a.scrollTop=h*90},[f]);const E=(a,n)=>{const{_id:i,date:u,description:o,duration:h,time:p,title:x}=n;$({id:i,date:u,description:o,duration:h,time:p,title:x})};function I(a,n){w(k.id,a,n)}function A(a,n){a.preventDefault()}const g=a=>{v(a==="prev"?l.subtract(1,"day"):l.add(1,"day"))},O=(a,n,i=null)=>{i?M(i):d({type:"Task",date:s(a).format("YYYY-MM-DD"),time:n})};return r.useEffect(()=>{const a=N.filter(n=>n.date.iso===l.format("YYYY-MM-DD"));b(a)},[l,N]),e.jsxs("div",{className:"calendar-container",children:[e.jsxs("div",{className:"header",children:[e.jsxs("h1",{className:"header-title",children:[l.format("DD MMMM YYYY"),j.length>0&&e.jsxs("div",{className:"holiday",children:[e.jsx("span",{className:"holiday-text",children:"Holiday:"}),e.jsx("div",{className:"holiday-list",children:j==null?void 0:j.map((a,n)=>e.jsx("div",{className:"holiday-item",children:e.jsxs("span",{className:"holiday-item-text",children:[a.name,","]})},n))})]})]}),e.jsxs("div",{className:"nav-arrows",children:[e.jsx(B,{className:"nav-arrow",onClick:()=>g("prev")}),e.jsx(z,{className:"nav-arrow",onClick:()=>g("next")})]})]}),e.jsx("table",{className:"table-container",children:e.jsx("tbody",{children:f.map((a,n)=>{const i=s(a,"hh:mm A").format("HH:mm"),u=s();let o=s().format("mm"),h=u.minute(),p=Math.floor(h/30)*30,x=u.set("minute",p).set("second",0);o=o>30?o-30:o;const L=x.format("HH")===i.split(":")[0]&&x.format("mm")===i.split(":")[1]&&x.format("YYYY-MM-DD")===l.format("YYYY-MM-DD");let C=s(`${l.format("YYYY-MM-DD")} ${i}`),t=S.find(D=>{let F=s(`${D.date} ${D.time}`);if(C.isSame(F))return!0});const T={Task:"#f5265a",Meeting:"#33ca2f",Calling:"#5abbf0"}[t==null?void 0:t.type]||null;let y=s(`${t==null?void 0:t.date} ${t==null?void 0:t.time}`);return e.jsxs("tr",{className:"table-row",onDrop:()=>I(C.format("YYYY-MM-DD"),i),onDragOver:A,children:[e.jsx("td",{className:"time-column",children:e.jsx("p",{className:"time-text",children:a})}),e.jsx("td",{className:"separator"}),e.jsxs("td",{className:"schedule-cell",draggable:!!t,onDragStart:D=>t&&E(D,t),style:{backgroundColor:T},onClick:()=>O(l.format("YYYY-MM-DD"),i,t==null?void 0:t._id),children:[t&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"schedule-title",children:t==null?void 0:t.title}),e.jsx("p",{className:"schedule-time",children:y&&`${y.format("hh:mm")} - ${y.add(t==null?void 0:t.duration,"minutes").format("hh:mm A")}`})]}),L&&e.jsx("div",{className:"time-line",style:{"--minute":o},children:e.jsx("div",{className:"time-line-bar",children:e.jsx("div",{className:"time-line-dot"})})}),e.jsx(q,{isVisible:c,setIsVisible:M,found:t,setShowPopUpType:d,color:T,position:"bottom"})]})]},n)})})}),(m==null?void 0:m.type)&&e.jsx(G,{showPopUpType:m.type,setShowPopUpType:d,...m})]})};export{te as default};