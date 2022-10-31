************
MEL
************


**Run with MEL in Python**


..  code-block:: Python
    :caption: <caption>
    :linenos:

    import maya.mel

    maya.mel.eval('myFuntion(argument1,argument2)')
    maya.mel.eval('myFuntion argument1 argument2')

    maya.mel..eval("polySphere;")


    instead of :
    >>> mm.eval("myMelScript;")

    you can just do:
    >>> mel.myScript() 

    mel.eval('source "D:/Maya_Python/myMELScript.mel"')

    D:\\Maya_Python\\myMELScript.mel



**Weeeeeeeeeeeeeeeeeeeee**

.. literalinclude:: example.py


.. literalinclude:: https://raw.githubusercontent.com/bentraje/blender-python/master/animation-rigging/constraint_param_from_armature_export.py


.. literalinclude:: \export_mat_list_with_geo_assignment.py

.. gitinclude:: https://raw.githubusercontent.com/bentraje/blender-python/master/animation-rigging/constraint_param_from_armature_export.py
   :language: python


**Weeeeeeeeeeeeeeeeeeeee**
