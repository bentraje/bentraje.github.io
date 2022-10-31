************
Xparticles
************


- Rather than using retiming. Use the Emission Speed for the Particles for greater control
- There seems to be a default gap from the particles and the collission. The setting to be adjusted is .Emitter>Radius. Set it to anything lower but no 0.
- The radius cannot be zero because there will be no particles to be emitted
- In the preferences, particle group>Random color on creation
- Gravity modifier is not only to bring objects to ground. You can also use it as an attractor by using the effect towards feature
- In the modifiers there is an xpChange Group. where a particle changes its form.
- x Particle radius scale effect. Need radius to be 0 cm
- Like in the example, you want bula bula. scale 1 0,1 on the spline.
- You can kill particles emitters based on perspective camera.
- Extended data tab is used for the geometry emitters rather than just point emitters
- xpFrag,emter
- You can emit through point selection. Nice
- )Collider Tag)Reaction to Collission: Translate. Nice! Bali parang ang emmission affects the state of an object
- Freezing Particles [xpfreeze tag)
- X particles can work on splines
- You can also paint particles
- Intersection on Xpgenerator generated particles>Set to No intersection.
- Collider Tag>Forces only works when the Emitter>Dynamics>Constraints and Collider Forces are enabled.
- 32 mins to 3:58 mins
- When enabled, it result where particle engulfs the collider
- Project Settings>Xparticles Dynamics Settings is significant factor on how the simulation looks. For initial set-up, change the Substeps to 3 and Iteration to 5.
- xp Constraints object is somewhat a be all for all types of fluid. Water, honey etc.
- its the particle based dynamics. catch all
- surface tension. nice with rain drops. keeps everything together
- for sand. use the friction and add collission.
- Particle per particle collission is possible. But you have to specify what emitter particle you want to collide with. A
- Particle Advection
- Cloner Object do not work with the Skinner? Parent the cloner object to the connect object.
- How to Cache?
- Important: you only need one Cache object in a scene! Although you can add more than one, they all work on the same data and more than one Cache object is not recommended as it may lead to confusion
- When caching to files the emitter name is used to name the files. Therefore, if there are multiple emitters in the scene it is crucial that they have unique names! The same applies to the RealFlow BIN files when loading a cache, the cache object will look for filenames starting with the emitter name (be it RealFlow BIN or XP cache files). So if reading or writing cache files (or RealFlow BIN) the emitter name is vital to it working consistently.
- Spin This modifier only has an effect if there are generated objects in the scene, either from a Generator object or a Sprite object. It spins the objects by the amounts given in the ‘Spin amount’ setting.
- xppainter – must be in the from 1 instead of 0
- LInes display. Longer lines more velocity.
- Mistake. Trying to get too much in one emitter.
- Animated texture emission
- Using the sine function para sa bula bula. cauldron.
- Instead of modifying individual fall-off, you can try xpTrigger Action.
- Select the light and turn on multiple importance
- no need for max bounces kasi mag cap man rin.
- Solve Banding:
-     two things I would try to change:
-         1) from rate go to hexagonal output
-             2) even more important – in project settings rise subframe steps and iterations
-             Prevent the jitter of the sudden apperance of the emitters. Set Emitter Radius to 0. Add a particle scale, change to value to the desired adius like 2cm). Then data mapping. Radius Value to Age.
- This is important because the order of solving constraints is in the order the constraint objects are found in the OM.
- Substeps: If you have fast moving or complex particle motion increasing the Subframe Steps will increase the accuracy of the Fluids, Constraints and 
- ollisions.
- Iterations: This setting is used for constraints and PBD Fluids. Increase this value to make constraints and PBD more accurate/stiffer.
- No Need to change 40%. 90% is fastest but suffer for instability.
- Is it possible to export XP particles to Alembic? I know you can do geometry meshes, but I am wanting the particles themselves. generate tp in the emitter 
- ettings and bring in a c4d particle geometry. You’ll then be able to export to abc
- Speed ramps. Link EFX Speed to Emitter Retiming
- If you want to modify the sim speed for slow mo, if you want advection, you also need to do it in the particle retiming
- you need to cache for motion blur
- motion inheritance to follow the
- Generally particles in the fluid are difficult to modifier using the modifiers
- With the stick to particles enabled any modifiers will be ignored. but the dynamics will affect them. (flow field)
- Make a sand? Not really in the fluidfx modifier, but on the emitter settings.
- Blur out the channels in the xplosia for better rendering:
- This is equivalent to diffusion.


**Emitter**

