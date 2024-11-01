"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6203],{170:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=i(4848),s=i(8453);const l={},r="Turbulence FD",o={id:"cinema4d/fx/turbulencefd (LAPTOP-ECKQA8BC's conflicted copy 2024-09-20)",title:"Turbulence FD",description:"General",source:"@site/docs/cinema4d/fx/turbulencefd (LAPTOP-ECKQA8BC's conflicted copy 2024-09-20).md",sourceDirName:"cinema4d/fx",slug:"/cinema4d/fx/turbulencefd (LAPTOP-ECKQA8BC's conflicted copy 2024-09-20)",permalink:"/docs/cinema4d/fx/turbulencefd (LAPTOP-ECKQA8BC's conflicted copy 2024-09-20)",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cinema4d/fx/turbulencefd (LAPTOP-ECKQA8BC's conflicted copy 2024-09-20).md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Simulation",permalink:"/docs/cinema4d/fx/simulation"},next:{title:"Turbulence FD",permalink:"/docs/cinema4d/fx/turbulencefd"}},c={},a=[];function d(e){const n={h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"turbulence-fd",children:"Turbulence FD"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"General"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A third party plug-in. No definitive update since 2021. Considered to be deprecated with the introduction of native Pyro inside Cinema4D."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Basic Workflow"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add the Turbulence Container."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add an TFD Emitter tag to an Object."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the Tag>Channel>Temperature to at at least 1."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"All kinds of particles can be advected by TFD and follow the physical rules of the simulation."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You can offset cache of TFD to make two different flames but still in the same cache (i.e. saving file). Rendering>General>Frame Offset"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Problem: On Dry Ice, the emission is somehow trapped in the collider."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Advection"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To advect particles, it is necessary to Cache the velocity of the TFD simulation."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To advect, there is no necessary voodo. Just have the emitter on top of the TFD simulation (per viewport) and have the Simulation>Velocity>Particle Velocity Scale to 100%"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Except for the thinking particles. It requires additional voodoo."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fuel mask channel."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Thick smoke, have the opacity set up to the left."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Multiple Scattering is needed for the fire to light the smoke."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get the atmosphere pass for the compositing of the fire and smoke. \xa0"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Your Collision-Object doesn\'t have an actual thickness. You extruded it without having "Create Caps" enabled in the extrude tool. So your object doesnt have an inner wall...'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Also you will have to make the object quite thick, because if the wall is too thin, it's thinner than the voxel size and will leak.."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Timing is for the slowmotion"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"That mountainous smoke shader mapping"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Animated noise is nice!"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Object can be collider and an emitter at the same time"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"TempDiffussion is just a blur. like having a kamekameha."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"negative pressure is like an attractor."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Faster render. Set the smoke shader to 0.01 instead of 0.0000"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Avoid having the same number of small and large size in the turbulence"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sub grid detail is nice to enhance the detail. Pseduo. But make sure to the velocity is cached."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Arnold Render: Add a Volume Material to the container. Then have the channel in the density set to smoke."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You have to increase both the regular sample and the volume sample to reduce noise."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Increasing the quality of the volume is to increase the step size from 10 to 1."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use a small or no distance between smallest size and largest size."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ignite TFD"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adjust Illumination Resolution: 100% to 50%"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Step size and shadow step size from 50% to 90%"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Illumination resolution 100% to illumination resolution 50%.\xa0"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In TFD, to have the density old to affect. Is have density only and no temperature. Temperature is the one that causes things to rise up."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Emitter Raidus and Velocity Weight matters a lot."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"TFD emitter and TFD container must have same radius/voxel values. If your emitter has more resolution than your object itself, you are creating a lot more stuff for your computer to think."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"collission size should be higher than voxel size so they don't penetrate. Collission size is manually determined using just a plain primitives."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Channel Settings"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Higher temperature means the smoke/fire rise faster."}),"\n",(0,t.jsx)(n.li,{children:"Density is for the smoke, dust or dry ice."}),"\n",(0,t.jsx)(n.li,{children:"Fuel only matters if it catches fire."}),"\n",(0,t.jsx)(n.li,{children:"Use the Burn Value to create a fire. (And also temperature)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Solver Settings"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The turbuluence. Higher values are okay say 350cm. And the smallest and largest size. Actually matters. Smallest size is somewhat similar to the voxe l size"}),"\n",(0,t.jsx)(n.li,{children:"Velocity in the simulation tab deals with the particles"}),"\n",(0,t.jsx)(n.li,{children:"Vortiity and turbulence normally applies uniformaly which is not not that good for instance small swirl will get the same effect with the large swirl better map it to a channel"}),"\n",(0,t.jsx)(n.li,{children:"Damp Velocity is like the Viscousity"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);