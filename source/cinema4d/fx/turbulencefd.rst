#############
Turbulence FD
#############


**General**

- Basic Workflow
- Add the Turbulence Container.
- Add an TFD Emitter tag to an Object.
- Set the Tag>Channel>Temperature to at at least 1.
- All kinds of particles can be advected by TFD and follow the physical rules of the simulation.
- You can offset cache of TFD to make two different flames but still in the same cache (i.e. saving file). Rendering>General>Frame Offset
- Problem: On Dry Ice, the emission is somehow trapped in the collider.
- Advection
- To advect particles, it is necessary to Cache the velocity of the TFD simulation.
- To advect, there is no necessary voodo. Just have the emitter on top of the TFD simulation (per viewport) and have the Simulation>Velocity>Particle Velocity Scale to 100%
- Except for the thinking particles. It requires additional voodoo.
- Fuel mask channel.
- Thick smoke, have the opacity set up to the left.
- Multiple Scattering is needed for the fire to light the smoke.
- Get the atmosphere pass for the compositing of the fire and smoke.  
- Your Collision-Object doesn't have an actual thickness. You extruded it without having "Create Caps" enabled in the extrude tool. So your object doesnt have an inner wall...
- Also you will have to make the object quite thick, because if the wall is too thin, it's thinner than the voxel size and will leak..
- Timing is for the slowmotion
- That mountainous smoke shader mapping
- Animated noise is nice!
- Object can be collider and an emitter at the same time
- TempDiffussion is just a blur. like having a kamekameha.
- negative pressure is like an attractor.
- Faster render. Set the smoke shader to 0.01 instead of 0.0000
- Avoid having the same number of small and large size in the turbulence
- Sub grid detail is nice to enhance the detail. Pseduo. But make sure to the velocity is cached.
- Arnold Render: Add a Volume Material to the container. Then have the channel in the density set to smoke.
- You have to increase both the regular sample and the volume sample to reduce noise.
- Increasing the quality of the volume is to increase the step size from 10 to 1.
- Use a small or no distance between smallest size and largest size.
- Ignite TFD
- Adjust Illumination Resolution: 100% to 50%
- Step size and shadow step size from 50% to 90%
- Illumination resolution 100% to illumination resolution 50%. 
- In TFD, to have the density old to affect. Is have density only and no temperature. Temperature is the one that causes things to rise up.
- Emitter Raidus and Velocity Weight matters a lot.
- TFD emitter and TFD container must have same radius/voxel values. If your emitter has more resolution than your object itself, you are creating a lot more stuff for your computer to think.
- collission size should be higher than voxel size so they don't penetrate. Collission size is manually determined using just a plain primitives.

**Channel Settings**

- Higher temperature means the smoke/fire rise faster.
- Density is for the smoke, dust or dry ice.
- Fuel only matters if it catches fire.
- Use the Burn Value to create a fire. (And also temperature)

**Solver Settings**

- The turbuluence. Higher values are okay say 350cm. And the smallest and largest size. Actually matters. Smallest size is somewhat similar to the voxe l size
- Velocity in the simulation tab deals with the particles
- Vortiity and turbulence normally applies uniformaly which is not not that good for instance small swirl will get the same effect with the large swirl better map it to a channel
- Damp Velocity is like the Viscousity