- Regular and Hexagonal: These are special emission modes specifically for use with fluid simulations. Although you can use them with standard emitters such as the rectangle or circle, they are principally intended for use when emitting from an object. If you select one of these modes, you will see that particles are only emitted from the object’s volume and they are packed into the volume so as to ensure no overlapping particles. This is because particles which overlap at birth can result in unstable or exploding fluid sims.
- The difference between them is the method of packing. ‘Regular’ uses a regular grid (as in the Mograph cloner) but ‘Hexagonal’ uses a more efficient packing method allowing more particles to be emitted from the same volume.
- Volume Emit for things like emit dust from the ground
- Hexagonal emission explodes if the start emission is 10F and 11F. If you need only one frame. Just use 10F and 10F
- For creating a granular, you need to set-up it in the emitter.
- Note that emitting from an object is significantly slower than standard emitters, so should be avoided wherever possible. Why? You can emit from ‘solid’ emitters such as the sphere, cylinder or box emitters if you need to.
- You can delete particles at will. Enable in the Points tab.
- xParticles can be affected by deformers and effectors. However, by default, it is set to include. This means you have to set it up manually in the Modifiers tab.
- Subframe emit is helpful when the the emitter is moving at a fast speed
- emitters can be affected by different particles system group
- An emitter can emit two different groups.
- When you create a group from the emitter, it will inherit the emitter options.
- Scale only works with if you have a custom emitter (i.e. Cube using the Generator object)
- x Particle radius scale effect. Need radius to be 0 cm
- Subframe emit is helpful when the the emitter is moving at a fast speed
- emitters can be affected by different particles system group
- An emitter can emit two different groups.
- When you create a group from the emitter, it will inherit the emitter options.
- Scale only works with if you have a custom emitter (i.e. Cube using the Generator object)
- x Particle radius scale effect. Need radius to be 0 cm

**xpConstraints**

- Particle dynamics is housed inside the particleConstraints object like soft body, cloth, fluid etc.
- xpConstraints was used to create a fluid behavior (viscous, sand (friction) and typical liquid (surface tension). However, with the introduction to xpFluidFX and xpFluidPBD, these functions are somewhat deprecated and are kept for legacy purposes
- To do sand you need a lot interation.
- That said, xpConstraints still has uses for its Connection and Collission tabs for motion graph purposes.
- Enable Polygon Edges, Polygon Diag: These switches enable the particles to follow a cloth-like behaviour without the need for the overhead of Cloth FX. To use them, emit particles from an object such as a Plane object, turn on these switches, and also turn on collision in the Collisions tab. Then the particles will behave like this:
- Stiffnesss: This is a measure of how “strong” the connection is. Note that for stiffer connections it can give more predictable results to have a lower ‘Stiffness’ value and higher iterations and/or subframes (see the X-Particles project settings). A very high stiffness can cause unstable solving.
- Collision tab: This tab provides very simple particle to particle collisions but is much faster than the P-P Collision object and solves as part of the constraint. In other words, the collision can be a condition to the final solution of the constraint and not just an absolute value.
- Forces tab: These are forces which act between particles but there is no connection made between the particles.
- You can get a higher and more stable viscosity with this as a lower (not 100%) value and more iterations/subframes. By having a softer constraint and more iterations/subframes you enable the particles to avoid large changes which can result in instability, especially when solving against other constraints (including fluids, FLIP and SPH). This is something new to me. Lower % but higher iterations and subframes. For stability
- Surface Tension tab: Surface tension is similar to the ‘Attraction’ force (‘Forces’ tab). It is an attractive force between the particles, except it only happens at the ‘surface’. This is an SPH surface, so it is determined by a radius around each particle that contributes to an overall surface, much like the Skinner and SPH Fluid object
- This is best used with another constraint (Forces or Collision) to keep the particles apart and create an inner force to give volume.
- Inner: As in the ‘Attraction’ force, this is the closest distance the force is allowed to prevent collapse. If using with SPH fluids set this to be similar to the SPH radius to allow the SPH to control the density of particles within this distance.
- Animate stiff ness from 40% to 100% so it pops back to its shape
- The more iteration the more rigid. This means you might need to reduce the stiffness parameter to achieve the same result.


**xpDynamics**

- For the soft body to function, set the update points.
- Flame is already emmisive. so it won’t light up
- within xp dynamics tag uncheck update points to make it rigid body rather than softbody
- within xp dynamics tag activate push and crank it up to 100 %
- 1) most vital – projectsettings -> xparticles -> substeps at least 2 and iterations 30 collisions 200 help with your file
- Need xpConstraints for the objects with xPDynamics tag to collide properly.
- Spline Dynamics Must have zero rigidity and have 100% structural constraints


**xpCloth**


