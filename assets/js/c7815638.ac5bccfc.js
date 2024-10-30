"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3940],{2073:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var _=e(4848),i=e(8453);const o={},a=void 0,r={id:"maya/programming/example/rigging/create_fk_ik_chain_switch",title:"create_fk_ik_chain_switch",description:"Already made something like this years ago for my mock auto rigging.",source:"@site/docs/maya/programming/example/rigging/create_fk_ik_chain_switch.md",sourceDirName:"maya/programming/example/rigging",slug:"/maya/programming/example/rigging/create_fk_ik_chain_switch",permalink:"/docs/maya/programming/example/rigging/create_fk_ik_chain_switch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/maya/programming/example/rigging/create_fk_ik_chain_switch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Copy Joint Orientation",permalink:"/docs/maya/programming/example/rigging/copy_joint_orientation_to_other"},next:{title:"Space Switch",permalink:"/docs/maya/programming/example/rigging/create_space_switch"}},c={},s=[];function p(n){const t={code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(t.p,{children:"Already made something like this years ago for my mock auto rigging.\nMaking this one again for a manual rigging tasks on custom game model"}),"\n",(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:"language-python",children:"import maya.cmds as cmds\nimport pymel.core as pm\n\ndef create_joint_chain():\n    # Create the main joint chain\n    joints = []\n    joint_names = [\"shoulder_jnt\", \"elbow_jnt\", \"hand_jnt\"]\n    positions = [(0, 10, 0), (1, 5, 0), (0, 0, 0)]\n\n    for name, pos in zip(joint_names, positions):\n        jnt = pm.joint(name=name, position=pos)\n        joints.append(jnt)\n\n    pm.select(clear=True)\n    return joints\n\ndef duplicate_joint_chain(joint_chain, prefix):\n    \n    new_joint_chain = pm.duplicate(joint_chain)\n\n    for joint in new_joint_chain:\n        new_name = prefix + joint.nodeName().split(\"1\")[0]\n        pm.rename(joint, new_name)\n\n    return new_joint_chain\n\ndef setup_ik_fk_switch(main_chain, fk_chain, ik_chain, ik_con, ik_pole_con, fk_con_list, switch_con):\n\n    # IK SETUP\n    ik_handle, effector = pm.ikHandle(startJoint=ik_chain[0], endEffector=ik_chain[-1], solver=\"ikRPsolver\", name=\"arm_ikHandle\")\n    effector.rename(ik_chain[-1] + \"_eff\")\n    pm.poleVectorConstraint(ik_pole_con, ik_handle)\n    pm.orientConstraint(ik_con,ik_chain[-1], maintainOffset=True)\n    \n\n    ik_obj = None\n    if not ik_con:\n        ik_obj = pm.circle(name=\"ik_ctrl\", normal=[0, 1, 0])[0]\n        pm.delete(pm.parentConstraint(ik_chain[-1], ik_obj))\n    else:\n        ik_obj = ik_con\n\n    pm.parent(ik_handle, ik_con)\n\n\n    # FK SETUP\n    fk_obj_list = None\n    if not fk_con_list:\n        fk_controls = []\n        for fk_jnt in fk_chain:\n            fk_ctrl = pm.circle(name=fk_jnt.name().replace(\"_jnt\", \"_ctrl\"), normal=[0, 1, 0])[0]\n            pm.delete(pm.parentConstraint(fk_jnt, fk_ctrl))\n            pm.parentConstraint(fk_ctrl, fk_jnt, maintainOffset=True)\n            fk_controls.append(fk_ctrl)\n        \n        pm.parent(fk_controls[2], fk_controls[1])\n        pm.parent(fk_controls[1], fk_controls[0])\n        fk_obj_list = fk_controls\n\n    else:\n        fk_obj_list = fk_con_list\n\n    for fk_jnt, fk_con in zip(fk_chain, fk_con_list):\n        pm.parentConstraint(fk_con, fk_jnt, maintainOffset=True)\n\n    # IK FK SWITCH SETUP\n    switch_obj = None\n    if not switch_con: \n        switch_obj = pm.circle(name=\"ik_fk_switch_ctrl\", normal=[1, 0, 0])[0]\n        switch_obj.addAttr(\"FK_IK_Switch\", attributeType=\"float\", minValue=0, maxValue=1, defaultValue=0, keyable=True)        \n    else:\n        switch_obj = switch_con\n        print (\"Weee\")\n        if not switch_obj.hasAttr('FK_IK_Switch'):\n            print (\"Waaa\")\n            switch_obj.addAttr(\"FK_IK_Switch\", attributeType=\"float\", minValue=0, maxValue=1, defaultValue=0, keyable=True)        \n\n    rev_node = None\n\n    for main_jnt, fk_jnt, ik_jnt in zip(main_chain, fk_chain, ik_chain):\n        orient_constr = pm.orientConstraint(fk_jnt, ik_jnt, main_jnt)\n        pm.connectAttr(switch_obj.FK_IK_Switch, orient_constr.attr(ik_jnt.nodeName() + \"W1\"))\n\n        rev_node = pm.createNode(\"reverse\", name=main_jnt.nodeName() + \"_ikFkRev\")\n        pm.connectAttr(switch_obj.FK_IK_Switch, rev_node + \".inputX\")\n        pm.connectAttr(rev_node + \".outputX\", orient_constr.attr(fk_jnt.nodeName() + \"W0\"))\n\n    \n    pm.connectAttr(switch_obj.FK_IK_Switch, ik_con.visibility)\n    pm.connectAttr(switch_obj.FK_IK_Switch, ik_pole_con.visibility)\n    \n    pm.connectAttr(rev_node + \".outputX\", fk_con_list[0].visibility)\n    pm.connectAttr(rev_node + \".outputX\", fk_con_list[1].visibility)\n    pm.connectAttr(rev_node + \".outputX\", fk_con_list[2].visibility)\n\n\n    # CLEAN UP\n    obj = ik_pole_con\n    attributes = ['rotateX', 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ']\n    for attr in attributes:\n        obj.attr(attr).set(lock=True, keyable=False)    \n\n    obj = switch_con\n    attributes = ['translateX', 'translateY', 'translateZ', 'rotateX', 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ']\n    for attr in attributes:\n        obj.attr(attr).set(lock=True, keyable=False)    \n\n    parent = pm.listRelatives(switch_con, parent=True)\n    pm.parentConstraint(main_chain[2], parent, maintainOffset=True)\n\n\nif __name__ == \"__main__\":\n    #main_joints = create_joint_chain()\n    main_joints = [pm.PyNode('hip_L_jnt'), pm.PyNode('knee_L_jnt'), pm.PyNode('ankle_L_jnt')]\n    fk_joints = duplicate_joint_chain(main_joints, \"FK_\")\n    ik_joints = duplicate_joint_chain(main_joints, \"IK_\")\n    ik_con = pm.PyNode('foot_IK_L_con')\n    ik_pole_con = pm.PyNode('leg_pole_IK_L_con')\n    fk_con_list = [pm.PyNode('hip_FK_L_con'), pm.PyNode('knee_FK_L_con'), pm.PyNode('ankle_FK_L_con')]\n    switch_con = pm.PyNode('leg_IKFK_L_switch_con') \n    setup_ik_fk_switch(main_joints, fk_joints, ik_joints, ik_con, ik_pole_con, fk_con_list, switch_con)\n\n\n    main_joints = [pm.PyNode('hip_R_jnt'), pm.PyNode('knee_R_jnt'), pm.PyNode('ankle_R_jnt')]\n    fk_joints = duplicate_joint_chain(main_joints, \"FK_\")\n    ik_joints = duplicate_joint_chain(main_joints, \"IK_\")\n    ik_con = pm.PyNode('foot_IK_R_con')\n    ik_pole_con = pm.PyNode('leg_pole_IK_R_con')\n    fk_con_list = [pm.PyNode('hip_FK_R_con'), pm.PyNode('knee_FK_R_con'), pm.PyNode('ankle_FK_R_con')]\n    switch_con = pm.PyNode('leg_IKFK_R_switch_con') \n    setup_ik_fk_switch(main_joints, fk_joints, ik_joints, ik_con, ik_pole_con, fk_con_list, switch_con)\n\n    main_joints = [pm.PyNode('shoulder_L_jnt'), pm.PyNode('elbow_L_jnt'), pm.PyNode('wrist_L_jnt')]\n    fk_joints = duplicate_joint_chain(main_joints, \"FK_\")\n    ik_joints = duplicate_joint_chain(main_joints, \"IK_\")\n    ik_con = pm.PyNode('hand_IK_L_con')\n    ik_pole_con = pm.PyNode('arm_pole_IK_L_con')\n    fk_con_list = [pm.PyNode('shoulder_FK_L_con'), pm.PyNode('elbow_FK_L_con'), pm.PyNode('wrist_FK_L_con')]\n    switch_con = pm.PyNode('arm_IKFK_L_switch_con') \n    setup_ik_fk_switch(main_joints, fk_joints, ik_joints, ik_con, ik_pole_con, fk_con_list, switch_con)\n\n    main_joints = [pm.PyNode('shoulder_R_jnt'), pm.PyNode('elbow_R_jnt'), pm.PyNode('wrist_R_jnt')]\n    fk_joints = duplicate_joint_chain(main_joints, \"FK_\")\n    ik_joints = duplicate_joint_chain(main_joints, \"IK_\")\n    ik_con = pm.PyNode('hand_IK_R_con')\n    ik_pole_con = pm.PyNode('arm_pole_IK_R_con')\n    fk_con_list = [pm.PyNode('shoulder_FK_R_con'), pm.PyNode('elbow_FK_R_con'), pm.PyNode('wrist_FK_R_con')]\n    switch_con = pm.PyNode('arm_IKFK_R_switch_con') \n    setup_ik_fk_switch(main_joints, fk_joints, ik_joints, ik_con, ik_pole_con, fk_con_list, switch_con)    \n\n\n\n\n    # A\n\nparent_a = pm.PyNode('shoulder_L_jnt')\nparent_b = pm.PyNode('elbow_L_jnt')\n\n\n['feather_A_00_L_con_grp', 'feather_B_00_L_con_grp','feather_C_00_L_con_grp']\n\nparent_a = pm.PyNode('elbow_L_jnt')\nparent_b = pm.PyNode('wrist_L_jnt')\n\n['feather_D_00_L_con_grp', 'feather_E_00_L_con_grp','feather_F_00_L_con_grp', 'feather_G_00_L_con_grp', 'feather_H_00_L_con_grp']\n\n\ndef weighted_parent_child_constraint_MOD (parent_a, parent_b,  children_list):\n\n\n    for i, (child, weight) in enumerate(children_list):\n        constraint = pm.parentConstraint(parent_a, parent_b, child, maintainOffset=True)\n        constraint.interpType.set(2)\n\n        constraintWeightAttrA = constraint.getWeightAliasList()[0]\n        constraintWeightAttrB = constraint.getWeightAliasList()[1]\n        \n        weight_a = weight\n        weight_b = 1 - weight\n        constraintWeightAttrA.set(weight_a)\n        constraintWeightAttrB.set(weight_b)\n        \n\n\nparent_a = 'shoulder_L_jnt'\nparent_b = 'elbow_L_jnt'\nchildren_list = [\n('feather_A_00_L_con_grp', 1.0),\n('feather_B_00_L_con_grp', 0.5),\n('feather_C_00_L_con_grp', 0.0),\n]\n\nweighted_parent_child_constraint_MOD (parent_a, parent_b, children_list)\n\nparent_a = 'elbow_L_jnt'\nparent_b = 'wrist_L_jnt'\nchildren_list = [\n('feather_D_00_L_con_grp', 1.0),\n('feather_E_00_L_con_grp', 0.8),\n('feather_F_00_L_con_grp', 0.7),\n('feather_G_00_L_con_grp', 0.5),\n('feather_H_00_L_con_grp', 0.0),\n]\n\nweighted_parent_child_constraint_MOD (parent_a, parent_b, children_list)\n\n"})}),"\n",(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:"Base Ver"})}),"\n",(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:"language-python",children:'import maya.cmds as cmds\nimport pymel.core as pm\n\ndef create_joint_chain():\n    # Create the main joint chain\n    joints = []\n    joint_names = ["shoulder_jnt", "elbow_jnt", "hand_jnt"]\n    positions = [(0, 10, 0), (1, 5, 0), (0, 0, 0)]\n\n    for name, pos in zip(joint_names, positions):\n        jnt = pm.joint(name=name, position=pos)\n        joints.append(jnt)\n\n    pm.select(clear=True)\n    return joints\n\ndef duplicate_joint_chain(joint_chain, prefix):\n    \n    new_joint_chain = pm.duplicate(joint_chain)\n\n    for joint in new_joint_chain:\n        new_name = prefix + joint.nodeName().split("1")[0]\n        pm.rename(joint, new_name)\n\n    return new_joint_chain\n\ndef setup_ik_fk_switch(main_chain, fk_chain, ik_chain):\n    # Create IK Handle for the IK chain\n    ik_handle, effector = pm.ikHandle(startJoint=ik_chain[0], endEffector=ik_chain[-1], solver="ikRPsolver", name="arm_ikHandle")\n    effector.rename(ik_chain[-1] + "_eff")\n    \n    # Create a control for the IK handle\n    ik_control = pm.circle(name="ik_ctrl", normal=[0, 1, 0])[0]\n    pm.delete(pm.parentConstraint(ik_chain[-1], ik_control))\n    pm.parent(ik_handle, ik_control)\n    \n    # Create FK controls\n    fk_controls = []\n    for fk_jnt in fk_chain:\n        fk_ctrl = pm.circle(name=fk_jnt.name().replace("_jnt", "_ctrl"), normal=[0, 1, 0])[0]\n        pm.delete(pm.parentConstraint(fk_jnt, fk_ctrl))\n        pm.parentConstraint(fk_ctrl, fk_jnt, maintainOffset=True)\n        fk_controls.append(fk_ctrl)\n    \n    pm.parent(fk_controls[2], fk_controls[1])\n    pm.parent(fk_controls[1], fk_controls[0])\n\n    # Create IK/FK switch attribute\n    switch_ctrl = pm.circle(name="ik_fk_switch_ctrl", normal=[0, 1, 0])[0]\n    switch_ctrl.addAttr("IK_FK_Switch", attributeType="float", minValue=0, maxValue=1, defaultValue=0, keyable=True)\n    \n    # Constrain the main joints to the FK and IK joints\n    for main_jnt, fk_jnt, ik_jnt in zip(main_chain, fk_chain, ik_chain):\n        orient_constr = pm.orientConstraint(fk_jnt, ik_jnt, main_jnt)\n        pm.connectAttr(switch_ctrl.IK_FK_Switch, orient_constr.attr(ik_jnt.nodeName() + "W1"))\n        rev_node = pm.createNode("reverse", name=main_jnt.nodeName() + "_ikFkRev")\n        pm.connectAttr(switch_ctrl.IK_FK_Switch, rev_node + ".inputX")\n        pm.connectAttr(rev_node + ".outputX", orient_constr.attr(fk_jnt.nodeName() + "W0"))\n    \n\n\n    \n    # # Organize in groups\n    # pm.group(main_chain[0], name="main_joints_grp")\n    # pm.group(fk_controls, name="fk_controls_grp")\n    # pm.group(ik_control, ik_chain[0], name="ik_controls_grp")\n    # pm.group(switch_ctrl, name="ik_fk_switch_grp")\n\nif __name__ == "__main__":\n    main_joints = create_joint_chain()\n    fk_joints = duplicate_joint_chain(main_joints, "FK_")\n    #print (fk_joints[0].name())\n    ik_joints = duplicate_joint_chain(main_joints, "IK_")\n    #print (ik_joints[0].name())\n    setup_ik_fk_switch(main_joints, fk_joints, ik_joints)\n\n'})})]})}function m(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,_.jsx)(t,{...n,children:(0,_.jsx)(p,{...n})}):p(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>a,x:()=>r});var _=e(6540);const i={},o=_.createContext(i);function a(n){const t=_.useContext(o);return _.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),_.createElement(o.Provider,{value:t},n.children)}}}]);