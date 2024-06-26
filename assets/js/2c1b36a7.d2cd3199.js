"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7444],{6730:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=o(4848),r=o(8453);const a={},s="Python",i={id:"houdini/programming/python",title:"Python",description:"General",source:"@site/docs/houdini/programming/python.md",sourceDirName:"houdini/programming",slug:"/houdini/programming/python",permalink:"/docs/houdini/programming/python",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/houdini/programming/python.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Procedural Bottle",permalink:"/docs/houdini/programming/log/procedural_bottle"},next:{title:"UI",permalink:"/docs/houdini/programming/ui"}},d={},p=[{value:"create a parameter reference",id:"create-a-parameter-reference",level:4},{value:"set some node properties",id:"set-some-node-properties",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"python",children:"Python"}),"\n",(0,t.jsx)(n.p,{children:"General"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://neilforest.top/2022/houdini-python-snippets/",children:"https://neilforest.top/2022/houdini-python-snippets/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kiryha/Houdini/wiki/python-snippets",children:"https://github.com/kiryha/Houdini/wiki/python-snippets"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://vfxbrain.wordpress.com/2016/03/15/python-in-houdini/",children:"https://vfxbrain.wordpress.com/2016/03/15/python-in-houdini/"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import threading\n\nclass AppThread(threading.Thread):\n\tdef run(self):\n\t\tprint ("wee")\n\n\nAppThread().start()\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Get all node parameters names\ndef getAllNodeParameters(node):\n    # Return list of all parameters names for input node object \n    allParameters = [param.name()for param in node.parms()]\n    return allParameters\n\n# Filtering nodes by name\nsel = hou.selectedNodes()[0] # read selection\nchildren = sel.children() # read child nodes\nlookfor = \"OUT\" # look for this string in child nodes' names\n\nfor child in children: # initialize a loop\n    name = child.name() # read currently processed child name\n    fndstr = name.find(lookfor) # look for the string of interest in that name\n\n    if fndstr != -1: # evaluate if the string was part of the name\n        print(\"found:\" + name) # if true, do this\n\n# Filtering nodes by type\nnodes = hou.node('/obj/').allSubChildren()\nfound = False\n\nfor n in nodes:\n    node_type = str(n.type())\n\n    if 'cam' in node_type:\n        cam = n.path()\n        found = True\n        break\n\nif not found:\n    cam = hou.node('/obj/').createNode('cam')\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# combo for setting values into existing parameters.\nparm().set()  **`parm()`** and **`set()`** both take one argument: parameter name and parameter value to set.\n\n1\n\n`newMatNode.parm(``'shop_materialpath1'``).``set``(``\"../shopnet1/vopmaterial1\"``)`\n\nIf you want to set a parameter which is a **_tuple_**, like transform or color, containing multiple values, you need to use\xa0**`parmTuple()`**:\n\n1\n\n`node.parmTuple(``'t'``).``set``([``1``,``0``,``0``])`\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"#### get a parameter value\nnode = hou.node('/path/to/node')\nvalue = node.parm('parm_name').eval() # method 1\nvalue = node.evalParm('parm_name') # method 2\nvalue = node.parm('parm_name').rawValue() # method 3\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#### set a parameter\n\n```python\nnode.parm('parm_name').set(value)\nnode.parm('parm_name').setExpression(expression,language=hou.exprLanguage.Python)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"create-a-parameter-reference",children:"create a parameter reference"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"master_node = hou.node('/path/to/node')\ntarget_node = hou.node('/path/to/other/node')\n\nmaster_parm = master_node.parm('parm_name')\ntarget_node.parm('parm_name').set(master_parm)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"\n#### insert a new node between two existing connected nodes\n\nstart_node = hou.node('/path/to/node')\noutput_connections = start_node.outputConnections()\n\nnew_node = start_node.createOutputNode('node_type')\n\nif output_connections:\n    target = output_connections[0]\n    output_node = target.outputNode()\n    # output_index = target.outputIndex()\n    # input_node = target.inputNode()\n    input_index = target.inputIndex()\n    output_node.setInput(input_index, new_node)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"\n#### set current selected node\nnode.setCurrent(True, clear_all_selected=True)\n\n\n#### get a list of nodes\n\n```python\nnodes = hou.node('/obj').children() # get all top level nodes in a context\nall_children = current_node.allSubChildren() # get all children of a node\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n#### get primitive groups\n\nnode = hou.node('/path/to/node')\ngroup_list = node.geometry().primGroups()\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"name = node.name()\ntype = node.type().name()\nposition = node.position()\ncolor = node.color()\ncomment = node.comment()\nposition = node.position\n"})}),"\n",(0,t.jsx)(n.h4,{id:"set-some-node-properties",children:"set some node properties"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"node.setName('node_name')\nnode.setColor(hou.Color((1, 1, 1)))\nnode.setPosition([x, y])\n\nnode.setComment('comment')\nnode.setGenericFlag(hou.nodeFlag.DisplayComment, True)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{})}),"\n",(0,t.jsx)(n.p,{children:"sel = hou.selectedNodes()"}),"\n",(0,t.jsx)(n.p,{children:"if len(sel) == 1:"}),"\n",(0,t.jsx)(n.p,{children:'sel[0].parm("px").setExpression("$CEX")'}),"\n",(0,t.jsx)(n.p,{children:'sel[0].parm("py").setExpression("$CEY")'}),"\n",(0,t.jsx)(n.p,{children:'sel[0].parm("pz").setExpression("$CEZ")'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n1. https://vfxbrain.wordpress.com/2020/07/27/setting-keyframes-with-python/\n2. https://houdinitricks.tumblr.com/post/119009659799/quicktip-python-in-houdini\n3. That is, if you press cmd + e to bring up the Multi Line Editor, you can write something like this:\n\nhttps://ikrima.dev/houdini/basics/hou-python/\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"[ x.name() for x in hou.node('/obj/mygeo/mysop').geometry().pointAttribs() ]"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n```python\n# General \n\ngeo.layoutChildren()\n\noutput.setDisplayFlag(True)\noutput.set RenderFlag(True)\nbox.setParms({'tx':-2, 'ty':0, 'tz':-1)\ncolor_box.setColor(hou.Color((1,0,0)))\ncolor_box.setParms({colorr':1, 'colorb':0})\n\n# not continue to recook.\nbox.setGenericFlag(hou.nodeFlag.Lock, True)\n\n\n# Access Parameters\n\nbox = hou.node('/obj/geo1/box1')\nbox.parm('scale').eval()\nbox.parm('scale').set(10)\nbox.parm('sizex')\nbox.parmTuple('size').eval()\n\n# Set Pivot \n\ndef setpivot(): \n  \n  pivotx = hou.node(\"./chunk/centroid\").geometry().points()[0].attribValue('P')[0]\n  \n  hou.param('pivot_tx').set(pivotx)\n\n# Get the numbers of elements in a group\nEdgeGroup.edgeCount()\nPointGroup.pointCount()\nPrimGroup.primCount()\nVertexGroup.vertexCount() \n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Geometry. Specifically Edges Command\n# https://www.sidefx.com/forum/topic/86736/\n\nobj = hou.node(\'/obj/geo1/box1\')\ngeo = obj.geometry()\n\n\n# count by attribute class...\nlen(geo.globEdges("*"))\nlen(geo.globPoints("*"))\n\n# edge object\np1 = geo.point(0)\np2 = geo.point(1)\nedg = geo.findEdge(p1, p2) \nedg.edgeId()\nedg.length()\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# UI\nnode = hou.pwd()\noutput = node.outputs()[0]\noutput.parm("computerange").pressButton()\n\n\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Create transform node that moves object to the floor with display flag. \nselectedNode = hou.selectedNodes()\n\nif len(selectedNode) is 1:\n    for node in selectedNode:\n        transformNode = node.parent().createNode('xform', 'tf_touch_down')\n        hou.node(transformNode.path()).setInput(0, hou.node(node.path()))\n        transformNode.moveToGoodPosition()\n        transformNode.parm('ty').setExpression(\n            '-$YMIN', language=hou.exprLanguage.Hscript)\n        transformNode.setDisplayFlag(True)\n        transformNode.setRenderFlag(True)\n        transformNode.setSelected(True, clear_all_selected=True)\n\n\n# Create transform node what moves object's pivot to the bounding box center. \nselectedNode = hou.selectedNodes()\n\nif len(selectedNode) is not 0:\n    for node in selectedNode:\n        transformNode = node.parent().createNode('xform', 'tf_pivot2center')\n        hou.node(transformNode.path()).setInput(0, hou.node(node.path()))\n        transformNode.moveToGoodPosition()\n        transformNode.parm('px').setExpression(\n            '$CEX', language=hou.exprLanguage.Hscript)\n        transformNode.parm('py').setExpression(\n            '$CEY', language=hou.exprLanguage.Hscript)\n        transformNode.parm('pz').setExpression(\n            '$CEZ', language=hou.exprLanguage.Hscript)\n\n\n# Create transform node what moves object to the origin. \n\nselectedNode = hou.selectedNodes()\n\nif len(selectedNode) is not 0:\n    for node in selectedNode:\n        transformNode = node.parent().createNode('xform', 'tf_move2origin')\n        hou.node(transformNode.path()).setInput(0, hou.node(node.path()))\n        transformNode.moveToGoodPosition()\n        transformNode.parm('tx').setExpression(\n            '-$CEX', language=hou.exprLanguage.Hscript)\n        transformNode.parm('ty').setExpression(\n            '-$CEY', language=hou.exprLanguage.Hscript)\n        transformNode.parm('tz').setExpression(\n            '-$CEZ', language=hou.exprLanguage.Hscript)\n\n\nif not hou.node('/obj/WORK'):\n    geo = hou.node('/obj/').createNode('geo', 'WORK')\n    geo.moveToGoodPosition()\n\n    for n in geo.children():\n        n.destroy()\n\n\n# Look for nodes without inputs / outputs, and set red color. \n\nsn = hou.selectedNodes()\n\nfor n in sn:\n    if (len(n.inputs()) is 0) and (len(n.outputs()) is 0):\n        n.setColor(hou.Color([1,0,0]))\n        # n.setComment(\"NO I/O connected.\")\n        # n.setGenericFlag(hou.nodeFlag.DisplayComment,True)\n    n.setSelected(0)\n\n\n# Load geometries from directory \n\nimport glob\n\nnode = hou.pwd()\ngeo = node.geometry()\n\ndir = '$HIP/geo/'\nfile_list = glob.glob(dir + '*.bgeo.sc')\n\nloadedgeo = hou.Geometry()\nsop = hou.sopNodeTypeCategory()\n\nfor (i, file) in enumerate(file_list):\n    fileverb = sop.nodeVerb('file')\n    fileverb.setParms({'file': file})\n    fileverb.setParms({'loadtype': 4})\n    fileverb.setParms({'viewportlod': 0})\n    fileverb.execute(loadedgeo, [geo])\n    loadedgeo.addAttrib(hou.attribType.Point, 'variant', i)\n    geo.merge(loadedgeo)\n\n\n# Create Switch SOP with multi wire conected. \n\nselNodes = hou.selectedNodes()\n\nif(selNodes):\n    try:\n        switchNode = selNodes[0].parent().createNode(\"switch\")\n        pos = []\n\n        for i, node in enumerate(selNodes):\n            switchNode.setInput(i, node)\n            pos.append(node.position())\n\n        posX = sum([x[0] for x in pos])/len(pos)\n        posY = min([x[1] for x in pos])\n        switchNode.setPosition(hou.Vector2(posX, posY-1))\n        panel = hou.ui.paneTabOfType(hou.paneTabType.NetworkEditor)\n        panel.setCurrentNode(switchNode)\n    except:\n        pass\n\n# Create Attribute Wrangle Node with single wire conected. \n\nfor node in hou.selectedNodes():\n    attribWrangle = node.parent().createNode(\"attribwrangle\")\n    attribWrangle.setInput(0, node)\n    attribWrangle.setPosition(node.position() + hou.Vector2(0, -1))\n\n\n\n# Export viewport image. \n\nfrom time import gmtime, strftime\n\ncur_desktop = hou.ui.curDesktop()\ndesktop = cur_desktop.name()\nviewer = hou.paneTabType.SceneViewer\npanetab = cur_desktop.paneTabOfType(viewer).name()\npersp = cur_desktop.paneTabOfType(viewer).curViewport().name()\ncamera_path = desktop + '.' + panetab + '.' + 'world.' + persp\nhn = hou.getenv('HIPNAME')\ndefaultName = strftime(hn + '%Y%m%d.jpg', gmtime())\nfilename = hou.ui.selectFile(title='Select Screenshot File',\n                             default_value=defaultName,\n                             file_type=hou.fileType.Image)\n\nif filename is not None:\n    frame = hou.frame()\n    hou.hscript(\"viewwrite -f %d %d %s '%s'\" % (frame, frame,\n                camera_path, filename))\n\n# Disconnect selected nodes. \n\nfor node in hou.selectedNodes():\n    for inConnection in node.inputConnections():\n        inIndex = inConnection.inputIndex()\n        inNode = inConnection.outputNode()\n        inNode.setInput(inIndex, None, 0)\n\n    for outConnection in node.outputConnections():\n        outIndex = outConnection.inputIndex()\n        outNode = outConnection.outputNode()\n        outNode.setInput(outIndex, None, 0)\n\n# Open the $HIP path in explorer and finder. \n\nfrom pathlib import Path\nimport webbrowser\n\np = Path(hou.getenv(\"HIP\"))\nwebbrowser.open(p.absolute())\n\n# This shelf tool toggles between AutoUpdate and Manual. \n\nimport hou\n\nmode_name = hou.updateModeSetting().name()\nmode = hou.updateMode.Manual if mode_name == \"AutoUpdate\" else hou.updateMode.AutoUpdate\nhou.setUpdateMode(mode)\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Random Python\n![[Pasted image 20230721144958.png]]"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var t=o(6540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);