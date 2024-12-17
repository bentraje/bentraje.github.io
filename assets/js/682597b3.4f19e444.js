"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2507,1742,3245,816,455,243,4295,7927],{725:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(6540),n=s(8465),l=s.n(n),r=s(6430),o=s(2905),i=s(4848);const d=e=>{let{employees:t,setEmployees:s,setIsAdding:n,getEmployees:d}=e;const[c,m]=(0,a.useState)(!1),[u,x]=(0,a.useState)(""),[p,h]=(0,a.useState)(""),[g,b]=(0,a.useState)(""),[y,f]=(0,a.useState)(""),[j,N]=(0,a.useState)(""),[w,v]=(0,a.useState)(""),[k,C]=(0,a.useState)("");return(0,i.jsx)("div",{className:"max-w-md mx-auto bg-white p-6 rounded-lg shadow-md",children:(0,i.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),!p)return l().fire({icon:"error",title:"Error!",text:"Name field is required.",showConfirmButton:!0});const a={bunot:c,generation:u,name:p,parents_a:g,parents_b:y,pick:j,point_person:w,spouse:k};t.push(a);try{await(0,r.gS)((0,r.rJ)(o.db,"names02"),{...a})}catch(i){console.log(i)}s(t),n(!1),d(),l().fire({icon:"success",title:"Added!",text:`${p}'s data has been added.`,showConfirmButton:!1,timer:1500})},children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Add Relative"}),(0,i.jsx)("label",{htmlFor:"name",className:"block text-gray-700",children:"Name"}),(0,i.jsx)("input",{id:"name",type:"text",value:p,onChange:e=>h(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"bunot",className:"block text-gray-700",children:"Bunot"}),(0,i.jsx)("input",{id:"bunot",type:"checkbox",checked:c,onChange:e=>m(e.target.checked),className:"mb-4"}),(0,i.jsx)("label",{htmlFor:"generation",className:"block text-gray-700",children:"Generation"}),(0,i.jsx)("input",{id:"generation",type:"number",value:u,onChange:e=>x(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"parentsA",className:"block text-gray-700",children:"Parents A"}),(0,i.jsx)("input",{id:"parentsA",type:"text",value:g,onChange:e=>b(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"parentsB",className:"block text-gray-700",children:"Parents B"}),(0,i.jsx)("input",{id:"parentsB",type:"text",value:y,onChange:e=>f(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"pick",className:"block text-gray-700",children:"Pick"}),(0,i.jsx)("input",{id:"pick",type:"text",value:j,onChange:e=>N(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"pointPerson",className:"block text-gray-700",children:"Point Person"}),(0,i.jsx)("input",{id:"pointPerson",type:"text",value:w,onChange:e=>v(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"spouse",className:"block text-gray-700",children:"Spouse"}),(0,i.jsx)("input",{id:"spouse",type:"text",value:k,onChange:e=>C(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsxs)("div",{className:"flex justify-between mt-6",children:[(0,i.jsx)("button",{type:"submit",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Add"}),(0,i.jsx)("button",{type:"button",onClick:()=>n(!1),className:"px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300",children:"Cancel"})]})]})})}},4192:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(6540),n=s(8465),l=s.n(n),r=s(6430),o=s(2905),i=s(4848);const d=e=>{let{employees:t,selectedEmployee:s,setEmployees:n,setIsEditing:d,getEmployees:c}=e;const m=s.id,[u,x]=(0,a.useState)(s.bunot||!1),[p,h]=(0,a.useState)(s.generation||""),[g,b]=(0,a.useState)(s.name||""),[y,f]=(0,a.useState)(s.parents_a||""),[j,N]=(0,a.useState)(s.parents_b||""),[w,v]=(0,a.useState)(s.pick||""),[k,C]=(0,a.useState)(s.point_person||""),[S,E]=(0,a.useState)(s.spouse||""),[A,B]=(0,a.useState)(s.wishlist||"");return(0,i.jsx)("div",{className:"max-w-md mx-auto bg-white p-6 rounded-lg shadow-md",children:(0,i.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),!g)return l().fire({icon:"error",title:"Error!",text:"Name field is required.",showConfirmButton:!0});const s={bunot:u,generation:p,name:g,parents_a:y,parents_b:j,pick:w,point_person:k,spouse:S,wishlist:A};await(0,r.BN)((0,r.H9)(o.db,"names02",m),{...s,id:m}),n(t),d(!1),c(),l().fire({icon:"success",title:"Updated!",text:`${g}'s data has been updated.`,showConfirmButton:!1,timer:1500})},children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Edit Relative"}),(0,i.jsx)("label",{htmlFor:"name",className:"block text-gray-700",children:"Name"}),(0,i.jsx)("input",{id:"name",type:"text",value:g,onChange:e=>b(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"bunot",className:"block text-gray-700",children:"Bunot"}),(0,i.jsx)("input",{id:"bunot",type:"checkbox",checked:u,onChange:e=>x(e.target.checked),className:"mb-4"}),(0,i.jsx)("label",{htmlFor:"generation",className:"block text-gray-700",children:"Generation"}),(0,i.jsx)("input",{id:"generation",type:"number",value:p,onChange:e=>h(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"parentsA",className:"block text-gray-700",children:"Parents A"}),(0,i.jsx)("input",{id:"parentsA",type:"text",value:y,onChange:e=>f(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"parentsB",className:"block text-gray-700",children:"Parents B"}),(0,i.jsx)("input",{id:"parentsB",type:"text",value:j,onChange:e=>N(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"pick",className:"block text-gray-700",children:"Pick"}),(0,i.jsx)("input",{id:"pick",type:"text",value:w,onChange:e=>v(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"pointPerson",className:"block text-gray-700",children:"Point Person"}),(0,i.jsx)("input",{id:"pointPerson",type:"text",value:k,onChange:e=>C(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"spouse",className:"block text-gray-700",children:"Spouse"}),(0,i.jsx)("input",{id:"spouse",type:"text",value:S,onChange:e=>E(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsx)("label",{htmlFor:"spouse",className:"block text-gray-700",children:"Wishlist"}),(0,i.jsx)("input",{id:"wishlist",type:"text",value:A,onChange:e=>B(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,i.jsxs)("div",{className:"flex justify-between mt-6",children:[(0,i.jsx)("button",{type:"submit",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Update"}),(0,i.jsx)("button",{type:"button",onClick:()=>d(!1),className:"px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300",children:"Cancel"})]})]})})}},291:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(6540),n=s(8465),l=s.n(n),r=s(6430),o=s(2905),i=s(4848);const d=e=>{let{employees:t,selectedEmployee:s,setEmployees:n,setIsEditingWishlist:d,getEmployees:c}=e;const m=s.id,[u,x]=(0,a.useState)(s.wishlist||""),[p]=(0,a.useState)(s.name||"");return(0,i.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",children:(0,i.jsx)("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full p-6",children:(0,i.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{const e={...s,wishlist:u};await(0,r.BN)((0,r.H9)(o.db,"names02",m),e,{merge:!0});const a=t.map((t=>t.id===m?e:t));n(a),c(),d(!1),l().fire({icon:"success",title:"Updated!",text:`${p}'s wishlist has been updated.`,showConfirmButton:!1,timer:1500})}catch(a){console.error("Update error:",a),l().fire({icon:"error",title:"Error!",text:"Failed to update wishlist.",showConfirmButton:!0})}},children:[(0,i.jsxs)("h1",{className:"text-2xl font-bold mb-4",children:["Edit Wishlist for ",p]}),(0,i.jsx)("label",{htmlFor:"wishlist",className:"block text-gray-700 mb-2",children:"Wishlist"}),(0,i.jsx)("textarea",{id:"wishlist",value:u,onChange:e=>x(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded min-h-[100px]",placeholder:"Enter your wishlist items..."}),(0,i.jsxs)("div",{className:"flex justify-between mt-6",children:[(0,i.jsx)("button",{type:"submit",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Update Wishlist"}),(0,i.jsx)("button",{type:"button",onClick:()=>d(!1),className:"px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300",children:"Cancel"})]})]})})})}},633:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(6540),n=s(7391),l=s(6430),r=s(2905),o=s(8148),i=s(5003),d=s(4848);const c=e=>{let{setIsAdding:t,setIsAuthenticated:s,isAdmin:c}=e;const[m,u]=(0,a.useState)("");return(0,a.useEffect)((()=>{(async()=>{const e=(0,n.xI)().currentUser;if(e){const t=e.uid,s=(0,l.H9)(r.db,"names02",t),a=await(0,l.x7)(s);if(a.exists()){const e=a.data();u(e.name)}}})()}),[]),(0,d.jsxs)("header",{className:"max-w-md mx-auto mt-10 p-6 bg-white text-center",children:[(0,d.jsx)("img",{src:i.A,alt:"Manito Header",className:"w-full h-auto mb-4 rounded-md"}),(0,d.jsx)("h1",{className:"text-2xl font-bold text-gray-800 text-center mb-2 leading-tight",children:"Tatay Nanding and Nanay Inday"}),(0,d.jsx)("h2",{className:"text-xl italic text-gray-700 text-center",children:"Manito/Manita Christmas Reunion"}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"flex justify-center items-center space-x-4",children:[c&&(0,d.jsx)("button",{onClick:()=>t(!0),className:"px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Add Relative"}),m&&(0,d.jsxs)("p",{className:"text-gray-600",children:["You are logged in as ",(0,d.jsx)("span",{className:"text-red-500 font-bold",children:m})]}),(0,d.jsx)(o.default,{setIsAuthenticated:s})]})]})}},3258:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(6540),n=s(6430),l=s(2905),r=s(4848);const o=e=>{let{employees:t,handleEdit:s,handleEditWishlist:o,handleDelete:i,isAdmin:d,getGenerationList:c,familyTree:m}=e;const[u,x]=(0,a.useState)({}),[p,h]=(0,a.useState)({}),[g,b]=(0,a.useState)({}),[y,f]=(0,a.useState)({});(0,a.useEffect)((()=>{(async()=>{const e={},t={};(await(0,n.GG)((0,n.rJ)(l.db,"names02"))).forEach((s=>{const a=s.data();e[s.id]=a.name||"Unknown",t[s.id]={id:s.id,...a}})),b(e),f(t)})()}),[]);return(0,r.jsx)("div",{className:"flex justify-center mt-6",children:(0,r.jsxs)("table",{className:"table-auto",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"bg-gray-100 border-b",children:[(0,r.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-700",children:"Name"}),(0,r.jsx)("th",{className:"px-6 py-3 text-center text-sm font-medium text-gray-700",children:"Your Wishlist"}),(0,r.jsx)("th",{className:"px-6 py-3 text-center text-sm font-medium text-gray-700",children:"Edit Wishlist"}),(0,r.jsx)("th",{className:"px-6 py-3 text-center text-sm font-medium text-gray-700",children:"Pick"}),(0,r.jsx)("th",{className:"px-6 py-3 text-center text-sm font-medium text-gray-700",children:"Pick's Wishlist"}),d&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-700",children:"Pick ID "}),(0,r.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-700",children:"Parents"}),(0,r.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-700",children:"Spouse"}),(0,r.jsx)("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-700",children:"Generation"}),(0,r.jsx)("th",{className:"px-6 py-3 text-center text-sm font-medium text-gray-700",children:"Actions"})]})]})}),(0,r.jsx)("tbody",{children:t&&t.length>0?t.map(((e,t)=>(0,r.jsxs)("tr",{className:(t%2==0?"bg-white":"bg-gray-50")+" hover:bg-gray-100 border-b",children:[(0,r.jsx)("td",{className:"px-6 py-4 text-left text-gray-600",children:e.name}),(0,r.jsx)("td",{className:"px-2 py-2 text-left text-gray-600",children:y[e.id]?.wishlist}),(0,r.jsx)("td",{className:"px-2 py-2 text-center",children:(0,r.jsx)("button",{onClick:()=>o(e.id),className:"px-3 py-1 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600",children:"Edit Wishlist"})}),(0,r.jsx)("td",{className:"px-6 py-4 text-center text-gray-600",children:""===e.pick?u[e.name]?u[e.name]:p[e.name]?p[e.name]:(0,r.jsx)("button",{className:"px-3 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600",onClick:()=>(async(e,t)=>{const s=c(e,m).filter((t=>t!==e)),a=((e,t)=>e.filter((e=>e.pick&&""!==e.pick.trim())).map((e=>t[e.pick]||e.pick)))(m,g),r=((e,t)=>{const s=t.find((t=>t.name===e));if(!s||!s.spouse)return[];const a=t.find((e=>e.id===s.spouse));return a?[a.name]:[]})(e,m),o=((e,t)=>{const s=t.find((t=>t.name===e));if(!s||!s.parents_a)return[];const a=s.parents_a;return t.filter((t=>t.parents_a===a&&t.name!==e)).map((e=>e.name))})(e,m),i=(e=>e.filter((e=>!1===e.bunot)).map((e=>e.name)))(m),d=m.find((e=>e.id===t)),u=d?d.generation:null,p=((e,t,s,a,n,l)=>e.filter((e=>!(t.includes(e)||s.includes(e)||n.includes(e)||2!==l&&a.includes(e)))))(s,r,a,o,i,u);if(console.log("wee"),console.log("generation",s),console.log("picked",a),console.log("spouse",r),console.log("sibling",o),console.log("noBonut",i),console.log("eligible",p),p.length>0){const a=p[Math.floor(Math.random()*p.length)],r=(0,n.P)((0,n.rJ)(l.db,"names02"),(0,n._M)("name","==",a)),o=(await(0,n.GG)(r)).docs[0],i={id:o.id,...o.data()};console.log(i);let d=0;const c=setInterval((()=>{h((t=>({...t,[e]:s[d%s.length]}))),d+=1}),100);setTimeout((async()=>{clearInterval(c),h((t=>({...t,[e]:null}))),x((t=>({...t,[e]:i.name}))),console.log("Picked Name:",i.name);try{const e=(0,n.H9)(l.db,"names02",t);await(0,n.BN)(e,{pick:i.id},{merge:!0}),console.log(`Updated Firestore with picked person ID: ${i.id}`)}catch(s){console.error("Error updating Firestore:",s)}}),3e3)}else console.log("No eligible names available to pick.")})(e.name,e.id),children:"Bunot"}):g[e.pick]||e.pick}),(0,r.jsx)("td",{className:"px-6 py-4 text-center text-gray-600",children:y[e.pick]?.wishlist}),d&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("td",{className:"px-2 py-2 text-left text-gray-600",children:e.id}),(0,r.jsx)("td",{className:"px-2 py-2 text-left text-gray-600",children:e.parents_a}),(0,r.jsx)("td",{className:"px-2 py-2 text-left text-gray-600",children:e.spouse}),(0,r.jsx)("td",{className:"px-2 py-2 text-left text-gray-600",children:e.generation}),(0,r.jsxs)("td",{className:"px-2 py-2 text-center",children:[(0,r.jsx)("button",{onClick:()=>s(e.id),className:"px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300",children:"Edit"}),(0,r.jsx)("button",{onClick:()=>i(e.id),className:"px-3 py-1 text-sm text-gray-600 bg-red-200 rounded-lg hover:bg-red-300",children:"Delete"})]})]})]},e.id))):(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:d?7:2,className:"px-6 py-4 text-center text-gray-600",children:"."})})})]})})}},8278:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(6540),n=s(6430),l=s(7391),r=s(8465),o=s.n(r),i=s(633),d=s(3258),c=s(725),m=s(4192),u=s(291),x=s(2905),p=s(4848);const h=(e,t)=>{const s=t.find((t=>t.name===e));if(!s)return[];const a=s.generation;return t.filter((e=>e.generation===a)).map((e=>e.name))},g=e=>{let{setIsAuthenticated:t}=e;const[s,r]=(0,a.useState)(),[g,b]=(0,a.useState)(null),[y,f]=(0,a.useState)(!1),[j,N]=(0,a.useState)(!1),[w,v]=(0,a.useState)(!1),[k,C]=(0,a.useState)([]),[S,E]=(0,a.useState)(!1),A=async()=>{const e=(0,l.xI)().currentUser,t=e.email,s=(t.split("@")[0],e.uid),a=["admin@example.com","admin2@example.com","admin@gmail.com"].includes(t);E(a);const o=(await(0,n.GG)((0,n.rJ)(x.db,"names02"))).docs.map((e=>({id:e.id,...e.data()})));if(C(o),a)r(o);else{const e=(0,n.P)((0,n.rJ)(x.db,"names02"),(0,n._M)("point_person","==",s)),t=(await(0,n.GG)(e)).docs.map((e=>({id:e.id,...e.data()})));r(t)}};(0,a.useEffect)((()=>{const e=(0,l.xI)();(0,l.hg)(e,(e=>{e?A():t(!1)}))}),[]);return(0,p.jsxs)("div",{className:"max-w-full mx-auto mt-20 p-6 bg-white rounded-lg shadow-md w-full overflow-x-auto",children:[!y&&!j&&!w&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.default,{setIsAdding:f,setIsAuthenticated:t,isAdmin:S}),(0,p.jsx)(d.default,{employees:s,handleEdit:e=>{const[t]=s.filter((t=>t.id===e));b(t),N(!0)},handleEditWishlist:e=>{const[t]=s.filter((t=>t.id===e));b(t),v(!0)},handleDelete:e=>{o().fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!"}).then((t=>{if(t.value){const[t]=s.filter((t=>t.id===e));(0,n.kd)((0,n.H9)(x.db,"names02",e)),o().fire({icon:"success",title:"Deleted!",text:`${t.firstName} ${t.lastName}'s data has been deleted.`,showConfirmButton:!1,timer:1500});const a=s.filter((t=>t.id!==e));r(a)}}))},isAdmin:S,getGenerationList:h,familyTree:k})]}),y&&(0,p.jsx)(c.default,{employees:s,setEmployees:r,setIsAdding:f,getEmployees:A}),j&&(0,p.jsx)(m.default,{employees:s,selectedEmployee:g,setEmployees:r,setIsEditing:N,getEmployees:A}),w&&(0,p.jsx)(u.default,{employees:s,selectedEmployee:g,setEmployees:r,setIsEditingWishlist:v,getEmployees:A}),(0,p.jsx)("div",{className:"bg-gray-100 p-4 rounded-lg shadow-md max-w-md mx-auto p-6 rounded-lg shadow-md",children:(0,p.jsxs)("p",{className:"text-gray-800 text-lg",children:["If you encounter any errors, have additions, updates, or questions, please contact\xa0 ",(0,p.jsx)("br",{}),(0,p.jsx)("a",{href:"https://web.facebook.com/rebenrio.traje/",target:"_blank",className:"text-blue-600 hover:text-blue-800 font-semibold",children:"Ben Traje"}),"\xa0on Facebook."]})})]})}},8148:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(6540);var a=s(8465),n=s.n(a),l=s(7391),r=s(4848);const o=e=>{let{setIsAuthenticated:t}=e;return(0,r.jsx)("button",{className:"px-4 py-2 text-gray-700 bg-gray-200 rounded-md shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400",onClick:()=>{const e=(0,l.xI)();(0,l.CI)(e).then((()=>{n().fire({icon:"question",title:"Logging Out",text:"Are you sure you want to log out?",showCancelButton:!0,confirmButtonText:"Yes"}).then((e=>{e.value&&n().fire({timer:1500,showConfirmButton:!1,willOpen:()=>{n().showLoading()},willClose:()=>{t(!1)}})}))})).catch((e=>{console.log(e)}))},children:"Logout"})}},2905:(e,t,s)=>{s.r(t),s.d(t,{db:()=>r,default:()=>o});var a=s(223),n=s(6430);const l=(0,a.Wp)({apiKey:"AIzaSyBD2yUpGVaZw6N9x6iex8pbJx20cqA-EK0",authDomain:"employee-database-861a6.firebaseapp.com",projectId:"employee-database-861a6",storageBucket:"employee-database-861a6.appspot.com",messagingSenderId:"69607313080",appId:"1:69607313080:web:99a0f1e74c4fa5c66eae4d"}),r=(0,n.aU)(l),o=l},5003:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/manito_header-a125386f99d4f64717841133f1a64463.png"}}]);