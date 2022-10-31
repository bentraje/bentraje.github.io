# Python



```python
# General 

geo.layoutChildren()

output.setDisplayFlag(True)
output.set RenderFlag(True)
box.setParms({'tx':-2, 'ty':0, 'tz':-1)
color_box.setColor(hou.Color((1,0,0)))
color_box.setParms({colorr':1, 'colorb':0})

# not continue to recook.
box.setGenericFlag(hou.nodeFlag.Lock, True)


# Access Parameters

box = hou.node('/obj/geo1/box1')
box.parm('scale').eval()
box.parm('scale').set(10)
box.parm('sizex')
box.parmTuple('size').eval()

# Set Pivot 

def setpivot(): 
  
  pivotx = hou.node("./chunk/centroid").geometry().points()[0].attribValue('P')[0]
  
  hou.param('pivot_tx').set(pivotx)

# Get the numbers of elements in a group
EdgeGroup.edgeCount()
PointGroup.pointCount()
PrimGroup.primCount()
VertexGroup.vertexCount() 

```


```python
# Geometry. Specifically Edges Command
# https://www.sidefx.com/forum/topic/86736/

obj = hou.node('/obj/geo1/box1')
geo = obj.geometry()


# count by attribute class...
len(geo.globEdges("*"))
len(geo.globPoints("*"))

# edge object
p1 = geo.point(0)
p2 = geo.point(1)
edg = geo.findEdge(p1, p2) 
edg.edgeId()
edg.length()
```

```python 
# UI
node = hou.pwd()
output = node.outputs()[0]
output.parm("computerange").pressButton()


```

```python
# Create transform node that moves object to the floor with display flag. 
selectedNode = hou.selectedNodes()

if len(selectedNode) is 1:
    for node in selectedNode:
        transformNode = node.parent().createNode('xform', 'tf_touch_down')
        hou.node(transformNode.path()).setInput(0, hou.node(node.path()))
        transformNode.moveToGoodPosition()
        transformNode.parm('ty').setExpression(
            '-$YMIN', language=hou.exprLanguage.Hscript)
        transformNode.setDisplayFlag(True)
        transformNode.setRenderFlag(True)
        transformNode.setSelected(True, clear_all_selected=True)


# Create transform node what moves object's pivot to the bounding box center. 
selectedNode = hou.selectedNodes()

if len(selectedNode) is not 0:
    for node in selectedNode:
        transformNode = node.parent().createNode('xform', 'tf_pivot2center')
        hou.node(transformNode.path()).setInput(0, hou.node(node.path()))
        transformNode.moveToGoodPosition()
        transformNode.parm('px').setExpression(
            '$CEX', language=hou.exprLanguage.Hscript)
        transformNode.parm('py').setExpression(
            '$CEY', language=hou.exprLanguage.Hscript)
        transformNode.parm('pz').setExpression(
            '$CEZ', language=hou.exprLanguage.Hscript)


# Create transform node what moves object to the origin. 

selectedNode = hou.selectedNodes()

if len(selectedNode) is not 0:
    for node in selectedNode:
        transformNode = node.parent().createNode('xform', 'tf_move2origin')
        hou.node(transformNode.path()).setInput(0, hou.node(node.path()))
        transformNode.moveToGoodPosition()
        transformNode.parm('tx').setExpression(
            '-$CEX', language=hou.exprLanguage.Hscript)
        transformNode.parm('ty').setExpression(
            '-$CEY', language=hou.exprLanguage.Hscript)
        transformNode.parm('tz').setExpression(
            '-$CEZ', language=hou.exprLanguage.Hscript)


if not hou.node('/obj/WORK'):
    geo = hou.node('/obj/').createNode('geo', 'WORK')
    geo.moveToGoodPosition()

    for n in geo.children():
        n.destroy()


# Look for nodes without inputs / outputs, and set red color. 

sn = hou.selectedNodes()

for n in sn:
    if (len(n.inputs()) is 0) and (len(n.outputs()) is 0):
        n.setColor(hou.Color([1,0,0]))
        # n.setComment("NO I/O connected.")
        # n.setGenericFlag(hou.nodeFlag.DisplayComment,True)
    n.setSelected(0)


# Load geometries from directory 

import glob

node = hou.pwd()
geo = node.geometry()

dir = '$HIP/geo/'
file_list = glob.glob(dir + '*.bgeo.sc')

loadedgeo = hou.Geometry()
sop = hou.sopNodeTypeCategory()

for (i, file) in enumerate(file_list):
    fileverb = sop.nodeVerb('file')
    fileverb.setParms({'file': file})
    fileverb.setParms({'loadtype': 4})
    fileverb.setParms({'viewportlod': 0})
    fileverb.execute(loadedgeo, [geo])
    loadedgeo.addAttrib(hou.attribType.Point, 'variant', i)
    geo.merge(loadedgeo)


# Create Switch SOP with multi wire conected. 

selNodes = hou.selectedNodes()

if(selNodes):
    try:
        switchNode = selNodes[0].parent().createNode("switch")
        pos = []

        for i, node in enumerate(selNodes):
            switchNode.setInput(i, node)
            pos.append(node.position())

        posX = sum([x[0] for x in pos])/len(pos)
        posY = min([x[1] for x in pos])
        switchNode.setPosition(hou.Vector2(posX, posY-1))
        panel = hou.ui.paneTabOfType(hou.paneTabType.NetworkEditor)
        panel.setCurrentNode(switchNode)
    except:
        pass

# Create Attribute Wrangle Node with single wire conected. 

for node in hou.selectedNodes():
    attribWrangle = node.parent().createNode("attribwrangle")
    attribWrangle.setInput(0, node)
    attribWrangle.setPosition(node.position() + hou.Vector2(0, -1))



# Export viewport image. 

from time import gmtime, strftime

cur_desktop = hou.ui.curDesktop()
desktop = cur_desktop.name()
viewer = hou.paneTabType.SceneViewer
panetab = cur_desktop.paneTabOfType(viewer).name()
persp = cur_desktop.paneTabOfType(viewer).curViewport().name()
camera_path = desktop + '.' + panetab + '.' + 'world.' + persp
hn = hou.getenv('HIPNAME')
defaultName = strftime(hn + '%Y%m%d.jpg', gmtime())
filename = hou.ui.selectFile(title='Select Screenshot File',
                             default_value=defaultName,
                             file_type=hou.fileType.Image)

if filename is not None:
    frame = hou.frame()
    hou.hscript("viewwrite -f %d %d %s '%s'" % (frame, frame,
                camera_path, filename))

# Disconnect selected nodes. 

for node in hou.selectedNodes():
    for inConnection in node.inputConnections():
        inIndex = inConnection.inputIndex()
        inNode = inConnection.outputNode()
        inNode.setInput(inIndex, None, 0)

    for outConnection in node.outputConnections():
        outIndex = outConnection.inputIndex()
        outNode = outConnection.outputNode()
        outNode.setInput(outIndex, None, 0)

# Open the $HIP path in explorer and finder. 

from pathlib import Path
import webbrowser

p = Path(hou.getenv("HIP"))
webbrowser.open(p.absolute())

# This shelf tool toggles between AutoUpdate and Manual. 

import hou

mode_name = hou.updateModeSetting().name()
mode = hou.updateMode.Manual if mode_name == "AutoUpdate" else hou.updateMode.AutoUpdate
hou.setUpdateMode(mode)

```