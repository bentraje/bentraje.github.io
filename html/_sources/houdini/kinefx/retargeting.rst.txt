************
Retargeting
************


General
===========

- Motion clip something maybe.
- FBX Character Import (Combination of FBX Skin Imporot + FBX Animation Import)
   - In the olden days, it would be Scene Character Import if you are using Houdini's native object level rigging toolset, which was already superseded by Kinefx Rigging Toolset (i.e. SOP level rigging)
- FBX Animation Import
- Rig Match Pose Node (Hit ``Enter`` to enter to its interactive state)
- Do not translate or scale the skeleton joints you see in the Rig Match Pose state.
- Map Points SOP (Hit ``Enter`` again to see the node state )
   - Physical Full Body IK solver, then that solver prefers a sparse mapping. 
   - FABRIK solver, then that solver prefers a dense mapping.
- Fully Body IK SOP
- FK Transfer. Might be better compared to Full Boody IK SOP when there is a need of direct translation of joints. Like fingers. There is no need for IK solver for that one. 
- FBX Animation Improt > Motion Clip > Motion Clip Evaluate > Bone Deform
- FBX Animation Import > Motion Clip > Motion Clip Blend >Motion Clip Evaluate>Motion Clip Cycle
- FBX Animation Import > Extract Locomotion
- Motion Clip Sequence>motion Clip Evaluate wher eyou want to blend from beginning to end
- Workflow
   -
- ssss


Retarget With Same Skeleton
    This would be the best case scenario where your skeleton matches your mocap such as using mixamo characters with the mixamo animation.

.. figure:: /images/houdini/houdini_kinefx_retarget_same_skeleton_base.png
    :align: center

    Retarget With Same Skeleton

Retarget With Different Skeleton
    For the most part, you will have to deal with different skeleton and animation skeleton. 

.. figure:: /images/houdini/houdini_kinefx_retarget_different_skeleton_base.png
    :align: center

    Retarget With Different Skeleton


Retarget With Different Skeleton + FK Transfer
    To get a stable Full Body IK Behavior, keep the mapping to the bare minimum such as the wrist, shoulder, hips, ankle etc. For the fingers, it would be best just to use a simple FK transfer of the source and target skeleton. 

    Note that there is two mapping attributes. One for the Full Body IK and the other is for FK Transfers

.. figure:: /images/houdini/houdini_kinefx_retarget_different_skeleton_fk_transfer.png
    :align: center

    Retarget With Different Skeleton + Using FK Fingers 