- Most of the control over the cloth is given by the xpClothTag; in fact, the deformer and modifier have no parameters you can change.
- Collisions on cloth:
- You may want to add features such as friction to prevent the cloth sliding over the object. See the emitter’s Extended Data tab (Physical Data quicktab) for details on how to add and change friction.
- cloth is not tearing. check the project settings. have a lower quality


**xpCollider**

- Collider Tag. Self Collision. Good for the Cloth so that they don’t intersect with each other.
- Is the collision offset distance in the Fluid FX Collider tag sufficient? The default is zero, but internally this is difficult to resolve and you may see better results with a small non-zero value in this parameter.
- In the X-Particles Collider tag, there is a list of Actions to be carried out when a collision occurs. However, please note that with Fluid FX, particles will collide with an object but will NOT trigger actions. This 
- s currently a limitation of Fluid FX.
- Sometimes collisions with geometry or can be rather jumpy, tending to throw particles at high velocity. If this happens, check the collision offset distance in the Fluid FX Collider tag. If it is too small or too high, that can lead to this kind of problem.

**xpFluid**

- PBD is fast but accurate. xpFluid is accurate but slow.
- PBD can be affected by other modifiers. Being essentially a particle modifier it works in a similar fashion to other modifiers and can be used along with other modifiers and dynamics objects, including the Cloth 
- bject. xpFluid is a separate solver. It can only be affected by select modifers such as flow flied.
- In general, the PBD Fluid object is simpler and often faster. But it is not as realistic. Being essentially a particle modifier it works in a similar fashion to other modifiers and can be used along with other 
- odifiers and dynamics objects, including the Cloth object.
- X-Particles has three unique solvers to create realistic fluid effects. Each has its speciality; FluidPBD for small-scale artistic liquid simulation, FluidFX for fast realistic small to large-scale liquid and granular 
- imulations and FLIP Domain for medium to large scale liquid simulation.
- FluidFX: The new FluidFX solver is the tool to create highly realistic grain and liquid solving, using the latest in SPH (Smooth Particle Hydrodynamics) methods for large and small scale fluid simulations. You’ll see 
- ast and accurate results, along with the mixed density support allowing you to combine water, snow and sand all at once.
- FluidPBD: The FluidPBD is a particle-based dynamic solver, ideal for small-scale fluid creation for motion design. Combined with a multitude of other X-Particles modules makes this a designer friendly solver with very 
- lexible options to achieve accurate and stable results.
- FLIP Domain: Create realistic water simulations with the volume-based FLIP fluid solver called xpDomain. The Domain is a multipurpose velocity field solver that creates smooth particle motion, without the limitations 
- f particles.
- So first off scene scale is not in fact an issue what is the issue is simulation settings. @vicnorman you were on track with Gravity. whats happening is the particles are moving to fast due to the scene scale and the 
- ravity.
- If they move in steps greater than the SPH radius the simulation wont work. so things to look at are gravity speed and substeps lets have a look.
- Here’s a scene with a real world sized glass and particle radius of .1 as you can see its not working as you expect it too
- Now we want to make it fill up more so lets do a couple of things.
- First increasing the particle radius will help fill a glass more. However that will make the solver more explosive so to combat that in the FluidFX object enable “Check Density”
- One more thing to try out you may not need it is to increase the scene substeps in this iv increased it to 3.
- xpFluidPBD Viscosity: This sets the fluid simulated viscosity. However, this isn’t “true” viscosity, it is an approximation. It adds the velocity influence of the surrounding particles, which gives a more viscous 
- otion. To make a really viscous fluid it might help to add some particle-particle attraction. You may need to increase this value quite markedly to see significant changes. Here is the reference scene with Viscosity 
- et to 300%:
- Vortocity = Turbulence (Curly)
- Repulsion: Causes the fluid particles to be push away from each other to force them to spread out more. This can be used to help to reduce particle clumping when only a few particles are close by. In this video 
- epulsion has been increased to 100%:
- Ext Pressure:
- This is a factor applied to the particles to prevent them from breaking up into lots of tiny clumps. The effect is to simulate an increase in surface tension which pulls neighbouring particles together. In this video 
- he pressure has been increased to 100%:
- Smooth Radius: The radius over which the properties of the fluid are smoothed (such as density). When this is reduced the smoothing effect is reduced and the result is more chaotic, as seen in this video where the 
- adius is set to 50%:
- xpFluidFx: Due to the solver used in FluidFX (by default it is a velocity solver) it takes over particle movement and does not interact with other X-Particles objects that move the particles. This makes it difficult 
- o use with the new X-Particles dynamics engine.
- Int Pressure: Internal pressure forces the particles apart, ensuring the fluid does not compress. It acts together with ‘Ext Pressure’ to produce a surface tension-like effect.
- Ext Pressure: External pressure pushes the particles together, ensuring the fluid does not expand. It acts together with ‘Int Pressure’ to produce a surface tension-like effect.
- Damping: Damping helps to reduce explosive forces. If you simulate a fluid with a density that is very low then the forces trying to keep the density can become very large, if the smoothing radius isn’t sufficiently 
- arge enough to smooth over enough particles (low density means the particles are spaced further apart, and if this is beyond the smoothing distance it can become unstable). Increasing this setting damps the forces but 
- lso reduces motion from the fluid.
- Friction Iter:
- Friction (between fluid particles) is only used for granular simulations. Therefore this setting has no effect unless in the emitter’s Fluid Data section you have set the ‘Fluid Type’ to ‘Granular’. You can then use 
- t to alter the friction between granular particles.


