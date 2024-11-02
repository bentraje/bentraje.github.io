"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9313],{5903:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=i(4848),s=i(8453);const o={},r="Skinning",a={id:"houdini/kinefx/skinning",title:"Skinning",description:"General",source:"@site/docs/houdini/kinefx/skinning.md",sourceDirName:"houdini/kinefx",slug:"/houdini/kinefx/skinning",permalink:"/docs/houdini/kinefx/skinning",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/houdini/kinefx/skinning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mocap Resources",permalink:"/docs/houdini/kinefx/retargeting/mocap_resources"},next:{title:"Wrangling",permalink:"/docs/houdini/kinefx/wrangling/"}},c={},h=[];function d(e){const n={a:"a",em:"em",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"skinning",children:"Skinning"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"General"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Personally, I wouldn't want to skin/weight in Houdini. It works but its not as accessible in Maya."}),"\n",(0,t.jsx)(n.li,{children:"You still have to learn it in the Houdini because there might be FX props created in Houdini that needs rigging. It would be cumbersome to go back-and-forth to Maya for this specialized task."}),"\n",(0,t.jsx)(n.li,{children:"AFAIK, there's no way to export and import weights on Houdini. At least natively. You have to make a pipelien out of it"}),"\n",(0,t.jsxs)(n.li,{children:["Normally, you need a capture node to skin your geo. Alternatively, you can brute force it and use wrangle node to manually set the weight attributes like from  ",(0,t.jsx)(n.a,{href:"https://www.tokeru.com/cgwiki/index.php?title=HoudiniKinefx#Procedural_weights",children:"Tokeru"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"New Joint Capture Paint SOP node provides an improved and simplified capture (skin) weight painting experience. This node replaces the Capture Layer Paint SOP node in the KineFX capture set-up workflow."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Skinning With Hard Surface"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rigid Skinning. Also known as hard surface skinning."}),"\n",(0,t.jsx)(n.li,{children:"What separates it with organic skinning is that hard surface usually has one joint influence per point, which is an easier process compared to organic skinning."}),"\n",(0,t.jsx)(n.li,{children:"Rigid and organic skinning are not mutually exclusive. They can co-exist on one mesh but just not on the same area of influence."}),"\n",(0,t.jsx)(n.li,{children:"This is equivalent to rigid skinning in other DCC. Technically, you can still use smooth skinning option for hard surface and just edit the points to only have one joint influence. This verbose set-up does help with clear visual on what parts are rigid."}),"\n",(0,t.jsx)(n.li,{children:"Rigid skinnings is mostly use for those objects that does not bend such as mechanical arms or props like bracelet or sword."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Skinning With Hard Surface",src:i(7437).A+"",title:"Skinning With Hard Surface",width:"534",height:"831"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Capture Packed Geo Troubleshoot"}),"\nIf you are using the ",(0,t.jsx)(n.em,{children:"capture by attribute"})," option, for it work, the attribute for the skin must be on primitive while attribute for the skeleton must be on points."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Skinning With Organic Surface (Simple)"}),"\nThis is equivalent as the smooth binding option Maya. Not the most accurate, but it doesn't matter as much since I almost always modify the weights anyway. I just need to block the weights on their respective region."]}),"\n",(0,t.jsx)(n.p,{children:"The Capture Layer Paint is what allows you to modify weights manually. Makes the process non-procedural but it does keep my sanity knowing that I can art direct it."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Skinning With Organic Surface (Simple)",src:i(3546).A+"",width:"623",height:"739"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Skinning With Organic Surface (Biharmonic Capture)"})}),"\n",(0,t.jsxs)(n.p,{children:["At 18.5, the set-up was unnecessarily verbose. You can check how it was back then ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=miwEX8vR_2c",children:"here"}),". At 19, they repackaged the same set-up down to one node which makes things easier to set-up."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Skinning With Organic Surface (Biharmonic Capture)",src:i(2169).A+"",width:"742",height:"773"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2169:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/houdini_kinefx_biharmonic_capture-9d6353a2e1ac5d432d192c3b9af3ce59.png"},7437:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/houdini_kinefx_rigid_skinning-088170e5b32b1728c32fcae4f23a4b3d.jpg"},3546:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/houdini_kinefx_smooth_skinning-0d48ae9db0344d5b561ed0d87106cb10.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);