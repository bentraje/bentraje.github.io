"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3940],{2073:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>_,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var i=e(4848),a=e(8453);const r={},o=void 0,c={id:"maya/programming/example/rigging/create_fk_ik_chain_switch",title:"create_fk_ik_chain_switch",description:"Already made something like this years ago for my mock auto rigging.",source:"@site/docs/maya/programming/example/rigging/create_fk_ik_chain_switch.md",sourceDirName:"maya/programming/example/rigging",slug:"/maya/programming/example/rigging/create_fk_ik_chain_switch",permalink:"/docs/maya/programming/example/rigging/create_fk_ik_chain_switch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/maya/programming/example/rigging/create_fk_ik_chain_switch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Copy Joint Orientation",permalink:"/docs/maya/programming/example/rigging/copy_joint_orientation_to_other"},next:{title:"Space Switch",permalink:"/docs/maya/programming/example/rigging/create_space_switch"}},_={},m=[];function s(n){const t={code:"code",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Already made something like this years ago for my mock auto rigging.\nMaking this one again for a manual rigging tasks on custom game model"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import maya.cmds as cmds\nimport pymel.core as pm\n\ndef create_joint_chain():\n    # Create the main joint chain\n    joints = []\n    joint_names = ["shoulder_jnt", "elbow_jnt", "hand_jnt"]\n    positions = [(0, 10, 0), (1, 5, 0), (0, 0, 0)]\n\n    for name, pos in zip(joint_names, positions):\n        jnt = pm.joint(name=name, position=pos)\n        joints.append(jnt)\n\n    pm.select(clear=True)\n    return joints\n\ndef duplicate_joint_chain(joint_chain, prefix):\n    \n    new_joint_chain = pm.duplicate(joint_chain)\n\n    for joint in new_joint_chain:\n        new_name = prefix + joint.nodeName().split("1")[0]\n        pm.rename(joint, new_name)\n\n    return new_joint_chain\n\ndef setup_ik_fk_switch(main_chain, fk_chain, ik_chain):\n    # Create IK Handle for the IK chain\n    ik_handle, effector = pm.ikHandle(startJoint=ik_chain[0], endEffector=ik_chain[-1], solver="ikRPsolver", name="arm_ikHandle")\n    effector.rename(ik_chain[-1] + "_eff")\n    \n    # Create a control for the IK handle\n    ik_control = pm.circle(name="ik_ctrl", normal=[0, 1, 0])[0]\n    pm.delete(pm.parentConstraint(ik_chain[-1], ik_control))\n    pm.parent(ik_handle, ik_control)\n    \n    # Create FK controls\n    fk_controls = []\n    for fk_jnt in fk_chain:\n        fk_ctrl = pm.circle(name=fk_jnt.name().replace("_jnt", "_ctrl"), normal=[0, 1, 0])[0]\n        pm.delete(pm.parentConstraint(fk_jnt, fk_ctrl))\n        pm.parentConstraint(fk_ctrl, fk_jnt, maintainOffset=True)\n        fk_controls.append(fk_ctrl)\n    \n    pm.parent(fk_controls[2], fk_controls[1])\n    pm.parent(fk_controls[1], fk_controls[0])\n\n    # Create IK/FK switch attribute\n    switch_ctrl = pm.circle(name="ik_fk_switch_ctrl", normal=[0, 1, 0])[0]\n    switch_ctrl.addAttr("IK_FK_Switch", attributeType="float", minValue=0, maxValue=1, defaultValue=0, keyable=True)\n    \n    # Constrain the main joints to the FK and IK joints\n    for main_jnt, fk_jnt, ik_jnt in zip(main_chain, fk_chain, ik_chain):\n        orient_constr = pm.orientConstraint(fk_jnt, ik_jnt, main_jnt)\n        pm.connectAttr(switch_ctrl.IK_FK_Switch, orient_constr.attr(ik_jnt.nodeName() + "W1"))\n        rev_node = pm.createNode("reverse", name=main_jnt.nodeName() + "_ikFkRev")\n        pm.connectAttr(switch_ctrl.IK_FK_Switch, rev_node + ".inputX")\n        pm.connectAttr(rev_node + ".outputX", orient_constr.attr(fk_jnt.nodeName() + "W0"))\n    \n\n\n    \n    # # Organize in groups\n    # pm.group(main_chain[0], name="main_joints_grp")\n    # pm.group(fk_controls, name="fk_controls_grp")\n    # pm.group(ik_control, ik_chain[0], name="ik_controls_grp")\n    # pm.group(switch_ctrl, name="ik_fk_switch_grp")\n\nif __name__ == "__main__":\n    main_joints = create_joint_chain()\n    fk_joints = duplicate_joint_chain(main_joints, "FK_")\n    #print (fk_joints[0].name())\n    ik_joints = duplicate_joint_chain(main_joints, "IK_")\n    #print (ik_joints[0].name())\n    setup_ik_fk_switch(main_joints, fk_joints, ik_joints)\n\n'})})]})}function p(n={}){const{wrapper:t}={...(0,a.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(s,{...n})}):s(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>c});var i=e(6540);const a={},r=i.createContext(a);function o(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);