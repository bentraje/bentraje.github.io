************
Rigging
************


**General**

- Enlarge rig but still maintains 10cm. Enlarge it using animation mode!
- (1) In making the scissor lifter. You can use the formula effector and change the formula to mod(id;2). This will only affect a cloner in every second instance.
- Dapat Z aim. Tapos create manually a handle.
- The whole IKSpline shebang is really annoying
- C4D prefers Z/B alignment. You can verify it when you rotate the cube arbitrarily and only teh Z/B alignment that is the one that stays axis. Rotation order seems to be erroenous.
- Character object: When you already weighted the object, and add extra limbs. You are fucked.
- All animated objects in the scene (all animated objects in CINEMA 4D have a priority of Animation, 0).
- Expression B (although this has the same priority as all animated objects, animated objects are still preferred over expressions with the same priority).
- Remember this rule of thumb: Leave both priorities at the same value (=faster calculation) as long as no problems with Generators, Expressions or Deformers arise – at which point you can assign a later priority to the morphed state.
- Note that the Base Priority can only be lower or equal to the regular priority. If you place the Base Priority higher, the regular priority will automatically be increased accordingly. The regular priority must then be increased again if you want an Expression or a Deformer to have an effect between Base Priority and the morphed state.
- IK Spline is set-up but the chest do not follow? Need to set-up a separate parenting. Unlike in Maya na automatic na. Not really mali lang tlaga.
- Well, after  @Decarlo’s post I decided to open up the Object > Options > Modify panel, I didn’t change anything put upon closing the panel, the controllers shift!
- What options are checked in the modify panel of your Xref?  I still think that the Xref is resetting some of what you’ve edited. It would make sense if opening the “modify” panel is triggering the reset – just like closing and reopening does.
- apart from long loading times and the occasional greyed out attributes of the xref object since r18 i never had any issues.
- Tried it again and they shifted once again! at least I don’t have to wait overnight now – I think I’ll leave that panel alone!
- It sounds like you haven’t enabled modifications on your XRef.  In the attribute manager, go to Object > Options… > Modify.  Make sure that “PSR” and “Parameters” are both checked.  The silly thing is that if the XRef is set to not allow modifying parameters, it will still let you modify them!  You can render to Picture Viewer and everything. But when you reopen (or render through the queue or team render) those changes that were not allowed will be erased.
- @SKaiser usually just psr, user data and sometimes parameters, if needed. i think bret might be on to something with the hierarchy thing.
- Some issues can be resolved by putting a keyframe for any changes made to the rig on Frame 0 (as well as any others) of your project/animation file (not Xref file), otherwise when you open it next time it will revert to the value/s from the Xref scene.
- I’d make sure you don’t have Hierarchy Checked to modify. You should really only have PSR, Parameters, and User Data checked. Having Hierarchy checked, I have found in the past to just cause all sorts of problems. Unless you actually plan/need to manipulate the hierarchy, you’re better off leaving it unchecked.
- On Xref One thing to check is that your frame rate matches between the XRef original file and your new file you’re using ti in. Check both the Project Settings and your Render settings.
- Fake collission FFD.  In Maya set to all no option. In C4D, just stack up again and again.
- Morph tag not on the mesh itself but in the FFD
- Aim and Up Constraint
- Position from Python still fail
- Outside Hierarchy
- Using Sweep (with Use Rail Direction)/Rail Scale
- Xpresso Align to Spline. Not completed. Used Python tag instead.
- You can perform hide selection with out the selection tag. Just search in the commander
- Same with the Maya skin cluster wrangler. Weights Tab Filter Selection > Link selection
- Scaling in C4D. Turn off skin deformer. Then scale with the object tool. Then set bine pose. Turn on C4D

**Constraints**

- Note that the first joint element in an IK set up can’t be limited with Kinematics, the Restriction-Tag needs to be used, but be aware of the Euler Problem.
- 
- pag side ways – preferred on the main axis.
- pag up ways – preferred on the end control



Limitation
----------

