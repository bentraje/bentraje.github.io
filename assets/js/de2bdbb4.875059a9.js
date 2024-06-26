"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9198],{6519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const r={title:"Auto Rigging"},o=void 0,a={id:"maya/rigging/auto_rigging",title:"Auto Rigging",description:"General",source:"@site/docs/maya/rigging/auto_rigging.md",sourceDirName:"maya/rigging",slug:"/maya/rigging/auto_rigging",permalink:"/docs/maya/rigging/auto_rigging",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/maya/rigging/auto_rigging.md",tags:[],version:"current",frontMatter:{title:"Auto Rigging"},sidebar:"tutorialSidebar",previous:{title:"Rigging",permalink:"/docs/maya/rigging/"},next:{title:"Post Production",permalink:"/docs/post-production/"}},l={},c=[{value:"non symmetrical",id:"non-symmetrical",level:3},{value:"extra nodes in advance skeleton",id:"extra-nodes-in-advance-skeleton",level:3}];function d(e){const n={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"General"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For the daily task, you will almost always used an auto rigger for production."}),"\n",(0,i.jsx)(n.li,{children:"It's practical and gets your started for the standard rigging requirements."}),"\n",(0,i.jsx)(n.li,{children:"Most auto riggers have their own system to follow but they also allow you to create your own rigging features."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The most prominent auto riggers are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HumanIK"}),"\n",(0,i.jsx)(n.li,{children:"mGear"}),"\n",(0,i.jsx)(n.li,{children:"ZooTools"}),"\n",(0,i.jsx)(n.li,{children:"Advance Skeleton"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"HumanIK"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Built-in Maya."}),"\n",(0,i.jsx)(n.li,{children:"Initially a MotionBuilder feature and carried over to Maya. This means you will have a better integration with mocap from motion builder"}),"\n",(0,i.jsx)(n.li,{children:"Not the most flexible system. And personally their are better options out there."}),"\n",(0,i.jsxs)(n.li,{children:["The most prominent feature is the BodyIK, a dedicated solver not present in other system.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"As of 2024 Q1, you can't even create it as a standalone solver like RotatePlane and Single Chain IK Solver."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Limited only to Body Rigging (i.e no Facial Rigging)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"ZooTools"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The most comprehensive of the options. It contains a range of toolset and custom scripts to make the process easy."}),"\n",(0,i.jsx)(n.li,{children:'I have used before it transitioned to a "Hive" branding. I can only imagine it being more robust in the newer versions.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"mGear"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"I have little experience on this toolset."}),"\n",(0,i.jsxs)(n.li,{children:["The makers hosts a ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Ooh3rqjwU6g&list=PL9LaIDCCDjfhZa-a_rT74cFDAk2R0Sf4S&ab_channel=mGear%3ARigging%26AnimationFramework",children:"rigging podcast"})," that gives you insight on production environment."]}),"\n",(0,i.jsx)(n.li,{children:"It's open source and has the most developer community than the other options."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Advance Skeleton"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Probaly, the oldest rigging toolset. Still mostly built in MEL."}),"\n",(0,i.jsx)(n.li,{children:"The one I used the most mainly because I am already familiar with the features that it presents and the problems I can encounter."}),"\n",(0,i.jsx)(n.li,{children:"somes times scapula is not being weighted.  (whyyyy?)"}),"\n",(0,i.jsxs)(n.li,{children:["Works with assymetrical but not as quite as robust.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For example, if you have separate left and right joints under the Fit Skeleton, the slider joints does not work as expected on the left side. It twists as if its a right side"}),"\n",(0,i.jsx)(n.li,{children:"Workflow is have it symmetrical then before binding, adjust the controls (extra group null of each control) adjust that to fit the assymetry and bind it ."}),"\n",(0,i.jsx)(n.li,{children:"have that extra more slider diay. haha"}),"\n",(0,i.jsx)(n.li,{children:"skincage doesn't work on recreation."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"non-symmetrical",children:"non symmetrical"}),"\n",(0,i.jsx)(n.h3,{id:"extra-nodes-in-advance-skeleton",children:"extra nodes in advance skeleton"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);