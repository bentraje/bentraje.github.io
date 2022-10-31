*********
Skinning
*********

- Personally, I wouldn't want to skin/weight in Houdini. It works but its not as accessible in Maya. 
- You still have to learn it in the Houdini because there might be FX props created in Houdini that needs rigging. It would be cumbersome to go back-and-forth to Maya for this specialized task. 
- AFAIK, there's no way to export and import weights on Houdini. At least natively. You have to make a pipelien out of it
- Normally, you need a capture node to skin your geo. Alternatively, you can brute force it and use wrangle node to manually set the weight attributes like from  `Tokeru <https://www.tokeru.com/cgwiki/index.php?title=HoudiniKinefx#Procedural_weights>`__.


Skinning With Hard Surface
    This is equivalent to rigid skinning in other DCC. Technically, you can still use smooth skinning option for hard surface and just edit the points to only have one joint influence. This verbose set-up does help with clear visual on what parts are rigid. 

    Rigid skinnings is mostly use for those objects that does not bend such as mechanical arms or props like bracelet or sword. 

.. figure:: /images/houdini/houdini_kinefx_rigid_skinning.jpg
    :align: center

    Skinning With Hard Surface


Skinning With Organic Surface (Simple)
    This is equivalent as the smooth binding option Maya. Not the most accurate, but it doesn't matter as much since I almost always modify the weights anyway. I just need to block the weights on their respective region.
    
    The Capture Layer Paint is what allows you to modify weights manually. Makes the process non-procedural but it does keep my sanity knowing that I can art direct it. 

.. figure:: /images/houdini/houdini_kinefx_smooth_skinning.png
    :align: center

    Skinning With Organic Surface (Simple)


Skinning With Organic Surface (Biharmonic Capture)
    At 18.5, the set-up was unnecessarily verbose. You can check how it was back then `here <https://www.youtube.com/watch?v=miwEX8vR_2c>`__. At 19, they repackaged the same set-up down to one node which makes things easier to set-up. 

.. figure:: /images/houdini/houdini_kinefx_biharmonic_capture.png
    :align: center

    Skinning With Organic Surface (Biharmonic Capture)