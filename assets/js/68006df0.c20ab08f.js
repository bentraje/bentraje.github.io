"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8629],{8730:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(4848),r=i(8453);const t={},l="Solaris",o={id:"houdini/solaris/index",title:"Solaris",description:"Lighting",source:"@site/docs/houdini/solaris/index.md",sourceDirName:"houdini/solaris",slug:"/houdini/solaris/",permalink:"/docs/houdini/solaris/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/houdini/solaris/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vellum and RBD Interaction",permalink:"/docs/houdini/rbd/sample/vellum_and_rbd_interaction"},next:{title:"Cliff Rocks Set Dressing",permalink:"/docs/houdini/solaris/sample/set_dressing"}},a={},d=[{value:"General",id:"general",level:2},{value:"General Workflow",id:"general-workflow",level:2},{value:"Limitation",id:"limitation",level:2},{value:"Shading Workflow",id:"shading-workflow",level:2},{value:"Some Nodes",id:"some-nodes",level:2},{value:"Shortcut",id:"shortcut",level:2},{value:"Geometry Variants",id:"geometry-variants",level:2},{value:"Material Variants",id:"material-variants",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"solaris",children:"Solaris"}),"\n",(0,s.jsx)(n.p,{children:"Lighting"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can't instance lights.  Just reference them.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the solaris instancer node."}),"\n",(0,s.jsx)(n.li,{children:"Then prune the light so it doesn't render"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"layout vs instancer\ncollection. selection of objects"}),"\n",(0,s.jsx)(n.p,{children:"VEX Based Shader vs Material X Nodes."}),"\n",(0,s.jsx)(n.p,{children:"subsurface somewhat override the normal map\nMaterial X.\nvolume rendering."}),"\n",(0,s.jsx)(n.p,{children:"Insertion Point\neditcontextoptions1"}),"\n",(0,s.jsx)(n.p,{children:"Woo hoo"}),"\n",(0,s.jsx)(n.p,{children:"distance_base LOPS"}),"\n",(0,s.jsx)(n.p,{children:"houdini compile block.\nxform vs transform lop"}),"\n",(0,s.jsxs)(n.p,{children:["Rigging USD Assets:\n",(0,s.jsx)(n.a,{href:"https://www.sidefx.com/forum/topic/91175/",children:"https://www.sidefx.com/forum/topic/91175/"})]}),"\n",(0,s.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This is the same as sops, where the geometry spreadsheet follows selection, the viewport follows the display flag."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Model in USD is not the same as Model in 3D. HAHAHA"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Connecting sopimport nodes appends their results, as opposed to sops which does chains of geometry modification, or connecting /obj nodes which does parenting operations."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In sops a primitive is a renderable thing, like a polygon, a curve, a volume. In USD a primitive means a thing in the Scene Graph Tree. So in that outliner style way of thinking, a folder is a primitive, a shape is a primitive, a transform is a primitive. Pretty much any element you see in the Scene Graph Tree is a primitive."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Primitives and attributes are the two primary namespace objects in USD"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Primitives are the primary container object in USD."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"if its just a group. use scope rather than xform"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you are going to use LOPs in the end for rendering, why not create geometry under SOP Create instead?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You could but there is some gotchas mainly its the update frequency."}),"\n",(0,s.jsx)(n.li,{children:"LOPS was designed to accommodate USD. And USD is for cached data. It cannot fully accommodate the dynamic creation of SOPs."}),"\n",(0,s.jsx)(n.li,{children:"So you might have to update LOPS viewport everynow and then."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Context Options Editor"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Load as reference vs Make Instanceable."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In other DCC, instanceable is what they by reference. You can't edit. Just a reference."}),"\n",(0,s.jsx)(n.li,{children:"In Solaris, when you make it as a reference. You can still edit it."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Note that the material flags have been disabled on the two individual shaders and only the Collect node has its material flag enabled since the Collect VOP is the only material that needs to be assigned to the rubbertoy."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Render Product LOP - Only required if rendering Redshift AOVs, defines a collection of AOVs."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Render Settings LOP - Required to render, controls the Redshift render settings."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"USD Render ROP - Required to render, sets which render delegate to use and initiates the render operation."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Animated Cache"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Currently to output an animated asset with component builder, try appending a Cache LOP after the Component Geometry."}),"\n",(0,s.jsx)(n.li,{children:'(Component Geometry LOP) Author Time Samples = "If SOP is Time Dependent"'}),"\n",(0,s.jsx)(n.li,{children:'(Cache LOP) Behavior = "Always Cache All Frames"'}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.sidefx.com/forum/topic/82811/",children:"https://www.sidefx.com/forum/topic/82811/"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'once geometry is in LOPs, it is referred to as a "prim" or primitive, not the same as a Houdini primitive'}),"\n"]}),"\n",(0,s.jsx)(n.li,{}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"if there is a leading slash in the path, it means the path is absolute and not relative."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"to make it relative. use the name lop"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"in the in from = /* and to = *"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"general-workflow",children:"General Workflow"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Reference node for assets, caches.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Basically for individual assets."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Sublayer for task files.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This means you have a separate sublayer for scene layout, for lighting etc."}),"\n",(0,s.jsx)(n.li,{children:"Basically, like grouping your scenes into chunks for managing."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Layer Break. Anything above this node doesn't get saved out.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Took me awhile to figure this out. Supposed you already have a scene layout layer and you are working on lighting it. If you just"}),"\n",(0,s.jsx)(n.li,{children:"saved it to a new USD, this will mean you will have BOTH the data for the scene layout and lighting. It's redundant."}),"\n",(0,s.jsx)(n.li,{children:"so to save only the lighting data, add a layer break on top, so the scene layout will not be saved. pretty handy."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Payload is just an optimization to only load specific parts of a USD data. You can also just load a bounding box representation of an asset for navigation.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Payload is a special type of reference for optimization."}),"\n",(0,s.jsx)(n.li,{children:"Payload has a weaker opinion."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["however, someone on the redshift forum kindly advised me to replace $F4 to ",(0,s.jsx)(n.code,{children:"<F4>"}),", which is USD way of doing things i am guessing."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"limitation",children:"Limitation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"USD doesn't have a component selection such as polyhgon edge or point selection. Alternative? Subset groups"}),"\n",(0,s.jsx)(n.li,{children:"You can't drag and drop directly on the scene graph like what you can on outliner on other DCC. You need stage manager node."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"shading-workflow",children:"Shading Workflow"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The standard \u201cRS Material\u201d (A) output VOP is not compatible with Solaris but a \u201cRS USD Material\u201d (B) output VOP was added that automatically works in both Houdini and Solaris."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"some-nodes",children:"Some Nodes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SOP Import (To import from SOP)"}),"\n",(0,s.jsx)(n.li,{children:"SOP Create"}),"\n",(0,s.jsx)(n.li,{children:"Configure Primitive"}),"\n",(0,s.jsx)(n.li,{children:"Prune"}),"\n",(0,s.jsx)(n.li,{children:"Variant Block"}),"\n",(0,s.jsx)(n.li,{children:"Set Variant"}),"\n",(0,s.jsx)(n.li,{children:"Transform"}),"\n",(0,s.jsx)(n.li,{children:"Simulation Proxy"}),"\n",(0,s.jsx)(n.li,{children:"Reference (To import existing USD or if you want to use the inputs. SOP Create + Material Library)"}),"\n",(0,s.jsxs)(n.li,{children:["Stage Manager (Manipulate the path llike drag and dropping)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Like a crude file browser."}),"\n",(0,s.jsx)(n.li,{children:"Never plug on top of this node as it flattes everything out (i.e when an upstream asset gets updated, it does not get updated downstream)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Material Library"}),"\n",(0,s.jsx)(n.li,{children:"Assign Material"}),"\n",(0,s.jsx)(n.li,{children:"Component Builder (Introduced in 19.0. One of the handy node network to create your USD assets)"}),"\n",(0,s.jsx)(n.li,{children:"Scene Import"}),"\n",(0,s.jsx)(n.li,{children:"Merge"}),"\n",(0,s.jsx)(n.li,{children:"Insertion Point"}),"\n",(0,s.jsx)(n.li,{children:"Graft Stages"}),"\n",(0,s.jsx)(n.li,{children:"Light Mixer"}),"\n",(0,s.jsx)(n.li,{children:"SOP Modify"}),"\n",(0,s.jsx)(n.li,{children:"Material Linker"}),"\n",(0,s.jsx)(n.li,{children:"Configure Layer"}),"\n",(0,s.jsx)(n.li,{children:"Duplicate"}),"\n",(0,s.jsx)(n.li,{children:"Use a Render Geometry Settings LOP to add per-object Redshift options to geometry in the scene."}),"\n",(0,s.jsxs)(n.li,{children:["Use a Render Settings LOP and a USD Render ROP to export proxies from Solaris.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A Camera must be included with the proxy or the proxy export will fail."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Transform vs Xform (Former is actually moving around. Xform is just a representation in the graph)"}),"\n",(0,s.jsx)(n.li,{children:"Layer Break (Layer breaks are very important to understand. They give you control over what is written to layer file on disk.)"}),"\n",(0,s.jsxs)(n.li,{children:["USD prim var reader.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cd becomes display color"}),"\n",(0,s.jsx)(n.li,{children:"UV becomes ST"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Render Geometry Settings"}),"\n",(0,s.jsx)(n.li,{children:"Asset Reference (19.0. This node combines the most common features of the Reference, Xform, and Set Variant LOPs into a convenient tool.)"}),"\n",(0,s.jsx)(n.li,{children:"Restructure Scene Graph"}),"\n",(0,s.jsx)(n.li,{children:"Modify Path"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"USD Render ROP vs USD Rop"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"shortcut",children:"Shortcut"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Shift + R"}),". Karma to OpenGL"]}),"\n",(0,s.jsx)(n.li,{}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"geometry-variants",children:"Geometry Variants"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Component Geometry Variants."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"material-variants",children:"Material Variants"})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);