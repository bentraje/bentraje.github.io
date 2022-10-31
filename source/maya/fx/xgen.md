# XGen


## General


- GROOMING 01 Intro to Yeti – Lesson 01: Building the first graph
- Pro tip: If you’re interested in learning Yeti, you should make a search for “Yeti Tutorial by Bjørn Blaabjerg Sørensen” who has made 11 in depth tutorials on everything you need to know about the software.”
- Simulation. Have it face out.
- Human hair is cut and does not have a taper like fur
- Just thin out the root for fading.
- Xgen cant read a project path with spaces in it
- Redshift Texture from Image: In Preview/Ouput, create a custom shader parameters.

## Xgen Regular/Defactor

- First off, set your diffuse to black since natural hair has no real diffuse interaction with light so adding diffuse can make hair feel like its full of hair products even when it is used subtly.  Instead, try to get your hair color from Reflection 2 and Translucency. Try to have both of these color be the same so that the hair reacts as expected under many different lighting conditions.
- Making Curves Dynamic.
-     (A) Click on the guide animation>Use Animation>Create Hair System>Attach hair system. For caching, disable live node and plug-in the alembic.
-         (B) Animwires modifier>Create Maps>Create Hair System>Attach Hair System. Advantage of using B or A is the ability to select how low or high the number of dynamic curves.
-         Collision modifier should be in the highest hierarchy.
-         XGen do not appear in the view port?
-             One is because of the material problem (2 hours on this!)
-                 The other is GPU outdated
- Bake Groom Modifier for faster animation workflow if all the modifier has been finalized.
- Cannot select my guides? I modify as curve mo muna lahat. then they are selectable.
- Base Settings
    CV Count 25
    Taper 0.8 and taper start 0.8
    Clumping (Based on guides, T: 0.3, 0.05, T:0.2, 0.1 T:0.1). Then create the middle value to adjust
    Then add Cut.
    Then add noise. Frequency 0.1,Magnitude 5  
    For cut, additional noise, Fr, 0.1, Mag 20. Then add a mask. Load Expression>Sample>Xgen>Water related>Noise>Noise smoothstep
- By default, clumping modifier results in an error. This is because you need to generate map first.
- Realistic hair thickness: Root is 0.01 cm and tip is 0.001 . Grass is 0.2 cm and 0.2 cm
- It requires a hefty amount of AA Samples
- Clump: I’d argue that this is the most important attribute of hair when creating your groom to create something that feels really convincing
    Clumping will always happen first.
    Parting
    Primary clumps
    Sub clumps (number of sub clumps depends on wetness of the hair)
    Individual hair strands and Strays
- Negative length (Grooming) decreases the fur.
- Flip to Left/Right for groomable only works if it is in front. facing.
- Visibility needs to be turned on so the length and width in the grooming tab is transferred to the primitive.
- Have the existing maps be the color? Create a custom map. Then go the node editor. Show inputs/outputs then drag the map to the color to the xgen.
- Isolate hair on a specific section, Mask>Create Map
- Keep track of the number of CVs on your guide curves, for short hair styles the default of 4 CVs is fine but for more complex shapes try increasing this number. (You can do this using the “rebuild” option in the guide tools section of the primitive tab)
- Please do not just parent the scalp geometries to joints as XGen will not recognise its movements at rendertime and thus the hair will not follow the mesh.
    Instead, copy your weight paints onto the scalp
    OR use a wrap deformer to attach to scalp to your base geometry.
