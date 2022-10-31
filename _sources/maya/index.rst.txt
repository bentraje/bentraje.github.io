.. _render-index:
.. _bpy.types.Render:
.. _bpy.types.RenderSettings:
.. _bpy.ops.render:

#############
  Maya
#############


.. toctree::
   :maxdepth: 2

   fx/index.rst
   programming/index.rst


**Shorcut**


- Hold J to snap (Rotate, Move, Scale)
- Hold T for target
- Ctrl+A Attribute Editor
- Ctrl+H to hide object. Shift+H to show hide object
- Hold X to snap grid. In additon, Hold X then Middle Click then Wiggle. Snaps to your cursor.
- Hold C to snap on edges. (Can also snap to the curves. Cool)
- G is the repeat last command.
- B key for soft selection and hold B+Drag to increase the radius
- Shift+Period to Grow Selection
- Shift+P to unparent
- Edit Pivot Point: Insert Key or Hold D key
- Undo Camera, Z key
- Shift + D duplicate
- Shift + Click to expand the outliner
- Select Children. Select Hierarchy. -select hi
- Press F to see the object in the heirarchy
- Alt+B to cycle viewport colors
- Image sequence should be name(dot)#numbers
- there is a known issue if you dont start maya from the start menu
- Ctrl+Shift Click to add the command icon in the shelf
- Problem on Sweep/Extrude Surface: On the option box, right side all options. 
- Marking menu for the 
- W/E/R key then left mouse button
- Alt +G and Group Command (MEL) is different
- Vertex/Polygon Selection in C4D is Sets in Maya. Kinda confusing. because sets in C4D is only for the controllers/objects and not to components. 
- Press backspace delete two edges
- I just hit F to set the pivot and it’s done. Oh yea. 
- Using tab to toggle between selection drag select and marque select.
- \ + RMB Drag: Pan and 2D Zoom. Nice! 
- Need the curve form to be periodic for it to be translate from maya fbx to cinema4d
- Toggle between World/Local Pivot. See python script (https://forums.autodesk.com/t5/maya-lt-forum/world-object-swap-axis-orientation-hotkey/td-p/6603226)
- Ctrl and Delete to delete both the poins and the edges. 
- Press Tab key while on the quaddraw ang you can extend the selection
- Shrink the beer (liquid)? Wrong. Expand it actually
- Retopo hands using cylinder
- cylinder. use a plane then bend
- The erase target tool it nice! Much like the morph brush of maya
- Finally someone said it! UVs don’t combine if they have different UV name sets. 
- While in the Move Tool (press “W”) CTRL + Middle Mouse and drag to move components in and out along their normal.﻿
- Constraint snap. have the LMB on the axis to constraint then middle click on the other axis.
- https://www.youtube.com/watch?v=s2CYuRxFUSI


**Texturing and UV Workflows**

- Cut (Creating Seam), Stitch (Delete Seam), Stitch and Sew (Attach different shells), Straighten then you can transfer attributes
- Align UVs to the minimum Value.
- UV First. Then subdivide/increase geometry. 
- Adding vertex colors? Mesh display>Paint Vertex Color. To flood per face, use Mesh display>Apply Color. To show vertex colors, toggle display colors attribute. and unticked textured. 
- Merging UVs: Must be in a component mode. Select the UV shells then COPY UVs to UV Set. If it is on an object mode, it will override the UV

**Animation Workflows**

- Shift+W/E/R to isolate key of the PSR. 
- Hold I to have overdub editing.
- Double Click Timeline to Select Al
- Kinda forget that the way to copy and paste keyframes is to middle click and drag
- Mixamo Animation: (1) Import the Tpose (Mesh+Joints) (2) Make an animation clip of the joints (select the hips). (3) Merge the Animation from Mixamo (joints only) () Make animation clip of the joints again. Then delete the joints. Click the old joints with the animation clip and click open to TL. It should show the two animation clip. You just drag them down. ATOM Exporter
- Lip Sync? Plays during scrubbing but does not play regularly. It is becauseo f the play every frame feature
- For the animation layer to work, the controls also have to be keyed. even if it is only for one frame 

**Links**

- Motion Matching https://www.youtube.com/channel/UCtN5-QXhRHGEmvjBGl9iBow/videos
- https://orcahq.com/jobs.
- https://www.upp.cz/join-us
- https://www.youtube.com/watch?v=08QQ5U7yqvI
- https://eyad.tv/home/advanced-rigging/
- Free Alpha Textures https://www.artstation.com/deepmind