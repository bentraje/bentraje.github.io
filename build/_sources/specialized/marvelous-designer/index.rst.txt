#############
  Marvelous Designer
#############


Unresolved
Tacking and Basting


Jeans Tutorial
puckering in marvelous designer
to create realistic folds, I always use the weft and warp polygon stretch function
cotton oxford for the lining.
10mm diay
fold is 150mm
seam on the pants  30mm
Scale it to be 200% for the folds smallers and more realistic.
rmb add background image. nice
upon the perfect fit.
you can adjust it. but adjust outside. rather than inside
pants. taper at the end.
the belt is made from two rectangles first. rather than one long rectangle
then later merge it
denim raw thickness to 3

General Workflow
Its important to have a base mesh (avatar) with a few iterations to avoid visible faceting on the simulated cloth from the underlying base mesh. MD handles detailed avatars well, so its better to go higher than regret it.
For complicated and stacking patterns, you can perform freeze and unfreeze workflow. 
	For the pants, you can freeze the waist bands
	For the suit, you can freeze the collar band 
	For the suit, you can freeze the front and end pattern then simulate the sleeves. This prevent sleeves from dragging the entire pattern down. 
Fake simulations
	Don't sew the buttons. Just do it the old way. Sew through the patterns. Then just add buttons on top of them. 
	No need to export with thickness. Unless you have separate internal and external patterns. 
	Shirred Waistband: Usually normals. You can also stack layer clone over and over but it gets heavy immediately. One layer clone over an get the job done (i.e. with the clone having more pattern)
	Sometimes in the process. have the fold angle to 0 then back again to 180 after the simulation
Mirroring or Symmetry
	Not interactive (made at the end of pattern creation): Select the mirror edge. Click unfold. (If there is a stray line. Select the Trace tool then hit Enter)
	Interactive (clone is not yet created): Select the pattern. Clone with Symmetry (Ctrl+D)
	Interactive (clone is already created): Select the two pattern. Then Linked Editing.
Does it make sense to build tertiary design elements like strings or piping in Marvelous Designer? That’s a good question! E
	ven though they look nice in MD, it’s not worth the effort most of the time. They not only slow down the simulation process, but you will also probably be much faster at creating these meshes in ZBrush or any other 3D application of your choice, and complementing the garment in a second step.
Sometimes, it even makes sense to import additional avatars the clothing can interact with. To pose the hood, I added a bow-shaped tube and used the track on avatar tool to attach the hood to the tube. When I move and rotate the tube while simulation is active, the entire hood follows.
When you are happy with the garment’s drapery, you can right-click an element in the 3D window and select Solidify. This forces MD to keep the current shape of the mesh, even if it’s not frozen or deactivated.
if you want to get rid of most of the folds and bring back some of the original shape of the pattern, right-click an element in the 3D window and select Strengthen (Ctrl+H). Now MD will try to keep as much of the initial volume as possible.
On animation, to prevent sliding, Affix the shoulders and sides of the Garment and Avatar together with functions like Avatar Tape and Tack on Avatar. Affix any details that hang or portions of the Garment that overlap with the Tack function.
Increase the Transition Animation Time: Increase the Transition Animation time for heavier Garments. In the Animation dialogue, enter 5 FPS to stabilize the Simulation during the transition. This will reduce the amount of collision that occurs due to the movement of the Avatar.
Setting the Simulation Quality to Complete for the Transition Animation recording will minimize the collision between the Avatar and Garment, as the likelihood of collision is high during the beginning of the Transition Animation.  However, to save time, the Simulation Quality can be set to Normal for the middle portion of the Transition Animation recording, but similar to the beginning of the Transition Animation, the likelihood of collision occurring at the end of the Transition Animation is also high. Therefore, make sure to set the Simulation Quality back to Complete for the end of the Transition Animation.
Maintain a Simulation Quality of Complete when recording the actual Garment Animation. Complete offers a more realistic expression of Garment movement than Normal. For any final recordings of Garment Animation, make sure the Simulation Quality is set to Complete.



Retopology
Only two tools so far. Create Topology and Edit Topology
Add loops. Be in create mode and hold Ctrl+ Shift
You cant dissolve edges. They will be deleted. 
No target weld. 



Simulation management
Check normal direction
Check stretch map
	The red color indicates the pattern is very tight on the character and should be fixed to prevent simulation problems
