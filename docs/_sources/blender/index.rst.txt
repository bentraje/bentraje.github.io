.. _render-index:
.. _bpy.types.Render:
.. _bpy.types.RenderSettings:
.. _bpy.ops.render:

#############
  Blender
#############

.. toctree::
   :titlesonly:
   :maxdepth: 1

   python.md
   rigging.md
   plugins.md

.. collapse:: **Armature Moves When Applying Transform**

    Something small enough to escape casual notice.

    .. note::
      This function is not suitable for sending spam e-mails.



    Something small enough to escape casual notice.

.. note::
    Armature Moves When Applying Transform

    .. collapse:: a
        Something small enough to escape casual notice.


- Ctrl+Alt+Q Quad View
- Q = Quick favorites
- press N to view the side menus 
- if instance collection is turned off. it will cause a problem in a linked proxy where the constraints are not carried


- Blender is Z-up.
- Navigation: MMB. Shift + MMB
- Global and Local Orientation? Its in 3D menu below representing an XYZ axis
- Uncheck User Preferences>File>Load UI
- Press Shift to move things precisely; press Ctrl to snap; or enter numerical values and then use the X, Y, and Z keys to constrain the movements to their respective axes.
- In Edit or Pose Mode, select every bone. With all the layers enabled (all the bones visible), press Alt+W to display the Bone Settings options. Alternatively, you can find those options in
- Smooth Vertex
- Solidify
- Working with LoopTools
- Pin: If you click the Pin icon, the current image is pinned and always shown independently of other objects you select. This tool can pin only images,however, not UVs.
- blender + K cut
- Ctrl + Tab 2.8
- IN 2.8, no more N background image. Reference image is now a new object
- Alt+Z/Shift Z for wireframe shading
- F3 super search bar command
- Double +G slide of vertices
- 1,2,3 to switch between vertices, edges and faces
- pepakura paper model
- export paper model from blender
- Press Spacebar for more contextual menu.
- Like the transparent shader, only pure white will make it transparent. The glass shader tends to cause noise due to caustics. Since the Cycles path tracing integrator is not very good at rendering caustics, it helps to combine this with a transparent shader for shadows
- Blender Mask Tools 1.3. Sounds like Substance Painter
- Bender is open gl for substance painter
- Instead of height map. Use Displacement
- To enter UV mode. You need to be in component mode. And the commands are not only in the UV editor but also in the regular viewport
- transfer UV maps in blender
  - Select the “target” object.
  - Select the “source” object (this needs to be the active object)
  - Ctrl L , “Transfer UV maps”



Geometry Nodes
==============

- object info is the object merge in blender 
- dotted line performing a loop


Selection
=========

- Select one of the mesh’s vertices, edges, or faces, and press Ctrl+L. All the elements. Like ctrl+ F
- Selecting loops: Place your cursor on top of an edge, press Alt, and right-click to select the whole loop.
- Selecting rings: Place your cursor on top of an edge, press Ctrl+Alt, and right-click to select the whole ring.
- Hold down Shift combined with either of these shortcuts to add to the selection.
- This technique works with vertices, edges, and faces, but in the case of faces, selecting a loop or a ring returns the same results.
- To quickly select a border, hold down Alt while you right-click the outer edges of the mesh twice.
- Limit Selection to Visible
- When you have the display mode in Wireframe (Z), you can select vertices, edges, or faces that are in front of the model, as well as those that are behind it.
- Select Similar
- After making a selection, pressing Shift+G shows different options depending on the type of element that you just selected.
- Select Boundary Loop and Loop Inner-Region
- You can find options for selecting the boundary loop and the loop inner region in the Select menu of the 3D View header and in the Edges menu (Ctrl+E).
- Parenting in Blender in Hieararchy? You can’t do it by drag and drop. You have to select them (last the parent) and hit Ctrl+P
- Grow/Shrink Selection Ctrl+Numpad + –
- Select Edge Ring Loops Ctrl +Alt LMB
- Alt + LMB = Loop select



Modelling
========

