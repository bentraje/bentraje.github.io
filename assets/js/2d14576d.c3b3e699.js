"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6192],{0:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(4848),r=i(8453);const s={},l="Arnold",o={id:"rendering/arnold",title:"Arnold",description:"General",source:"@site/docs/rendering/arnold.md",sourceDirName:"rendering",slug:"/rendering/arnold",permalink:"/docs/rendering/arnold",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rendering/arnold.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rendering",permalink:"/docs/rendering/"},next:{title:"Corona",permalink:"/docs/rendering/corona (LAPTOP-ECKQA8BC's conflicted copy 2024-09-20)"}},a={},d=[{value:"General",id:"general",level:3},{value:"C4D",id:"c4d",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"arnold",children:"Arnold"}),"\n",(0,t.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Samples in the light is for the direct diffuse."}),"\n",(0,t.jsx)(n.li,{children:"Eliminate fireflies? Clamp values by 2."}),"\n",(0,t.jsx)(n.li,{children:"Tx files makes it at mid-mapped immediately. Mid-mapped is larger than the original file because it contains different resolution. Mid-mapped helps when the object is far away from the camera, it immediately downsizes the texture resolution."}),"\n",(0,t.jsx)(n.li,{children:"Normalize will break the control for the size, exposure and radius tool."}),"\n",(0,t.jsx)(n.li,{children:"To create a mesh light, change the arnold translator from poly mesh to mesh light under the shape node."}),"\n",(0,t.jsx)(n.li,{children:"Get used of higher samples. Light Samples 7. Diffuse 6."}),"\n",(0,t.jsx)(n.li,{children:"Mix Bump Map and the Normal Map. Be sure to plug in the Normal Map first then to the Bump2D"}),"\n",(0,t.jsx)(n.li,{children:"Creating background to appear. Separate. Create an arnold sky to illumate and in the sky slot, add an image with the visible diffuse and cash shadows ticked off."}),"\n",(0,t.jsx)(n.li,{children:"Create a Physical Sky work flow. Create a physical sky , it is only a background element. If you want to add some illuminatin, create an arnold sky and drag the physical sky maerial."}),"\n",(0,t.jsx)(n.li,{children:"Bake selected geometry yun pala."}),"\n",(0,t.jsx)(n.li,{children:"Interior. Use quad light and distant light"}),"\n",(0,t.jsx)(n.li,{children:"Use Light Decay. Far end. 5. smaller value."}),"\n",(0,t.jsx)(n.li,{children:"Diffuse depth rays, much more higher. Ray depth later nlng. pag hapit na mahuman."}),"\n",(0,t.jsx)(n.li,{children:"Bake the noise"}),"\n",(0,t.jsx)(n.li,{children:"Script to Add a Tag and name it according to the layer name. (Why not object ID nlng) nlng?"}),"\n",(0,t.jsx)(n.li,{children:"With the window it is too impossible. So composite nlng."}),"\n",(0,t.jsx)(n.li,{children:"In addition, spin the UV using the 1.2 or 1.3 method."}),"\n",(0,t.jsx)(n.li,{children:"Reverse Gamma. Oh yea. to increase contrast"}),"\n",(0,t.jsx)(n.li,{children:"Light filters are only for spot light?"}),"\n",(0,t.jsx)(n.li,{children:"There\u2019s two denoisers. Here\u2019s when to use them:"}),"\n",(0,t.jsx)(n.li,{children:"Use the OptiX Denoiser for fast (GPU-powered), slightly-lower quality denoising of IPR"}),"\n",(0,t.jsx)(n.li,{children:"Use the Arnold Denoiser (aka noice) for high-quality denoising of final frames and animation sequences"}),"\n",(0,t.jsxs)(n.li,{children:["There\u2019s two denoisers. Here\u2019s when to use them",":ss"]}),"\n",(0,t.jsxs)(n.li,{children:["UDIM Maya. Just make sure the tiling option is set -up. By default, it is off so it won\u2019t work right off the bat. And just add the token ",(0,t.jsx)(n.code,{children:"<UDIM>"})]}),"\n",(0,t.jsxs)(n.li,{children:["arnold skin","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.google.com/document/u/0/d/1R2UZi5G-DXiz2HcCrfAFLYJoer_JPDEoZmV7wy1tEz0/mobilebasic#h.vk2ws7h9x8h",children:"https://docs.google.com/document/u/0/d/1R2UZi5G-DXiz2HcCrfAFLYJoer_JPDEoZmV7wy1tEz0/mobilebasic#h.vk2ws7h9x8h"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"arnold. invert (it would be complement node)"}),"\n",(0,t.jsx)(n.li,{children:"bitmap node is different from image node?"}),"\n",(0,t.jsx)(n.li,{children:"utility node. flat obj. nice."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"c4d",children:"C4D"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Support C4D's new node system"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);