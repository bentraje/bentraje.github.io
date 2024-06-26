"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1241],{3849:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>_,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var o=e(4848),r=e(8453);const c={},i="Space Switch",a={id:"maya/programming/example/rigging/create_space_switch",title:"Space Switch",description:"",source:"@site/docs/maya/programming/example/rigging/create_space_switch.md",sourceDirName:"maya/programming/example/rigging",slug:"/maya/programming/example/rigging/create_space_switch",permalink:"/docs/maya/programming/example/rigging/create_space_switch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/maya/programming/example/rigging/create_space_switch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"create_fk_ik_chain_switch",permalink:"/docs/maya/programming/example/rigging/create_fk_ik_chain_switch"},next:{title:"Directly Apply Delta Blendshape",permalink:"/docs/maya/programming/example/rigging/directly_apply_delta_bshape"}},s={},d=[];function m(n){const t={code:"code",h1:"h1",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"space-switch",children:"Space Switch"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import maya.cmds as cmds\nimport pymel.core as pm\n\ndef create_space_switch(child, parents, enum_con):\n    """\n    Creates space switching for a given child with specified parents.\n    \n    Args:\n        child (str): The name of the child control (e.g., \'hand_IK_con\').\n        parents (list): A list of parent controls (e.g., [\'chest_con\', \'hips_con\', \'root_con\']).\n    """\n    \n    # Add enum attribute to the child\n    enum_attr_name = "space"\n    if not cmds.attributeQuery(enum_attr_name, node=enum_con, exists=True):\n        enum_attr = cmds.addAttr(enum_con, longName=enum_attr_name, attributeType="enum", enumName=":".join(parents))\n        cmds.setAttr(f"{enum_con}.{enum_attr_name}", keyable=True)\n    \n    # Create a parent constraint without maintaining offset\n    constraint = cmds.parentConstraint(parents, child, maintainOffset=True)[0]\n    \n    # Create a condition node for each parent\n    for i, parent in enumerate(parents):\n        condition_node = cmds.createNode(\'condition\', name=f"{child}_to_{parent}_condition")\n        \n        # Set the condition node attributes\n        cmds.setAttr(f"{condition_node}.colorIfTrueR", 1)\n        cmds.setAttr(f"{condition_node}.colorIfFalseR", 0)\n        cmds.setAttr(f"{condition_node}.secondTerm", i)\n        \n        # Connect the space enum attribute to the condition\'s first term\n        cmds.connectAttr(f"{enum_con}.{enum_attr_name}", f"{condition_node}.firstTerm")\n        \n        # Connect the condition output to the corresponding weight in the parent constraint\n        cmds.connectAttr(f"{condition_node}.outColorR", f"{constraint}.w{i}")\n\n# Example usage:\nchild_control = "arm_IK_L_con_grp"\nparent_controls = ["root_con", "body_con"]\nenum_con = "arm_IK_L_con"\ncreate_space_switch(child_control, parent_controls, enum_con)\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import maya.cmds as cmds\nimport pymel.core as pm\n\ndef create_space_switch(child, parents):\n    """\n    Creates space switching for a given child with specified parents.\n    \n    Args:\n        child (str): The name of the child control (e.g., \'hand_IK_con\').\n        parents (list): A list of parent controls (e.g., [\'chest_con\', \'hips_con\', \'root_con\']).\n    """\n    # Ensure the child exists\n    if not cmds.objExists(child):\n        raise ValueError(f"Child control \'{child}\' does not exist.")\n    \n    # Ensure all parents exist\n    for parent in parents:\n        if not cmds.objExists(parent):\n            raise ValueError(f"Parent control \'{parent}\' does not exist.")\n    \n    # Add enum attribute to the child\n    enum_attr_name = "space"\n    if not cmds.attributeQuery(enum_attr_name, node=child, exists=True):\n        enum_attr = cmds.addAttr(child, longName=enum_attr_name, attributeType="enum", enumName=":".join(parents))\n        cmds.setAttr(f"{child}.{enum_attr_name}", keyable=True)\n    \n    # Create a parent constraint without maintaining offset\n    constraint = cmds.parentConstraint(parents, child, maintainOffset=True)[0]\n    \n    # Create a condition node for each parent\n    for i, parent in enumerate(parents):\n        condition_node = cmds.createNode(\'condition\', name=f"{child}_to_{parent}_condition")\n        \n        # Set the condition node attributes\n        cmds.setAttr(f"{condition_node}.colorIfTrueR", 1)\n        cmds.setAttr(f"{condition_node}.colorIfFalseR", 0)\n        cmds.setAttr(f"{condition_node}.secondTerm", i)\n        \n        # Connect the space enum attribute to the condition\'s first term\n        cmds.connectAttr(f"{child}.{enum_attr_name}", f"{condition_node}.firstTerm")\n        \n        # Connect the condition output to the corresponding weight in the parent constraint\n        cmds.connectAttr(f"{condition_node}.outColorR", f"{constraint}.w{i}")\n\n# Example usage:\nchild_control = "arm_IK_L_con_grp"\nparent_controls = ["root_con", "body_con"]\ncreate_space_switch(child_control, parent_controls)\n\n\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import maya.cmds as cmds\nimport pymel.core as pm\n\ndef create_space_switch(child, parents, enum_con):\n    """\n    Creates space switching for a given child with specified parents.\n    \n    Args:\n        child (str): The name of the child control (e.g., \'hand_IK_con\').\n        parents (list): A list of parent controls (e.g., [\'chest_con\', \'hips_con\', \'root_con\']).\n    """\n    # # Ensure the child exists\n    # if not cmds.objExists(child):\n    #     raise ValueError(f"Child control \'{child}\' does not exist.")\n    \n    # # Ensure all parents exist\n    # for parent in parents:\n    #     if not cmds.objExists(parent):\n    #         raise ValueError(f"Parent control \'{parent}\' does not exist.")\n    \n    # Add enum attribute to the child\n    enum_attr_name = "space"\n    if not cmds.attributeQuery(enum_attr_name, node=enum_con, exists=True):\n        enum_attr = cmds.addAttr(enum_con, longName=enum_attr_name, attributeType="enum", enumName=":".join(parents))\n        cmds.setAttr(f"{enum_con}.{enum_attr_name}", keyable=True)\n    \n    # Create a parent constraint without maintaining offset\n    constraint = cmds.parentConstraint(parents, child, maintainOffset=True)[0]\n    \n    # Create a condition node for each parent\n    for i, parent in enumerate(parents):\n        condition_node = cmds.createNode(\'condition\', name=f"{child}_to_{parent}_condition")\n        \n        # Set the condition node attributes\n        cmds.setAttr(f"{condition_node}.colorIfTrueR", 1)\n        cmds.setAttr(f"{condition_node}.colorIfFalseR", 0)\n        cmds.setAttr(f"{condition_node}.secondTerm", i)\n        \n        # Connect the space enum attribute to the condition\'s first term\n        cmds.connectAttr(f"{enum_con}.{enum_attr_name}", f"{condition_node}.firstTerm")\n        \n        # Connect the condition output to the corresponding weight in the parent constraint\n        cmds.connectAttr(f"{condition_node}.outColorR", f"{constraint}.w{i}")\n\n# Example usage:\nchild_control = "arm_IK_R_con_grp"\nparent_controls = ["root_con", "body_con"]\nenum_con = "arm_IK_R_con"\ncreate_space_switch(child_control, parent_controls, enum_con)\n\n\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import maya.cmds as cmds\nimport pymel.core as pm\n\ndef create_space_switch(child, parents, enum_con):\n    """\n    Creates space switching for a given child with specified parents.\n    \n    Args:\n        child (str): The name of the child control (e.g., \'hand_IK_con\').\n        parents (list): A list of parent controls (e.g., [\'chest_con\', \'hips_con\', \'root_con\']).\n    """\n    # # Ensure the child exists\n    # if not cmds.objExists(child):\n    #     raise ValueError(f"Child control \'{child}\' does not exist.")\n    \n    # # Ensure all parents exist\n    # for parent in parents:\n    #     if not cmds.objExists(parent):\n    #         raise ValueError(f"Parent control \'{parent}\' does not exist.")\n    \n    # Add enum attribute to the child\n    enum_attr_name = "space"\n    if not cmds.attributeQuery(enum_attr_name, node=enum_con, exists=True):\n        enum_attr = cmds.addAttr(enum_con, longName=enum_attr_name, attributeType="enum", enumName=":".join(parents))\n        cmds.setAttr(f"{enum_con}.{enum_attr_name}", keyable=True)\n    \n    # Create a parent constraint without maintaining offset\n    constraint = cmds.parentConstraint(parents, child, maintainOffset=True)[0]\n    \n    # Create a condition node for each parent\n    for i, parent in enumerate(parents):\n        condition_node = cmds.createNode(\'condition\', name=f"{child}_to_{parent}_condition")\n        \n        # Set the condition node attributes\n        cmds.setAttr(f"{condition_node}.colorIfTrueR", 1)\n        cmds.setAttr(f"{condition_node}.colorIfFalseR", 0)\n        cmds.setAttr(f"{condition_node}.secondTerm", i)\n        \n        # Connect the space enum attribute to the condition\'s first term\n        cmds.connectAttr(f"{enum_con}.{enum_attr_name}", f"{condition_node}.firstTerm")\n        \n        # Connect the condition output to the corresponding weight in the parent constraint\n        cmds.connectAttr(f"{condition_node}.outColorR", f"{constraint}.w{i}")\n\n# Example usage:\nchild_control = "arm_IK_R_con_grp"\nparent_controls = ["root_con", "body_con"]\nenum_con = "arm_IK_R_con"\ncreate_space_switch(child_control, parent_controls, enum_con)\n\n'})})]})}function _(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>a});var o=e(6540);const r={},c=o.createContext(r);function i(n){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(c.Provider,{value:t},n.children)}}}]);