- Affect pivot only:
- Changing pivot: Modify the 3D Cursor ( Can also be manually inputed in the N view). Select the object. Then Object>Transform>Origin to 3D Cursor.
- Tweak a vertex? Select + Drag it)
- Enable AutoMerge (Disabled by default). Editing (Mesh -> AutoMerge Editing, there’s also a button for it in 3D view header),
- Enable “Release confirms” in User Preferences > Editing, and it becomes exactly press-drag-release.
- How to rotate per axis rather than on screen space (default)? Press X, Y,Z pa. Ugh) Or use manipulator instead. Need to click them by default. Ugh.
- Delete all the vertices of the object but note that the object is still present in the outliner. Then ctrl RMB to create a point
- In the mirror modifier. You have to click several option in the mirror modifier.
- Grid Fill is like quad caps. F6 to adjust the spans
- The rip tool is nice.Gettubg a new point and leaving the old one.
- You might have accidentally pressed ⇧ ShiftT at some point, which is used for translating the texture space. As a side effect it enables texture space display as in the screenshot above.
- If you disable texture space display, then they should go away.
- Just changed the mode from Object Mode (etc) to Sculpt Mode and you will have different sidebar interface.
- Generation of new topology can only be done through inflate brush
- Masking? Press M how about invert? Its in the toolbar below along with View/Sculpt/Brush/Hide/Mask
- The further you zoom in the higher the generation of dynamic topology
- When you apply the Mirror modifier, some objects (such as the details of the arms, gloves, or boots) need to be separated so that each side of the object is a separate object. In Edit Mode, select the faces on one of the sides and press P to separate the current selection into a different object.
- Press Ctrl+B and drag your mouse to increase or decrease the bevel size.
- (You can launch the Bevel tool in vertices-only mode directly by pressing Ctrl+Shift+B.)
- Blender’s Bevel tool is similar to the Chamfer tool in 3ds Max.
- may be confusing, but Inset in Blender is similar to Bevel in 3ds Max, while Bevel in Blender is similar to Chamfer in 3ds Max.
- Join and Separate (explained later) are similar to the Attach and Detach tools in 3ds Max.
- Remove Doubles lets you automatically merge all the vertices that are very close to one another inside a range you can define.
- A quicker way to slide, whether you’re working with vertices, edges, or faces, is to press G twice. The same options are available as when you slide the Loop Cut and Slide tool, such as pressing E and F to adapt the shape to the adjacent edge loops.
- LoopTools is an add-on that’s built into Blender but not active by default. You can go to User Preferences and activate it within the Add-Ons tab. When it’s active, LoopTools is accessible from the Tools Region in 3D View and from the top of the Specials (W) menu in Edit Mode.
- Select Face Loops (Just double click)
- Control R in the loop cut
- bisect equivalent to clip brushes in Zbrush
- Switch Direction of the Curve
  - select all ( A )
  - right click > Switch Direction. (or right click > D )
- Convert Edge Loop to Curve
  - Select the edge loop and press Shift+D and Esc to put it back
  - Press P, seperate by selection
  - Select the new mesh and in object mode, press Alt+C and choose Curve from Mesh/Text



Sculpting
=========


- Hold F and LMB to adjust the file size.
- Shift F + LBM for the intensity.
- Control R to remesh.
- Shift R to reveal the remesh grid
- While masking, you can open the pie menu editor like A key to invert or sharpen the mask.
- Draw face sets to have those colored polygons and hit H key to hide and unhide. To continue drawing face sets on existing ones, hit control,.
- Ctrl W to expand face sets . Ctrl alt W to reduce the face sets.


Retopo
======

