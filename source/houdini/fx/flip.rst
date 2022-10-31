************
FLIP
************



- FLIP is a hybrid between volumes and particles. This means you can use POP nodes in a water simulation unlike in a pyro simulation.
- Another POP node that is useful in FLIP simulations is POP Speed Limit. Coupled with a POP Drag node, it works great for controlling high-velocity particles that can otherwise go out control.
- Enabling the age attribute via the Age Particles checkbox (which also exports the life attribute) makes it possible to control how a sim looks over time, especially if you have a source that is constantly emitting.
- Source fluids with POP Source, not FLIP Source
- The vorticity attribute is handy for sourcing secondary simulations like whitewater and is great for manipulating shading.
- https://www.toadstorm.com/blog/
- The traditional way to create whitewater is to simulate the FLIP fluid, then run the [Whitewater solver](https://www.sidefx.com/docs/houdini/nodes/dop/whitewatersolver.html) on top of that. However, the second step isn’t always necessary, particularly for fast-moving fluids like splashes and water jets (think a broken fire hydrant or underwater in a hot tub – and yes, these are shots from real projects!). In addition, it can be quite tricky to get the fluid to look right when meshing the particles.
- Instead, what you can do is take the FLIP sim itself and render it directly with a whitewater shader. You can either render the particles themselves, or rasterise them to a VDB and render the result as a volume. I use a mixture of the two techniques depending on what looks best for a shot. The whitewater shader that is created automatically when using Houdini’s ocean tools works quite well for rasterised particles.
- Additionally, if you have geometry that is ready to be rendered, it is a good idea to cache it out and have the Delay Load Geometry checkbox turned on. Instead of having Mantra embed the geometry in the IFD file, it will be referenced to the file on disk instead. This will help reduce load times and also drastically reduce both IFD generation times and file size. Helpful if you have a render farm and don’t want to bog it down!
- To get foam/white-water on splashes, take the velocity field from the fluid simulation and use it to advect “white” particles created within a tolerance of an SDF of the fluid surface.
- Except for surface tension and viscosity, the physics should be scale independent, and as long as you’re not bumping up against single-precision floating-point limitations (like simulating with .01m voxels 10km away from the origin…), the simulator should be scale independent too. However, the look of small-scale water (like a few cms) tends to be heavily dominated by surface tension, which historically hasn’t been handled well in solvers…



