************
PyMEL
************



General
=======

- Pymel wraps around the mel, python.cmds. and maya.openmaya. 
- `Official Documentation <https://help.autodesk.com/cloudhelp/2022/ENU/Maya-Tech-Docs/PyMel/whats_new.html>`__
- Python has its default ``os.path`` module. PyMEL also has its own `implementation <http://www.jason-parks.com/artoftech/?p=289>`__. They are not mutually exclusive. You can use both in one script. 
- nt is node type. dt is data type
- PENDING: Assign materials in PyMel (https://discourse.techart.online/t/assigning-a-material-using-pymel/1240/9)
    - https://gist.github.com/taikomatsu/f1021a0d01a22309e67f9ef928040e8c
- Test

TO DO
=====

- script to determine in maya if there is a difference between the skinculster one and off



..  code-block:: Python
    :caption: General syntax
    :linenos:

    # Get object based on name
    obj = pm.PyNode('pCube1')
    obj = pm.nt.Joint('joint1') 
    objects = pm.ls(['Object_A', 'Object_B'])

    # Get objects selected
    obj = pm.selected()

    # Select all based on node type
    obj_sel = pm.ls(type="displayLayer")

    # Select all based on wildcard search
    obj_sel = pm.ls("*_con") # wild card search
    obj_sel = pm.ls("*Sphere*", type = "transform") # wild card search

    # Get node based on nodetype
    # connections method only work on the shape node
    for node in obj.getShape().connections():
        if node.nodeType() == 'skinCluster':
            print (node.nodeType())
            sc_node = node

    # Alternative on getting the shape and actually any other connection depending on the index
    pm.selected()[0].listHistory()[0]

    # Alternative on getting the skinCluster node
    pm.PyNode('pCube1').listHistory(type="skinCluster")

    # Determine if the verts are on boundary
    for vert in shapeNode.verts:
        if vert.isOnBoundary():
            doSomething()

Links
=====

Most of the links here are old presentation. Fortunately, there's not much changes in Maya API and as such most of them are still applicable. There might be some syntax difference since Maya switched to Python 3 on 2022 release. 

- `Rigging Dojo Live Jason Parks Power Python for Maya <https://www.youtube.com/watch?v=vTMomfVYmH4&ab_channel=RiggingDojo>`__(30 Jan 2013)