Double click on the Avatar and from the Property Editor set the Skin Offset (the distance between the Avatar's body and the garment) to something very low, maybe 1.00mm, or even less to make it look more realistic. Click on Simulate (Space)
Using a pseudo collar to hold the patterns first. Then remove it after.
Freezing the segments so that they will not be affected
In the preferences, have the simulation quality to complete
To have a slower simulation and as such, more accurate. have the simulation at 25005.
When you are stuck in a weird simulation problem. Increase the number of simulation above 1. Then after solving making it back to 1
Note: If the garment is deactivated, it means it will be ignored during simulation. If the garment is frozen that means its simulation will be deactivated but it still will collide with other garments
Attach all pins to the avatar. so when it animates, the pin follows
Pin patterns when simulating
	Useful when buttons don't go inside the button holes properly. Overlap the two patterns and pin the front pattern


Specific Workflows
Once you have the pants over the shirt, I recommend you raise the pants waistband cloth friction setting.
Faking that in line stitch (cloth on top of the other) seam. offset and internal line. Then have the fold angle to 210 with strength to 5
Add more thickness to the pocket by making an internal line, cloning as pattern. have the pattern unfold. Sew the pattern to itself with the help of the internal line. Then have the pattern sew to the internal line
Creating ruffles. Create a rectangle. Create a half internal line then sew that internal line.
Creating pillows: One pattern is the base with the pressure set to 5 (Stiff). (Careful about the flip normals.) The second pattern is the actual cover that will actually create the folds.
Bags in general are complicated, so always begin by making the back pattern piece your starting point, then pin it and build on top of it
Pleats
	Pleats requires 3 seam lines
	Selecting every other side pleat then scaling them. To have different look.
	Tricky thing about pleats is how many number of segment lines to use.
Creating Gather
	Sewing short pattern to a longer pattern.
	Selecting an edge pattern and modifying the elastic option. Having a ratio less than 100 will creating a gather. (Default is 80)
	To make a gathered fabric effect, turn on the Elastic and adjust the Intensity and Ratio values. (See the internal lines video).
	In the 2D window, right-click a pattern and select Layout Clone (Over) or Layer Clone (Under). Freeze the underlying pattern, decrease the particle distance of the overlaying one and increase the weft and warp values. If you set these shrinkage values to something higher than 100, the fabric will extend during simulation and this results in more folds. 
How do you scale the texture in Marvelous

Export/Third Party Workflow
Export from OBJ results to a separate mesh per pattern. Merge first the related patterns as this will cause problems in Zbrush recognizing them as separate.
Hi (posed), lo (2d/blendshape), retopo (wrapped)
	have the retopo the same edge count with each other so that it is seamless when welded
	transfer attributes before dong the wrap
	Go to the Geometry palette, scroll down to ZRemesher, set the Curve Strength to 100, the Target Polygon Count to something low like 2 or 3 and hit the ZRemesher button. You should get a relatively clean topology and an edge-flow that follows the predefined guidelines.
Transfering Garments from one project to the other
	Export Garment from Project A
	Import Garment to Project B
	Then ensure that offset is 0, 0, 0. If its not working, try switching to cm then ensure the offset is 0, 0, 0


Commands/Feature
Steam Brush: When the pattern is perfect, but still want to create more folds.
	Useful for creating tug in the buttons.
Seam taping: Makes edge pattern rigid.
	Useful when you those collar maintain its initial form. Its like creasing or defining hard edge on a model
Layering: When patterns are on top of each other (i.e. undershirt and jacket), the simulation is confused on what exactly is over and under. To solve this, make the undershirt to Layer 1 and jacket to Layer 2.
	Useful also for belts and tuck in.  
Cut and Sew: Applicable only on internal lines. Basically, detached the internal lines to make a separate pattern.
	Useful for creating seam patterns.
Use the Pleats tool rather than the doing it manually
Superimposed (Over) again! Saves the day
Strengthen is helpful to have the internal lines execute first then the outer sewing
Use the Basic CM tool to take measurements for: waist, hip, thigh, knee, calf, ankle, bust, neck base, arm hole, elbow, and wrist.
Use the Height LM tool to get the heights for: bust, neck, gluteal, waistline, cervicale and leg. (Click the floor and head. Then click fit)
Finally delete that weird line (purple line) in the merge residue. Click the Trace Tool. Select those merged lines and hit enter.
Move then clone: Select pattern/button/edge. Ctrl+C. Drag. Then RMB.
Straighten points (like modifying UVs): Align to X and Y
Layer clone over
Use the Surface Tape Measurement tool to get the pants and shirt lengths.
Zipper tool not visible? Drag the viewport to see more commands
By default, resizing is through the corners (annoying). You have to Double LMB the center point to move the pivot point. Every. Single. Time.
That sleeve creation. Make a triangle. Then have it curved. But this will delete the point. So add a curve again.
Additional Puffiness Feel. Add pressure to the cloth
Circle internal line then convert to holes
Opposite of Cut and Sew is the Merge.
Shift+T makes the patterns transparent (normally this is used to hide/show 2d textures, but makes the patterns transparent if not textures are applied)
Switch the viewing mode from thick textured surface (Alt+1) to textured surface (Alt+2).
Curseside Geometry to be turned on.

Shortcuts
Insert pins: hold W + LMB
Delete pins: Ctrl W
Shift+Z to show th measurement
Shift+A to hide avatar

Cloth/Avatar Properties
Friction makes the cloth ‘stick’ more to the underlying cloth and prevents it from slipping down.
Weft - Horizontal - Nice to fine tune when you already want your patterns to remain the same
Too low on stretch weft and stretch warp will make the garment look worn out
Prevent how to slip up the waistband from waist to chest. Increase fiction coefficient
Weft is hoizontal
Like in the jacket tut. This amount was increase to 103% to have more
warp  is vertical
Wrap - Vertical
Shear is diagonal
Bending is blowing up the (puff up) the material. Puffy sleeves
Puckering or Shirred. Waistband
Bucking is smoothing out wrinkles
The trick for the cowl. is have left side sliders for the fabrics. For instance, shear is made to zero.
Except for density: Higher density will make it hang more. Like curtain!
Bucking will make it plastic.

Sewing Misc
Fit first. Stylize second
Princess seam does not necessarily need to go to the bust point
Misc bands
Darts
colonial family history emaze. doublet
On skirts. Front darts are shorter while the back darts higher. Side darts are the regular size.
In sewing, bar tack, also written bar-tack or bartack, refers to a series of stitches used to reinforce areas of a garment that may be subject to stress or additional wear.[1] Typical areas for bar tack stitches include pocket openings, buttonholes, belt loops, the bottom of a fly opening,[2] tucks, pleats and the corners of collars.
Those are bar tack stitches; they’re used to give stability and strength to the area of your jeans that’s going to get pushed around a lot – the pockets!
The front is shorter than the back
Fiber Content + Construction
Silk is Fiber.
Natuaral/Man Made Fibers
cotton is not a fabric and silk tou. They are fibers
Just is the way flour is a favorite food.
yarns are also individual strands of the fabric. Not just yarn na gina knit.


category of fabric,

woven, denim (
knits (cut and sew), fully fashioned knits
hydes
non-woven (felt)

fabric for fashion
the swatch book


Modular
You can't really segmentize the block boxes. So to sew, LMB on the block segment then shift + LMB to the garment segment and so forth
Cannibalized an existing modular garment. Need two Marvelous Designer open. One is with the existing modular. The other new. Save the existing modular garment. Then reimport it to the new. The trick is the the existing and new garment must have the same modular preset. Otherwise deads.

Link
http://isntthatsew.org/pattern-making-101/
https://www.osinka.ru/Pattern/Free/
burdastyle.com
ralphpink-patterns.com
nl pinterest.com enphinety/marvelous-designer-sewing-patterns
http://clothesonfilm.com/
https://moldesdicasmoda.com/transformacao-de-vestidos/
https://issuu.com/search?q=pattern%20making
Supreme Optimization Worklow:  http://manual.marvelousdesigner.com/display/MD4M/Process+of+Making+Garment+Animation
Patternmaking for Fashion Design 5th Edition, Kindle Edition
http://off-the-cuff-style.blogspot.com/
My favorite book is Modern Pattern Design. I purchased the book, but I found this pdf online:
[MULTI] Fashion Design through Patternmaking - Intro to Slopers
Craftsy - Pattern Drafting from Ready-to-Wear
Pattern Cutting & Making for Beginners - Luxury Fashion
Easy Singer Style Pattern-Free Fashions & Accessories: 15 Easy-Sew Projects that Build Skills, Too by Kate Perri
http://www.tusfiles.net/wyiomh2rd9w3
https://sea.newchic.com/theme-patchwork-hoodie-t-343757/?utm_campaign=lmc-ice-sea-vcc-m-b1&utm_content=elaine&utm_source=facebook_cpc_fashion&utm_medium=cpc_fashionsea&utm_ho=18-65+&ad_id=23846270040660412&fbclid=IwAR3m_DGCGnfXbYjYbFc-ijO4h_6O7NVBZmsmb55OlLMrUn8Fqqc6tWz-8-Y&country=168