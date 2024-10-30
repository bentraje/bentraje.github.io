"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9440],{6382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>_,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(4848),s=n(8453);const o={},i=void 0,c={id:"maya/programming/example/recreate_groups_from_houdini_to_maya/create_rivet_from_selection_set",title:"create_rivet_from_selection_set",description:"I'm task to create controls for each teeth. And there are roughly 80+ of them. This is a creature teeth. It will take a ridiculous amount to do this by hand and its a bit tricky to do it all in Maya.",source:"@site/docs/maya/programming/example/recreate_groups_from_houdini_to_maya/02_create_rivet_from_selection_set.md",sourceDirName:"maya/programming/example/recreate_groups_from_houdini_to_maya",slug:"/maya/programming/example/recreate_groups_from_houdini_to_maya/create_rivet_from_selection_set",permalink:"/docs/maya/programming/example/recreate_groups_from_houdini_to_maya/create_rivet_from_selection_set",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/maya/programming/example/recreate_groups_from_houdini_to_maya/02_create_rivet_from_selection_set.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recreate Groups from Houdini to Maya",permalink:"/docs/maya/programming/example/recreate_groups_from_houdini_to_maya/recreate_groups_from_houdini_to_maya"},next:{title:"recreate_layers_from_3ds",permalink:"/docs/maya/programming/example/recreate_layers_from_3ds"}},a={},l=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"I'm task to create controls for each teeth. And there are roughly 80+ of them. This is a creature teeth. It will take a ridiculous amount to do this by hand and its a bit tricky to do it all in Maya."}),"\n",(0,r.jsx)(t.p,{children:"So I used Houdini to determine the small, medium and large teeth and export points that touches near the mouth geo. All in Houdini scene."}),"\n",(0,r.jsx)(t.p,{children:"Anyway, back in Maya scene. I need to use the JSON data from Houdini to create a rivet/control for every object"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import maya.cmds as cmds\n\n# Access specific selection set members\nselected_objects = cmds.sets(\'teeth_small_selection\', q=True)\nrivet_list = []\n\n\n# Create the Rivets\nfor p in selected_objects:\n   cmds.select(clear=True)\n   cmds.select(p, add=True)\n   cmds.Rivet()\n   constraint = cmds.ls(sl=True)\n   rivet_list.append(constraint)\n      \n# Create the Joints and Controls\n#circle_ref = cmds.circle()[0] # returns [\'nurbsCircle1\', \'makeNurbCircle1\']\ncircle_ref = \'box_ref\'\n\n\nfor riv in rivet_list:\n    cmds.select(clear=True)\n    grp = cmds.group(em=True)\n    start_joint = cmds.joint() # automatic parent because riv joint is alreadyselected\n    end_joint = cmds.joint() # automatic parent because riv joint is alreadyselected\n    loc_obj = riv[1]\n    cmds.setAttr(loc_obj + ".localScaleX", 0.05)\n    cmds.setAttr(loc_obj + ".localScaleY", 0.05)\n    cmds.setAttr(loc_obj + ".localScaleZ", 0.05)        \n    con = cmds.parentConstraint(loc_obj, grp, mo=False)\n    cmds.delete(con)\n    con = cmds.parentConstraint(loc_obj, start_joint, mo=False)\n    cmds.delete(con)\n    con = cmds.parentConstraint(loc_obj, end_joint, mo=False)    \n    cmds.delete(con)\n    cmds.setAttr(end_joint + ".tx", 0.2)\n    con = cmds.parentConstraint(loc_obj, grp, mo=True)\n\n    # PARENT SHAPE CONTROLS\n    circle_duplicate = cmds.duplicate(circle_ref) \n    shape_nodes = cmds.listRelatives(circle_duplicate, shapes=True)[0]\n    rename_shape_node = start_joint + "_name" # Too dirty. Joint01, Joint02\n    cmds.rename(shape_nodes, rename_shape_node) \n    cmds.parent(rename_shape_node, start_joint, relative=True, shape=True)  \n    cmds.delete(circle_duplicate)\n        \n#cmds.delete(circle_ref)\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import maya.cmds as cmds\nimport pymel.core as pm\n\n\n# Get the selection from the set named 'point_selection'\nselected_points = cmds.sets('point_selection', q=True)\n\ndef flatten_list(selected_objects): # selected objects is a vertex list\n    # Check if there are any objects in the selection\n    vertex_list = []\n    if selected_objects:\n        for obj in selected_objects:\n            if cmds.objectType(obj) == 'mesh':  # Check if the object is a mesh\n                # Extracting the number range from the vertex string\n                vertex_range = obj.split('[')[-1].split(':')\n                start_index = int(vertex_range[0])\n                end_index = int(vertex_range[-1].rstrip(']'))\n\n                # Constructing individual vertex names\n                for i in range(start_index, end_index + 1):\n                    vertex_list.append(f\"{obj.split('.')[0]}.vtx[{i}]\")\n\n    else:\n        vertex_list = []\n    \n    return vertex_list        \n\n\ndef transfer_points(selected_points=None):\n    source = pm.ls('source_geo')[0]\n    target = pm.ls('target_geo')[0]\n\n    if selected_points:\n        vertex_list = selected_points\n    else:\n        vertex_list = source.vtx\n\n    for vtx in vertex_list:\n        \n        vtx = pm.PyNode(vtx)\n        idx = vtx.index()\n        t = pm.xform(vtx, q=True, t=True)\n\n        output = target.vtx[idx]\n        pm.move(output, t, a=True)\n        \nprocessed_points = flatten_list(selected_points)\ntransfer_points(selected_points=processed_points)\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import maya.cmds as cmds\n\n# Function to convert slice notation to individual indices\ndef expand_slice(slice_str):\n    indices = []\n    start, end = slice_str.split(':')\n    start_index = int(start.strip())\n    end_index = int(end.strip())\n    for i in range(start_index, end_index + 1):\n        indices.append(i)\n    return indices\n\ndef flatten_list(selected_objects):\n    # Check if there are any objects in the selection\n    if selected_objects:\n        vertex_list = []\n        for obj in selected_objects:\n            if cmds.objectType(obj) == 'mesh':  # Check if the object is a mesh\n                # Extracting the indices from the vertex strings\n                indices = []\n                vertex_ranges = obj.split('.')[-1].split('[')[-1].split(',')\n                for vertex_range in vertex_ranges:\n                    if ':' in vertex_range:  # If it's a slice\n                        indices.extend(expand_slice(vertex_range.rstrip(']')))\n                    else:  # If it's a single index\n                        indices.append(int(vertex_range.rstrip(']')))\n                \n                # Constructing individual vertex names\n                for i in indices:\n                    vertex_list.append(\"%s.vtx[%d]\" % (obj.split('.')[0], i))\n        return vertex_list\n    else:\n        vertex_list = []\n        return vertex_list\n\n# Get the selection from the set named 'point_selection'\nselected_objects = cmds.sets('point_selection', q=True)      \n\n\ndef transfer_points(selected_points=None):\n    source = pm.ls('jaw_74')[0] \n    target = pm.ls('body_low_wip')[0]\n    print (source)\n    print (target)    \n\n    if selected_points:\n        vertex_list = selected_points\n    else:\n        vertex_list = source.vtx\n        \n    #print (type(vertex_list[0]))        \n\n    for vtx in vertex_list:\n        print (vtx)\n        vtx = pm.PyNode(vtx)\n        idx = vtx.index()\n        t = pm.xform(vtx, q=True, t=True)\n\n        output = target.vtx[idx]\n        pm.move(output, t, a=True)\n\n#print (selected_points)        \nprocessed_points = flatten_list(selected_points)\nprint (processed_points)\n#transfer_points(selected_points=selected_points)\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import maya.cmds as cmds\n\ndef create_control(name, size=1.0, color=(1, 1, 0)):\n    """\n    Create a control curve.\n    """\n    control_curve = cmds.circle(name=name, normal=(1, 0, 0), radius=size)[0]\n    cmds.setAttr(control_curve + ".overrideEnabled", 1)\n    cmds.setAttr(control_curve + ".overrideColor", 6)  # Yellow color\n    return control_curve\n\ndef create_controls_for_curve(curve):\n    """\n    Create controls for every CV of the given curve.\n    """\n    cv_positions = cmds.getAttr(curve + ".cv[*]")\n    print (cv_positions)\n    \n    \'\'\'\n    controls = []\n    for i, pos in enumerate(cv_positions):\n        control_name = "{}_control{}".format(curve, i+1)\n        control = create_control(name=control_name)\n        cmds.xform(control, translation=pos[0], worldSpace=True)\n        # Optionally parent the control to the CV\n        cmds.parent(control, curve)\n        controls.append(control)\n    return controls\n    \'\'\'\n\ndef main():\n    # Get selected curve(s)\n    \n    selected_curves = cmds.ls(sl=True)\n    if not selected_curves:\n        cmds.warning("Please select a curve.")\n        return\n    \n    for cv in selected_curves:\n        create_controls_for_curve(cv)\n        \n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# Check if its a member\n\n\nprint(\"Objects in selection set 'yourSelectionSetName':\", selected_objects)\n\n# Check if an object is a member of a selection set\nobject_to_check = 'pCube1'\nis_member = cmds.sets(object_to_check, isMember='yourSelectionSetName')\nif is_member:\n    print(f\"{object_to_check} is a member of 'yourSelectionSetName'\")\nelse:\n    print(f\"{object_to_check} is not a member of 'yourSelectionSetName'\")\n\n"})})]})}function _(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);