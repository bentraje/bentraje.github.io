"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7736],{7753:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(4848),r=t(8453);const a={},i=void 0,s={id:"maya/programming/example/convert_to_joint_to_null_obj",title:"convert_to_joint_to_null_obj",description:"I usually do RND rigging through joints. The controls are baked into the joints but when shipping the rig, I usually need to separate the joints and the controls.",source:"@site/docs/maya/programming/example/convert_to_joint_to_null_obj.md",sourceDirName:"maya/programming/example",slug:"/maya/programming/example/convert_to_joint_to_null_obj",permalink:"/docs/maya/programming/example/convert_to_joint_to_null_obj",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/maya/programming/example/convert_to_joint_to_null_obj.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Check Non Zero Transform",permalink:"/docs/maya/programming/example/check_non_zero_transform"},next:{title:"Create Joints from Every Cvs of Curve",permalink:"/docs/maya/programming/example/create_joints_from_every_cvs_of_curve"}},m={},p=[];function c(n){const e={code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"I usually do RND rigging through joints. The controls are baked into the joints but when shipping the rig, I usually need to separate the joints and the controls."}),"\n",(0,o.jsx)(e.p,{children:"And on of those process is using the joints pivot as the basis to the controls.\nThe script converts the joints to null objects. Does not take into account the hierarchy though."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import pymel.core as pm\n\ndef convert_joint_to_transform(joint_obj):\n    # Check if the provided joint exists and is of type 'joint'\n    # joint = pm.PyNode(joint_name)\n    # if not joint.exists() or not isinstance(joint, pm.nt.Joint):\n    #     raise ValueError(f\"Joint '{joint_name}' does not exist or is not of type 'joint'.\")\n    \n    #joint_obj = pm.PyNode(joint_name)\n\n    # Create a new transform node\n    #transform = pm.createNode('transform', name=joint_name.getName() + '_con')\n    circle_curve, _ = pm.circle(name=joint_obj.getName().split(\"_jnt\")[0] + '_con', normal=[1, 0, 0], radius=1)\n\n    transform = circle_curve\n    \n    # Get the transformation attributes from the joint and apply them to the new transform node\n    transform.setMatrix(joint_obj.getMatrix(worldSpace=True), worldSpace=True)\n    \n    # Find the shape node of the joint (if any)\n\n    new_joint = pm.instance(joint_obj)[0]\n    shapes = new_joint.getShapes()\n\n    if shapes:\n        for shape in shapes:\n            # Reparent the shape node to the new transform node\n            \n            # new_shape = pm.instance(shape)[0]\n            # joint.getShapes()\n            pm.parent(shape, transform, shape=True, relative=True)\n            # Rename the shape node\n            #new_shape.rename(joint.getName() + '_shape')\n    \n    # Optionally delete the original joint\n    pm.delete(new_joint)\n    \n    #print(f\"Joint '{joint_name}' converted to transform node '{transform}' with shape node '{shape}'.\")\n\n# Example usage\nobj_sel = pm.ls(sl=True)\n\nfor obj in obj_sel:\n    convert_joint_to_transform(obj)\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import pymel.core as pm\n\ndef convert_joint_to_transform(joint_obj):\n    # Check if the provided joint exists and is of type 'joint'\n    # joint = pm.PyNode(joint_name)\n    # if not joint.exists() or not isinstance(joint, pm.nt.Joint):\n    #     raise ValueError(f\"Joint '{joint_name}' does not exist or is not of type 'joint'.\")\n    \n    #joint_obj = pm.PyNode(joint_name)\n\n    # Create a new transform node\n    #transform = pm.createNode('transform', name=joint_name.getName() + '_con')\n    circle_curve, _ = pm.circle(name=joint_obj.getName().split(\"_jnt\")[0] + '_con', normal=[1, 0, 0], radius=1)\n\n    transform = circle_curve\n    \n    # Get the transformation attributes from the joint and apply them to the new transform node\n    transform.setMatrix(joint_obj.getMatrix(worldSpace=True), worldSpace=True)\n    \n    # Find the shape node of the joint (if any)\n\n    new_joint = pm.instance(joint_obj)[0]\n    shapes = new_joint.getShapes()\n\n    if shapes:\n        for shape in shapes:\n            # Reparent the shape node to the new transform node\n            \n            # new_shape = pm.instance(shape)[0]\n            # joint.getShapes()\n            pm.parent(shape, transform, shape=True, relative=True)\n            # Rename the shape node\n            #new_shape.rename(joint.getName() + '_shape')\n    \n    # Optionally delete the original joint\n    pm.delete(new_joint)\n    \n    #print(f\"Joint '{joint_name}' converted to transform node '{transform}' with shape node '{shape}'.\")\n\n# Example usage\nobj_sel = pm.ls(sl=True)\n\nfor obj in obj_sel:\n    convert_joint_to_transform(obj)\n\n"})})]})}function l(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var o=t(6540);const r={},a=o.createContext(r);function i(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);