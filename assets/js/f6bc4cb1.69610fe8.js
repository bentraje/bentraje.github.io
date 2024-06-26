"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5098],{5527:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=i(4848),s=i(8453);const t={},l="Crowds",o={id:"houdini/crowds/index",title:"Crowds",description:"General",source:"@site/docs/houdini/crowds/index.md",sourceDirName:"houdini/crowds",slug:"/houdini/crowds/",permalink:"/docs/houdini/crowds/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/houdini/crowds/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composting (COPS)",permalink:"/docs/houdini/compositing/"},next:{title:"Case Study",permalink:"/docs/houdini/crowds/case_study/"}},d={},c=[{value:"General",id:"general",level:3},{value:"Workflow",id:"workflow",level:3}];function a(n){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"crowds",children:"Crowds"}),"\n",(0,r.jsx)(e.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Foot locking set-up should be done in the agent prep node. For the terrain adaptation to work. Also when you want to isolate some ragdoll to only some parts"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Crowd agents are packed primitivs"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Crowd source have an initial velocity. that's why they are moving even at rest state."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Clip on SOP level. State on DOP level."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Terrain adaption can be within the Crowd Solver or through the Adapt To Terrain"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Agent Clip"})," can contain several motion fbx files"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"Agent > Agent Clip > Agent Layer > Agent Prep > Collission Layer > Agent Cache > Configure Joints > Crowd Source"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Agent Prep"})," is for the foot plant set-up"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Houdini includes several useful POP forces created to work with crowds. Nodes of this types have names starting with \u201cPOP Steer\u201d."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Crowd Source Node: Randomzie Initial Velocity is better than Ranomize Initial Heading"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Agent Clip Properties: To make in place animation."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Change State"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Don't ever use initial velocity. Just use the locomation to translate the character."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Grouping of States doesn't seem to work."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Gait Speed Paramter is only useful if you are not using locomotion"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"Agent Transform Group"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Agent Edit"})," helps on previewing the current agent clip and agent layer."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Agent Clip Properties"})," edits general parameters of the clip like loop range."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"Agent Clip Transitions"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Adding Metadata"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"building an automatic ball control."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"inherent in agent terrain."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Need to Set the Start and End of the Clip. Otherwise it won't loop. So much for locomotion!"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"intrinsic: pointinstance transfrom set to 1 by default on agent primitives,."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"rag-doll",children:"Rag Doll"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"can add pop forces in the ragdoll solver. ragdoll also has motor options to have art direct rag doll"}),"\n",(0,r.jsx)(e.li,{}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Terrain"}),"\r\n",(0,r.jsx)(e.strong,{children:"Obstacle"})]}),"\n",(0,r.jsx)(e.h3,{id:"workflow",children:"Workflow"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Building Character"}),"\n",(0,r.jsx)(e.li,{children:"Creating Crowd"}),"\n",(0,r.jsx)(e.li,{children:"Set Your Blendshapes"}),"\n",(0,r.jsx)(e.li,{children:"Setting Transitions"}),"\n",(0,r.jsx)(e.li,{children:"Corrective Shapes"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"using crowd system to blend the agent mocap transition."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'// setting i@trigger to 1 will enable\r\n// setting i@trigger to 0 will disable\r\ni@trigger = -1;\r\n\r\nstring handle_path = "op:/obj/geo1/dopnet1:crowdobject1/Geometry";\r\nfloat clip_len = agentcliplength(handle_path, @id, "standing_up_01");\r\nif ((f[]@cliptimes[0]/clip_len) > 0.65) i@trigger = 1;\r\n\n'})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var r=i(6540);const s={},t=r.createContext(s);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);