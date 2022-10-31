************
Open Maya 
************


General
=======

- 
- Admittedly, I have an inferior knowledge on this API. It is somewhat low level but nevertheless powerful than the other Python APIs. 
- You can check a general overview on the official `documentation <https://help.autodesk.com/view/MAYAUL/2022/ENU/?guid=Maya_SDK_py_ref_index_html>`__.
- Another comprehensive getting started `resource <https://www.chadvernon.com/maya-api-programming/>`__.
- MDAG Path https://gist.github.com/taikomatsu/b0a9eb29b19e3c890d1a
- https://www.programcreek.com/python/example/103924/maya.OpenMaya.MDagPath




..  code-block:: Python
    :caption: General Syntax
    :linenos:

    import maya.api.OpenMaya as om # API 2.0
    
    import maya.api.OpenMayaAnim as omanim
    import maya.api.OpenMayaRender as omrender

    import maya.OpenMaya as om # API 1.0. No reason to use except for legacy purposes
..  code-block:: Python
    :caption: Get world matrix
    :linenos:


    from maya.api.OpenMaya import MVector, MMatrix, MPoint
    import maya.cmds as cmds

    def get_world_transform (obj):
        return MMatrix ( cmds.xform( obj, q=True, matrix=True, ws=True ) )

    selected_object = (cmds.ls(sl=1,sn=True))[0]

    print ( get_world_transform( selected_object ) )