- Density Mask is not working? Probably because you don’t have a directory set-up.
- Plug a separate density map? Go to hypershade and load a new texture. For easy viewing change the tab from materials to textures. To update the xgen, go the 3d paint tool and you should see the new texture then hit save.
- Right, one quick thing I want to bring up due to some experience I have had with xgen in a animation pipeline, don’t bother putting XGen in you rigs, all it does is cause instability and trouble with referencing. Yes, XGen can now be referenced but with core XGen it is only stable in its first reference, by that I mean you can make your groom in the model file and reference that into the rig but when you try to reference the rig you will start to get issues because of the namespaces. There are two ways to work around this, you can flatten references when you publish the rig but in my opinion a much better way is to ignore XGen and just model some proxy hair for the rigger and animator to use. You can just load XGen in after animation is done but I’ll get back to this later…
- The most important setting to set first is your start curve attraction as this setting allows the groom to hold its shape during animation. I tend to set this to a value of 1 and use the “attraction scale” graph to set the tips of the hair to have more movement than the root.
- 3D Paint Tool won’t work on foreign/third party materials
- Region map need to be painted in 100% color… no falloff or soft areas… if the area is not pure red its going to be a new region… you need to paint with a solid brush tip.
- The geo can be in a group, but the XGen collection can’t be in the same group
- For hair cards, In Viewport 2.0, make sure “Depth Peeling” is selected, and Transparency Quality is set to 1. This ensures that the hair cards will display correctly when placed on top of each other.
- Guides: Unevenly spaced, Lack Detail (all goes same direction), Uneven Length
- If there are two guides incredibly close together facing in different directions it will create a weird spike/split in the groom.
- Use Coil
- PER COLLECTION: You only need to export patches for batch render ONCE per collection
- Make collide not working. Because base resolution is low.
- Auto resize threshold.
- Make sure that you export the alembic in world space and that UV write is turned on so you get to keep your UVs.
- New Xgen Method? Find the animation tab in your xGen description panel and turn animation on, make sure that live mode is active and then click create hairSystem.
- If the name of your scene changes you will also need to export the patches again, since the patches are save for the specific scene you are in.
- When meshes deform, they change the spatial relationship of instances between frames, which can create artefacts. XGen provides different techniques to avoid popping Autodesk recommends using Patch References (PRefs)  – which you will need to employ to create a successful sequence of rendered images.
- such cases, you can make use of XGen’s utility nodes  to map the UV surface in order to apply any material or ramp, or even an entire shading network, to your groom. This enables you to achieve a more complex look. 
- There are a lot of nodes that you can use, but the one that will be most useful here is xgen_ptex_lookup.
- Xgen batch group. Export patches. Animation. No need to hide. Export Guides curves. Okay to select only the group. But be sure to not tick the use animation. Finally, turn off. the nucleus otherwise it will not work. Hmmm but it still works when gi on nako. Had to redo this tomorrow.
- ${PROJECT}/ din.
- References
    https://www.artstation.com/artwork/B5ea9
    https://www.mikecauchiart.com/single-post/2016/10/16/Beginners-guide-to-grooming-maya-2016
    http://dishdishdish.blogspot.com/2015/08/creating-maya-hair-using-zbrush.html
    http://jesusfc.tumblr.com/
    https://www.mikecauchiart.com/single-post/2017/08/29/Beginners-guide-to-XGen-pipeline-for-beginners
    XGen guides move when mesh moves but not parent locator: http://forums.cgsociety.org/showthread.php?t=1419504
        

## XGen Interactive Grooming Spline

- GROOMING 01 Intro to Yeti – Lesson 01: Building the first graph
- Pro tip: If you’re interested in learning Yeti, you should make a search for “Yeti Tutorial by Bjørn Blaabjerg Sørensen” who has made 11 in depth tutorials on everything you need to know about the software.”
- Simulation. Have it face out.
- Human hair is cut and does not have a taper like fur
- Just thin out the root for fading.
- Xgen cant read a project path with spaces in it
- Redshift Texture from Image: In Preview/Ouput, create a custom shader parameters.
- Heavily dependent on the video card.
- Adjusting the width the interactive groom? Use the width brush
- How about the taper in the interactive groom? It’s on the shape node.
- Except density and width (which is baked down), all the grooming brushes are stored in a sculpt layer.
- The modifier are those similar to the regular Xgen splines (i.e. using guides, noise etc).
- Now in 2018, there are now clumping and cut modifiers (Yey! Now on par with regular xGen).
- Caveat on using density brush. If you have your sculpt at Density Multiplier 10, then go back to 1 to adjust overall proportion and get back to 10, you will lost the details on Multiplier 10. It’s not like Zbrush subdivision levels.
- You can increase the density of the hair through render time rather than on viewport (Arnold)
- Like the regular XGen, dynamics is calculated per guide basis rather than per hair basis for efficiency.
- Making curves dynamic. Creating linear wire modifier. Click create input wires. Make wires dynamic.  
- On dynamics, hair does not follow the guide. On the magnitude scale, set the root to zero and tip to 1.
- Two separate ways in deleting the splines/curves. Either from the Density Multiplier or the place Brush. They are mutually exclusive. Splines/curves created by the density multiplier cannot be deleted by place brush 
- nd vice versa.
  
## Links

- Motion Matching https://www.youtube.com/channel/UCtN5-QXhRHGEmvjBGl9iBow/videos
- https://orcahq.com/jobs.
- https://www.upp.cz/join-us
- https://www.youtube.com/watch?v=08QQ5U7yqvI
- https://eyad.tv/home/advanced-rigging/
- Free Alpha Textures https://www.artstation.com/deepmind