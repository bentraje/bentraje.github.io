"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8440],{7180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=n(4848),s=n(8453);const r={},a="Octane",o={id:"rendering/octane",title:"Octane",description:"General",source:"@site/docs/rendering/octane.md",sourceDirName:"rendering",slug:"/rendering/octane",permalink:"/docs/rendering/octane",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rendering/octane.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Karma",permalink:"/docs/rendering/karma"},next:{title:"Redshift",permalink:"/docs/rendering/redshift"}},l={},h=[{value:"General",id:"general",level:3}];function c(e){const t={a:"a",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"octane",children:"Octane"}),"\n",(0,i.jsx)(t.h3,{id:"general",children:"General"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"As of 2022, Does not support C4D's new node system"}),"\n",(0,i.jsxs)(t.li,{children:["Manual ",(0,i.jsx)(t.a,{href:"https://docs.otoy.com/cinema4d/OctaneRenderforCinema4D.html",children:"https://docs.otoy.com/cinema4d/OctaneRenderforCinema4D.html"})]}),"\n",(0,i.jsx)(t.li,{children:"the denoiser in octane is in the tag of the camera. bloom in the camera too."}),"\n",(0,i.jsx)(t.li,{children:"path tracing v direct lighting"}),"\n",(0,i.jsx)(t.li,{children:"adaptive sampling. in path tracing. probably the better one."}),"\n",(0,i.jsx)(t.li,{children:"octane: baking lights into one hdri map."}),"\n",(0,i.jsx)(t.li,{children:"fake shadows octane for SSS ?"}),"\n",(0,i.jsx)(t.li,{children:"SSS needs to be in path tracing in octane for it to work."}),"\n",(0,i.jsx)(t.li,{children:"gi clamp can remove the fireflies."}),"\n",(0,i.jsx)(t.li,{children:"octane render should be below the hair render"}),"\n",(0,i.jsx)(t.li,{children:"Use the file save path from the Render AOV Group tab in Octane Render Settings. Do NOT use the C4D Save options in Render Settings. Doing so adds an additional Response Curve to the image which will make it appear brighter. That is likely what you are seeing in your screenshot."}),"\n",(0,i.jsx)(t.li,{children:"Albedo. This channel should be set to have no contribution (color of H:0, S:0, V:0, and float=0) when making a Transmissive (glass/sss), Emissive (light-emitting), or RGB IOR type metal."}),"\n",(0,i.jsx)(t.li,{children:"The IOR channel (dielectric setting) affects how glossy/reflective the Specular channel is. Most real world materials don\u2019t have an IOR of more than 2 or 3, so if you need it to be more reflective, consider using the Metallic channel instead."}),"\n",(0,i.jsx)(t.li,{children:"By default, the Universal Material is set to the Artistic type IOR, which means the Albedo channel is used to control the color."}),"\n",(0,i.jsx)(t.li,{children:"The Metallic channel also has an Edge Tint property where you can set a color value, and it does exactly what it says - tints the edges of the object relative to the camera. This only works if you\u2019re using the Artistic IOR method in the IOR channel."}),"\n",(0,i.jsx)(t.li,{children:"Transmission. Diffuse (default in Octane 2022) is for semi transparent solids. When combined with a Scattering or Random Walk medium, it\u2019s great for skin, plastics and other non-glossy semi transparent materials."}),"\n",(0,i.jsx)(t.li,{children:"Important: The Albedo and Metallic channels OVERRIDE the Transmission channel. When you start building a transmissive material, set the values of those channels to 0,0,0, float=0."}),"\n",(0,i.jsx)(t.li,{children:"Beckmann is great for super reflective surfaces (very little roughness)."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"GGX is the go-to when roughness and anisotropy is involved. The new energy-preserving variant can save some render time, so it\u2019s always a good idea to pick that if you\u2019re using GGX.\nA little roughness goes a long way. The visual difference between low float values is much greater than higher float values, so always start really low (even 0.01 or 0.001) and work up incrementally. This also changes pretty dramatically when using GGX vs Octane\u2019s default BRDF."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Medium,  In order for this to work, the material needs to be Transmissive. Real world scale of your geometry is also very important for getting accurate results with mediums."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Absorption is most apparent when used with Specular type Transmission. It will work with Diffuse Transmission, but the density usually will have to be relatively low, and the lighting will have to be just right to see the effects well."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Blender Octane UDIM (",(0,i.jsx)(t.a,{href:"https://render.otoy.com/forum/viewtopic.php?f=32&t=70337&p=401162&hilit=UDIM+C4d#p401162",children:"https://render.otoy.com/forum/viewtopic.php?f=32&t=70337&p=401162&hilit=UDIM+C4d#p401162"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"you can search for them either by hitting Shift-C or spacebar while you\u2019re in the Node Editor."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Octane W Coordinate Node: This node allows for color shift along the hair shaft for a more natural look.\nOctane Object tag: Applied to the Cinema 4D Hair object, the Octane Object tag will enable Hair shading for Octane and is used to specify hair thickness and motion blur activation."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"For motion blur, set the Octane Object tag motion blur setting to Transform/Vertex. Typically, you should not place the Hair object within a hierarchy used to transform the object receiving the hair."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Nice collection!\nOne note here about octane: if you use vertex displacement you should turn autobump on and subdivide via the material you do not need the tag. And if an object has uvs, use texture displacement as it is way lighter and not dependant on poly count. Cheers!\nThis one is heavy, subdivides the objects literally. Texture displacement is the one you should use 99% of the times as it can be used even on a single polygon."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"ss"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Octane is weird. No Surface, Displace Output node like the others. It ends with the BSDF. What happens if there are several BSDF."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Most of the time you\u2019ll be using Path Tracing (or PT) which is the best all-arounder, Direct Lighting (DL) is the fastest, but least realistic. PMC is the slowest and you\u2019d only want to use it in very particular circumstances, particularly in scenes where Pathtracing isn\u2019t producing the caustics you want and you\u2019re willing to wait for better results. You can also view various info channels which are good for visualization and troubleshooting, but usually not for rendering."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Setup: Switch to Pathtracing. Start with a good custom preset. Low samples (128 or 256), high depth bounces (16/16/8), low GI clamp (16), no fancy post-production stuff like denoiser yet, everything else at default."}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Octane HDRI. texture need to put it under the image texture node. not directly to the hdri tag."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);