**xpExplosia**

- No emission on an object that is both collider and source? Convert to alembic
- The Bouyancy>Gravity Function differently from other gravity. Increase this doesnot mean bringing the clouds down. But is a multiplier force. You can drop this down to 3 or 4 to slow down the simulation
- Setting the the Ignition Heat to 1 means that there is no smoke at all. All hire.
- You can provide variation on the smoke by adding xpTurbulence. However, another way is to vary the ignition heat so the burn depends on how large the emitter is.
- Temperatire. density, fuel and burn
- to get a thick smoke color. you need an absorption
- for advection, you don’t need the smoke to be hi ref
- advection, you need it to exclude the xplosia domain
- For the advection, turn off smoke, burn and temperature.
- in the sufrace advection to respect the movement and not go abroad increase the velocity to 300%
- turn off adaptive bounds
- To keep the smoke nice and thin the xpGaseous modifier’s Fuel Rate needs to be quite low; in this scene, 4 was a satisfactory value.
- no need to use xpLosia if you just want the fluids effect.
- Thicker smoke
- What if we want to do the opposite and have some really thick black smoke? That’s easy. We need to do three things:
- increase the Fuel Rate in the xpGaseous modifier to a higher value (e.g. 25) to get more smoke
- increase the values in the Math multiply nodes to give denser smoke (this scene used a value of 2 to multiply the volume scatter and 100 to multiply the absorption)
- and give the smoke a darker colour than the mid-gray in the volume scatter node; here we used a Color Ramp node, driven by the density output from the point density node, but there are other ways to do this
- Sim Scale tells XP how big is the fire? value of 10 gives you explosions/camp fire scale, while 200 gives you a candle flame scale. Smaller is bigger is somewhat counter intuitive, but that’s how it goes.
- density for smoke
- use volume texture to sculpt your emission
- Source xplosia color from xparticles color. Have the color checked as part of the solver.
- Cache in houdini format. And bring in the houdinei format. Nice water settings
- Because we are not rendering, density, fuel and burn is not needed.s
- The burning rate > ignition heat: 0.8 produces more fire but less smoke.


**xpModifiers**

- For the soft body to function, set the update points.
- Flame is already emmisive. so it won’t light up
- Flock Modifier only works well in conjuction with Attractor
- Data mapping. The more faster/velocity they have, the more velocity.
- XpDrag – Density into Water Nice preset.
- xpFlowField can be a replacement to several modifiers such as follow spline/follow path/follow surface etc
- You can have zero fall-off of xpFlow Field.
- xpTurbulence Curl
- cover modifier. need some speed to transfer.
- xpspeed to limit the turbulence. nice!
- remove fall off on the xpflow field.
- XP foam with 100% buoyancy. Your shader is where the realism will come from.
- a quick and very solid solution to smooth out OVDB meshes besides of filtering is adding a “Smoothing” object:
- if you want to add a spin modifier. muyst have the rotation extended parameters to be enabled.,
- xpGenerators
- xpGenerator> Clone Type>Set to Instances.
- xpGenerator is the one that substitute your points to a mesh (candy, spheres). That is cloning objects to the particle points.
- xpGenerator can be affected by mograph effectors. So is the xSprite
- Skinner can act as boolean.
- Surface cut is still like a boolean but uses a mesh object. So one emitter being cut by a cube, sphere or any mesh.
- Newtonean gravity to create unconvential effecsts.
- The mesh should be visible for the generator (cloner equivalent) to work


**Rendering**


- Arnold Render: Just add an Arnold Parameter Tag.
- Render using Physical xParticles? Add a xPartcles settings in the render setting and also create an xParticles material
- Unable to render: You simply have to uncheck render perfect for the sphere – that´s what is stopping it from being rendered with dynamics tag….
