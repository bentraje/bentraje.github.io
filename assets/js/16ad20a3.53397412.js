"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7691],{232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>_,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var o=t(4848),c=t(8453);const r={},i="Copy Objects",d={id:"cinema4d/programming/specific/copy_objects",title:"Copy Objects",description:"There's really robust procedural workflow in C4D especially that involves manual animation.",source:"@site/docs/cinema4d/programming/specific/copy_objects.md",sourceDirName:"cinema4d/programming/specific",slug:"/cinema4d/programming/specific/copy_objects",permalink:"/docs/cinema4d/programming/specific/copy_objects",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cinema4d/programming/specific/copy_objects.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Base Container",permalink:"/docs/cinema4d/programming/specific/basecontainer"},next:{title:"get_all_objects_crawl_objects",permalink:"/docs/cinema4d/programming/specific/get_all_objects_crawl_objects"}},a={},s=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"copy-objects",children:"Copy Objects"}),"\n",(0,o.jsx)(n.p,{children:"There's really robust procedural workflow in C4D especially that involves manual animation.\nHere is the script that copies the object hierarchy. It's not procedural copy and paste.\nBut its a bit workaround."}),"\n",(0,o.jsx)(n.p,{children:"One work case is if you want to have multiple extrude animation but have different letters.\nJust animatme one extrude letter and copy and paste it to another different letters through the script rather than doing it manually."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"\nimport c4d\n\n\ndef main():\n    # obj = doc.GetActiveObject()\n    # obj_a = doc.SearchObject('B_extrude')\n    # obj_b = doc.SearchObject('U_extrude')\n    \n\n    sel_obj = doc.GetActiveObjects(2)\n    driver_obj = sel_obj[0]\n    driven_obj = sel_obj[1:]\n    \n\n    for driven in driven_obj:\n        dup_obj = driver_obj.GetClone()\n        x_pos = driven[c4d.ID_BASEOBJECT_ABS_POSITION,c4d.VECTOR_X]\n        y_pos = driven[c4d.ID_BASEOBJECT_ABS_POSITION,c4d.VECTOR_Y]\n        z_pos = driven[c4d.ID_BASEOBJECT_ABS_POSITION,c4d.VECTOR_Z]\n        name = driven.GetName()\n\n        dup_obj.SetName(name)\n        dup_obj[c4d.ID_BASEOBJECT_ABS_POSITION,c4d.VECTOR_X] = x_pos\n        dup_obj[c4d.ID_BASEOBJECT_ABS_POSITION,c4d.VECTOR_Y] = y_pos\n        dup_obj[c4d.ID_BASEOBJECT_ABS_POSITION,c4d.VECTOR_Z] = z_pos\n\n        dup_obj_children = dup_obj.GetChildren()\n\n        for child in dup_obj_children:\n            child.Remove()\n\n        driven_children = driven.GetChildren()\n\n        for child in driven_children:\n            child_dup = child.GetClone()\n            child_dup.InsertUnder(dup_obj)\n\n        doc.InsertObject(dup_obj)\n    c4d.EventAdd()\n\n\nif __name__ == '__main__':\n    main()\n\n\n"})})]})}function _(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var o=t(6540);const c={},r=o.createContext(c);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);