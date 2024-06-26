"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6898],{4736:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(4848),s=i(8453);const r={},o="Color Grading",l={id:"post-production/davinci_resolve/color_grading",title:"Color Grading",description:"General",source:"@site/docs/post-production/davinci_resolve/color_grading.md",sourceDirName:"post-production/davinci_resolve",slug:"/post-production/davinci_resolve/color_grading",permalink:"/docs/post-production/davinci_resolve/color_grading",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/post-production/davinci_resolve/color_grading.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Davinci Resolve",permalink:"/docs/post-production/davinci_resolve/"},next:{title:"Editing",permalink:"/docs/post-production/davinci_resolve/editing"}},a={},c=[];function d(e){const n={a:"a",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"color-grading",children:"Color Grading"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"General"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Selective and balance grade. You don't want your film to be like an Instagram filter"}),"\n",(0,t.jsxs)(n.li,{children:["Contrast slider behaves different between ",(0,t.jsx)(n.em,{children:"primaries"})," and ",(0,t.jsx)(n.em,{children:"HDR"})," tools."]}),"\n",(0,t.jsx)(n.li,{children:"HDR doesn't affect saturation as much as primaries."}),"\n",(0,t.jsx)(n.li,{children:"Color space aware tools: HDR, Curves,"}),"\n",(0,t.jsx)(n.li,{children:"Saturating the dark parts and desaturating the high parts."}),"\n",(0,t.jsx)(n.li,{children:"You can use HDR tools even though your file is not HDR"}),"\n",(0,t.jsx)(n.li,{children:"Color Boost is like a vibrance operation. It only increases the lesser color saturation."}),"\n",(0,t.jsx)(n.li,{children:"so pwede diay i separate ang LUT into color and constrast/luma. nice!"}),"\n",(0,t.jsx)(n.li,{children:"Color (Overlay) Black and White. Instant Bleach Bypass."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Shortcuts"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Shift+H. Toggle Highlight"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Print Film Emulation LUTS"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Of all the search hits for LUTS, PFE is probably has the most results."}),"\n",(0,t.jsx)(n.li,{children:"Like all other LUTS, PFEs is finicky about the input footage. You will probably perform Color Space Transforms (CST)."}),"\n",(0,t.jsxs)(n.li,{children:["The default Kodak 2383 PFE in resolve expects a Cineon Film Log. You can verify it by opening the actual LUT in a text file. The header comment sections requires a Cineon Film Log.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"That said, with my EM5 Mark II JPEG files, I actually have better result for ARRI Log C."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Midtones"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Midtones detail"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Saturation"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"increase contrast decrease color boost haha.  what is happening"}),"\n",(0,t.jsx)(n.li,{children:"change color space. to HSV. then disable Chanell 1 and 2"}),"\n",(0,t.jsx)(n.li,{children:"increasing constrast also increases saturation."}),"\n",(0,t.jsx)(n.li,{children:"over saturation then desaturate the sky."}),"\n",(0,t.jsx)(n.li,{children:"in real life, hue is applied more to the highlights than to shadows and midtones"}),"\n",(0,t.jsx)(n.li,{children:"vector scope helps on the skin tone line"}),"\n",(0,t.jsx)(n.li,{children:"half tone should be closer the average light value than the average black value"}),"\n",(0,t.jsx)(n.li,{children:"brightness perceptive based from the viewer"}),"\n",(0,t.jsx)(n.li,{children:"luminosity inherent"}),"\n",(0,t.jsx)(n.li,{children:"saturation on multiplicative function"}),"\n",(0,t.jsx)(n.li,{children:"colorboost is additive function\\"}),"\n",(0,t.jsx)(n.li,{children:"low key vs high grading"}),"\n",(0,t.jsx)(n.li,{children:"when the image goes dark, our eyes turn to the black and white rather than color values. so desaturate."}),"\n",(0,t.jsx)(n.li,{children:"hard to only create contrast. need to also increase saturation."}),"\n",(0,t.jsx)(n.li,{children:"The perils of the color wheel. The moment you deduct blue, you automatically add yellow. check vector scope."}),"\n",(0,t.jsx)(n.li,{children:"Its hard to evaluate contrast without saturation"}),"\n",(0,t.jsx)(n.li,{children:"Contrast is just the difference between two things, I think a better way to think about this is that lowering RGB values increases saturation and raising RGB values decreases saturation. The saturation increase you\u2019re seeing is from the lowering of RGB values.\nThe same effect can be witnessed when adjusting exposure in camera, under exposed images have richer color and over exposed images are washed out."}),"\n",(0,t.jsx)(n.li,{children:"saturation trick of changing color space to HSV and disabbling other channels."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Misc"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"changing color of the dress throughout time to significy a plot narrative"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/coloraggio",children:"https://github.com/coloraggio"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Face"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"reduce clarity to add blur haha nice. for face finishing."}),"\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Split Toning"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);