- Click Edge. Ctrl + RMB. Extrudes the edge.
- Double Tap G to slide around. 
- can immediately drag points. normally without the need for f2. same with maya
- Grid fill. 
- create separate points that is not connected. (i.e. Ctrl + RMB

UV
===

- Ctrl+ E Mark seam
- warp uvs - animated uv
- Select Island. (Select L)
- You can create your own UV map using the Mark Seams tool (Ctrl + E) and the Unwrap tool (U key), you can make use of the automatic unwrapping functions such as Lightmap Pack or Smart UV Project.
- I recommend unwrapping the UVs for the lightmap in Blender since the automatic UV mapper inside UE4 is too slow in some cases or doesn’t work at all.
- To view the UV maps, go to the object part, then there are UV maps.
- Option>Live Unwrap
- 3D Painting. Switch from Edit Mode to Paint Mode.
- Baking in blender. Create an image texture node. Select it. And Go the Scene>Bake
- Blender has projection painting. Quick Edit Apply
- The difference is that whereas one face in a 3D mesh typically is connected to another, faces in the UV space can be freed from their neighboring faces, so you can apply a different texture to a different part of the model, even though the parts may be adjacent in the 3D model.
- Lightmap Pack: This option is not recommended unless you want to create UVs in an automatic way, which can be useful for complex objects that don’t need to be very accurate

Animation Workflow
==================

- In the graph editor. Hit T for interpolation. Step or not. It is V. or under the points.
- In the timeline window, hit M to add marker and contrl+M to rename the marker.



Shading
=========

- CCO Textures
- Shift + K. fill for vertex painting
- Set vertex colors
- triplanar map = no node. just in image texture. blend textures.
- Ctrl + T = Node Wrangle
- Shift + W Node Wrangle options
- Alt + RMB = Alt + LMB (in C4D) Cut nodes
- lazy connect nodes
- Therefore, Blender uses a few rules to determine if something is a UDIM texture or a sequence. These rules are:
- There must be a file with number 1001
- There must not be a file with a number below 1001
- There must not be a file with a number above 1999
- Shift + S = swap nodes


Shortcut
=======

A: Select or Deselect All
alt G to reset location transactorm
E: Extrude
F: Bridge (Select edges first)
F: Drag to adjust the brush size.
I: Inset
M: Assign layers.
O: Proportional editing. How to increase influence?
P: Split Mesh
X: Delete
T: Toggle the Tools Panel
U: Unwrapping menu
W: Specials Menu. Changes details depending on what object is selected. (For armature, includes the flip names for the joint mirroring)
N: Toggle the Navigation Panel (with some transform details). Clipping plane.
Double G: Edge slide.
Shift+A: Create objects. (if on a node editor, creates nodes)
Shift+C: Reset 3D Cursor
Shift+D: Duplicate
Shift+E: Mean crease
Shift+Z: Turn viewer into IPR (in 2.8, skeleto view
Shift+V: To drag a render region
Shift+R/F3: Repeat last command
Shift+G = Select Similar
Shift+F: Fine tune camera view (i.e. moves like a FPS camera)
Shift+F drag to increase/decrease intensity
Shift+S: Snapping and for moving the cursor
Shift+H or numpad /: Hide / Solo
Shift+Tab: Enable Snapping
Ctrl+Up Arrow: Maximize layout
Ctrl+A: Open the attribute editor
Ctrl+L: Object instancing
Ctrl+P: Parent
Ctrl+E: Mark Seam
Ctrl+H: Hook options like Maya Clusters. Available only when a curve is selected
Ctrl+J: Combine Meshes
Ctrl+R: Edge Loop cut
Ctrl+T to triangulate
Ctrl+Tab: Move from Object to Edit Mode
Ctrl + “+/-” – Grow/Shrink Selection
Alt+H or numpad / : Hide / Solo
Alt+A: Play in the timeline
Alt+R: Reset Transformation
Alt+G: Reset to Grid
Alt+M : Merging (Select two vertices)
Alt+P: Clear Parent
Alt + Z: For Xray
Shift+Ctrl+C: Opens the constraints
Period(.): To frame the curve in the graph editor
Tab: Move from Edit Mode
Numberpad /: Viewport Focus
Numberpad .: Camera pivot like S in C4D or F in Maya
Sculpting
Ctrl+D: Dynotopo
F and Shift F: Changing Size and Intensity
In Box Mask with Ctrl+Shift, you go into Lasso.



Compositing
=========

- lens distortion node
- V and Alt V in the compositing to be able to zoom back and forth the image.


FX Workflow
===========


- Particle should be in the bottom stack
- Grease Pencil Basics
- To use the Grease Pencil (which is mainly used for annotations in 3D View), press and hold down D while you left-click; then drag to draw. Press and hold down D while you right-click; then drag to erase the strokes. In the 3D View
- Fluids. Check: Initial velocity of the smoke to carry over. To art direct.
- For a rigid body physics simulation extreme unapplied scale transforms can cause very noticeable strange results, such as unnaturally fast or slow rotations depending on if the object is scaled up or down:
- The resolution of the strands is controlled by the step values in particle settings. Each hair system uses the material identified in the particle settings.
- If you activate children, the parents are no longer rendered. This can be enabled in the Render panel Parent Particles. By default, parent particles are not rendered because the shape of the children can be quite different from that of their parents.


Grease Pencil
=============

- uto lock layer //so you will only edit selected layer
- Selection Mask //edit only the selected point
- Paint Bucket – press “ctrl” for lasso //only fills area within the viewport
- Clamp Layer //works like photoshop clipping mask
- Multiframe //edit several selected frame at once “located next to selection mask”


Editing
=======

- Alt+A Video Editor Playback
- K Cut/Strip Clip


Rendering
=========

- Max Ray Bounces affect the transparency depth
- F12 always renders the active camera. If you want to move active camera to current viewport position, press Ctrl+Alt+Numpad 0.
- uncheck refractive caustics
