"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1135],{5286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),r=t(8453);const o={},s="Retargeting",a={id:"houdini/kinefx/retargeting/index",title:"Retargeting",description:"General",source:"@site/docs/houdini/kinefx/retargeting/index.md",sourceDirName:"houdini/kinefx/retargeting",slug:"/houdini/kinefx/retargeting/",permalink:"/docs/houdini/kinefx/retargeting/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/houdini/kinefx/retargeting/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sticking Geometry",permalink:"/docs/houdini/kinefx/log/sticking_geometry_to_animated_objects"},next:{title:"Mocap Resources",permalink:"/docs/houdini/kinefx/retargeting/mocap_resources"}},l={},c=[{value:"Mocap Configuration Mapping",id:"mocap-configuration-mapping",level:2},{value:"Retargeting Scenarios",id:"retargeting-scenarios",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"retargeting",children:"Retargeting"}),"\n",(0,i.jsx)(n.h1,{id:"general",children:"General"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Motion clip something maybe."}),"\n",(0,i.jsxs)(n.li,{children:["FBX Character Import (Combination of FBX Skin Imporot + FBX Animation Import)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In the olden days, it would be Scene Character Import if you are using Houdini's native object level rigging toolset, which was already superseded by Kinefx Rigging Toolset (i.e. SOP level rigging)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"FBX Animation Import"}),"\n",(0,i.jsxs)(n.li,{children:["Rig Match Pose Node (Hit ",(0,i.jsx)(n.code,{children:"Enter"})," to enter to its interactive state)"]}),"\n",(0,i.jsx)(n.li,{children:"Do not translate or scale the skeleton joints you see in the Rig Match Pose state."}),"\n",(0,i.jsxs)(n.li,{children:["Map Points SOP (Hit ",(0,i.jsx)(n.code,{children:"Enter"})," again to see the node state )","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Physical Full Body IK solver, then that solver prefers a sparse mapping."}),"\n",(0,i.jsx)(n.li,{children:"FABRIK solver, then that solver prefers a dense mapping."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Fully Body IK SOP"}),"\n",(0,i.jsx)(n.li,{children:"FK Transfer. Might be better compared to Full Boody IK SOP when there is a need of direct translation of joints. Like fingers. There is no need for IK solver for that one."}),"\n",(0,i.jsx)(n.li,{children:"FBX Animation Improt > Motion Clip > Motion Clip Evaluate > Bone Deform"}),"\n",(0,i.jsx)(n.li,{children:"FBX Animation Import > Motion Clip > Motion Clip Blend >Motion Clip Evaluate>Motion Clip Cycle"}),"\n",(0,i.jsx)(n.li,{children:"FBX Animation Import > Extract Locomotion"}),"\n",(0,i.jsx)(n.li,{children:"Motion Clip Sequence>motion Clip Evaluate wher eyou want to blend from beginning to end"}),"\n",(0,i.jsx)(n.li,{children:"Workflow"}),"\n",(0,i.jsx)(n.li,{children:"ssss"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mocap-configuration-mapping",children:"Mocap Configuration Mapping"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"retargeting-scenarios",children:"Retargeting Scenarios"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Retarget With Same Skeleton"})}),"\n",(0,i.jsx)(n.p,{children:"This would be the best case scenario where your skeleton matches your mocap such as using mixamo characters with the mixamo animation."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Retarget With Same Skeleton",src:t(1923).A+"",width:"700",height:"723"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Retarget With Different Skeleton"})}),"\n",(0,i.jsx)(n.p,{children:"For the most part, you will have to deal with different skeleton and animation skeleton."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Retarget With Different Skeleton",src:t(7346).A+"",width:"642",height:"617"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Retarget With Different Skeleton"})}),"\n",(0,i.jsx)(n.p,{children:"To get a stable Full Body IK Behavior, keep the mapping to the bare minimum such as the wrist, shoulder, hips, ankle etc. For the fingers, it would be best just to use a simple FK transfer of the source and target skeleton."}),"\n",(0,i.jsx)(n.p,{children:"Note that there is two mapping attributes. One for the Full Body IK and the other is for FK Transfers"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Retarget With Different Skeleton + Using FK Fingers ",src:t(1104).A+"",width:"903",height:"958"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7346:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/houdini_kinefx_retarget_different_skeleton_base-8b3af318298b2efa34cf27e0f2bd6d5a.png"},1104:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/houdini_kinefx_retarget_different_skeleton_fk_transfer-82b8ae359fd794711abbb61c216a4eea.png"},1923:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/houdini_kinefx_retarget_same_skeleton_base-0a50ba2ef984536cfe825b326041fe24.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);