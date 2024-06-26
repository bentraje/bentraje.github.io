"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8371],{9739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(4848),a=t(8453);const r={},s="API 2.0",o={id:"cinema4d/programming/api2.0",title:"API 2.0",description:"General",source:"@site/docs/cinema4d/programming/api2.0.md",sourceDirName:"cinema4d/programming",slug:"/cinema4d/programming/api2.0",permalink:"/docs/cinema4d/programming/api2.0",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cinema4d/programming/api2.0.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"animation",permalink:"/docs/cinema4d/programming/animation"},next:{title:"Geometry",permalink:"/docs/cinema4d/programming/geo"}},c={},l=[{value:"General",id:"general",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"api-20",children:"API 2.0"}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"No one is actually calling this as API 2.0. lol. LOL Maya calls it this way and its way easier to differentiate the old and newer API."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Maxon. 2.0. Classic. 1.0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"import maxon # API 2.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"import c4d # API 1.0"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['MAXON API does not use any more integer value (e.g. Ocube to describe the ID corresponding to a cube) to represent things instead they use reverse domain approach (e.g. "net.maxon.animation.autoweight.base.jointcount" represent the joint count parameter). These reverse domains are strings but the type to represent them is ',(0,i.jsx)(n.code,{children:"maxon.Id"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Then come the DataDictionarry part, this is almost similar to a BaseContainer, except that it acts like a Python dict where a key can be anything, and the value can be any maxon.Data."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When calling ",(0,i.jsx)(n.code,{children:"SetDefaultValue"})," it is important to pass a maxon data as the current Python system is not able to automatically guess the expected result."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Get the Node Type"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'node.GetValue("effectivename")'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"get shader by name"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"brute force mayybe?"}),"\n",(0,i.jsx)(n.li,{children:"get all nodes and get their name"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);