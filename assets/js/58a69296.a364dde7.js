"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3245],{8148:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});o(6540);var n=o(8465),s=o.n(n),u=o(7391),i=o(4848);const l=t=>{let{setIsAuthenticated:e}=t;return(0,i.jsx)("button",{style:{marginLeft:"12px"},className:"muted-button",onClick:()=>{const t=(0,u.xI)();(0,u.CI)(t).then((()=>{s().fire({icon:"question",title:"Logging Out",text:"Are you sure you want to log out?",showCancelButton:!0,confirmButtonText:"Yes"}).then((t=>{t.value&&s().fire({timer:1500,showConfirmButton:!1,willOpen:()=>{s().showLoading()},willClose:()=>{e(!1)}})}))})).catch((t=>{console.log(t)}))},children:"Logout"})}}}]);