"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1742,816],{725:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var r=t(6540),s=t(8465),l=t.n(s),n=t(6430),o=t(2905),d=t(4848);const u=e=>{let{employees:a,setEmployees:t,setIsAdding:s,getEmployees:u}=e;const[c,i]=(0,r.useState)(!1),[b,p]=(0,r.useState)(""),[m,x]=(0,r.useState)(""),[g,h]=(0,r.useState)(""),[y,f]=(0,r.useState)(""),[j,N]=(0,r.useState)(""),[v,k]=(0,r.useState)(""),[w,C]=(0,r.useState)("");return(0,d.jsx)("div",{className:"max-w-md mx-auto bg-white p-6 rounded-lg shadow-md",children:(0,d.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),!m)return l().fire({icon:"error",title:"Error!",text:"Name field is required.",showConfirmButton:!0});const r={bunot:c,generation:b,name:m,parents_a:g,parents_b:y,pick:j,point_person:v,spouse:w};a.push(r);try{await(0,n.gS)((0,n.rJ)(o.db,"names02"),{...r})}catch(d){console.log(d)}t(a),s(!1),u(),l().fire({icon:"success",title:"Added!",text:`${m}'s data has been added.`,showConfirmButton:!1,timer:1500})},children:[(0,d.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Add Relative"}),(0,d.jsx)("label",{htmlFor:"name",className:"block text-gray-700",children:"Name"}),(0,d.jsx)("input",{id:"name",type:"text",value:m,onChange:e=>x(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,d.jsx)("label",{htmlFor:"bunot",className:"block text-gray-700",children:"Bunot"}),(0,d.jsx)("input",{id:"bunot",type:"checkbox",checked:c,onChange:e=>i(e.target.checked),className:"mb-4"}),(0,d.jsx)("label",{htmlFor:"generation",className:"block text-gray-700",children:"Generation"}),(0,d.jsx)("input",{id:"generation",type:"number",value:b,onChange:e=>p(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,d.jsx)("label",{htmlFor:"parentsA",className:"block text-gray-700",children:"Parents A"}),(0,d.jsx)("input",{id:"parentsA",type:"text",value:g,onChange:e=>h(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,d.jsx)("label",{htmlFor:"parentsB",className:"block text-gray-700",children:"Parents B"}),(0,d.jsx)("input",{id:"parentsB",type:"text",value:y,onChange:e=>f(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,d.jsx)("label",{htmlFor:"pick",className:"block text-gray-700",children:"Pick"}),(0,d.jsx)("input",{id:"pick",type:"text",value:j,onChange:e=>N(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,d.jsx)("label",{htmlFor:"pointPerson",className:"block text-gray-700",children:"Point Person"}),(0,d.jsx)("input",{id:"pointPerson",type:"text",value:v,onChange:e=>k(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,d.jsx)("label",{htmlFor:"spouse",className:"block text-gray-700",children:"Spouse"}),(0,d.jsx)("input",{id:"spouse",type:"text",value:w,onChange:e=>C(e.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),(0,d.jsxs)("div",{className:"flex justify-between mt-6",children:[(0,d.jsx)("button",{type:"submit",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Add"}),(0,d.jsx)("button",{type:"button",onClick:()=>s(!1),className:"px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300",children:"Cancel"})]})]})})}},2905:(e,a,t)=>{t.r(a),t.d(a,{db:()=>n});var r=t(223),s=t(6430);const l=(0,r.Wp)({apiKey:"AIzaSyBD2yUpGVaZw6N9x6iex8pbJx20cqA-EK0",authDomain:"employee-database-861a6.firebaseapp.com",projectId:"employee-database-861a6",storageBucket:"employee-database-861a6.appspot.com",messagingSenderId:"69607313080",appId:"1:69607313080:web:99a0f1e74c4fa5c66eae4d"}),n=(0,s.aU)(l)}}]);