************
Vellum
************





- In Vellum cloth, increase substeps is better than increase constraint iterations
- Jeans have plasticity enabled
- volume is stored in the rest length attribute
- animating the attribute on the vellum constraint it does not work. because by default, the vellum solver doesn’t accept animated parameters outside the vellum solver itself. You need to animate it inside the vellum solver using the vellum constraint property
- By default, constraint group will come only in two: bend and stretch. However, . if i animate the stretch, not only will it change the pressue constraint but also the cloth constraint. So, use the output group and have it renamed to pressure_stretch. So now you will have three, bend, stretch and pressure stretch.
- Particles source to vellum
- Second go inside the DOP network of the vellum solver. In the vellumsource change “Emission Type” from Only Once to Continuous, otherwise is going to take just the first frame.
- Vellum uses continuous collision detection. This is great to avoid fast moving geometry teleporting through your cloth, but is useless if your points are randomized every frame.
- Generally you don’t want your `pscale` to be bigger than your edge length, which could cause self intersections.
- ellum does pre-processing, like bullet does, on the original geometry so it doesn’t explode even if points are on top of each other. It records the original distances into attributes and uses those to reduce `pscale` for collisions. When the cloth separates, these attributes will be relaxed so the cloth won’t got back to too close. Setting a too large `pscale` likely won’t blow up the cloth, but it will do collision tests with the large pscale. This can cause your cloth to crawl to a stop.
- Constraint Iterations: These allow the stretch and bend constraints to work. To get stiff, non-stretching, or non-bending, cloth you need larger numbers. These are usually cheaper than you think.
- If you increase substeps, the amount of forces effectively go down, so you can reduce iterations.
- Collision Passes:
- Handles both external and self collisions. These are interleaved between the constraint iterations. For example, if you have 50 iterations and 5 collisions, it will do 10 iterations between each collision. Increasing this helps with failed collisions, but also consider increasing substeps instead.
- 2. Having 2 substeps and 10 collisions is about same cost as 1 substep and 20 collisions, but the former will likely be better.
- 8. If things seem to stretched out, increase constraint iterations. Increasing substeps will also help with this, but iterations are usually cheaper.
- 9. This reduces the error that has to be fixed as everything moves less. Higher res cloth seems to need more substeps
- Vellum fluids and FLIP fluids are completely different solvers and they're not able to interact.
- Mainly used for small-scale simulations, e.g. splashes, pouring water, or object-filling
- Vellum fluids don’t export fields for the generation of secondary effects like foam or spray.
- Vellum fluids usually require higher substeps, typically between 5 and 10 substeps for simulations with low viscosity and surface tension. Higher substeps have lower impact on the GPU.
- Vellum fluids use fixed substeps. FLIP has variable substeps
- Highly viscous fluids generally require higher substeps to avoid instabilities.
- Vellum fluids support multi-material simulations. Interaction with other Vellum objects, such as cloth, softbodies, balloons, and grains is possible
- FLIP FLuids can only interact with collission
- Vellum fluids don’t support air compressibility. FLIP Fluids support Simulation of air compressibility, for example to create bubbles.
- Vellum Fluids Not distributable.
- Vellum No ID and age attributes with particles.
- Narrow band technology is not available for Vellum fluids. Narrow band speeds up tank-like simulations, e.g. shores and open ocean waves.
- Using a Planar Patch instead of a grid.
- For custom clothing panel shapes that are not square, however, I tend to draw curves and use the ‘Planar Patch from Curves’ node. A Resample SOP after each drawn curve allows for the same procedural control for boundary point counts.
- For instance, stiffer cloth will require higher Bend Stiffness values, and so a lower resolution may be used. In comparison, a softer material like silk will require lower Bend Stiffness values, and a higher resolution will be needed. You can test and optimise this according to your scene.
- static on the solver 5 so it would stick and not slide
- and there is a plasticity that i never played with that supposedly does perma deformations
- EDIT: at the end, vellum sucks to maintain rigidity with many points on curves, Wire DOP does a better job. I didn't know that, fucking hell, all the time I spent trying....!
- mass only changes when the total area size of the polygon changes and not the total number of points.
- generally you dont want you pscale to be bigger than the edge length scale as it will cause penetration,
- edit. loading edit.
- very high resolution with very high bend stiffness needs a large amount of iteration to converge.
- vellum parin tapos ayung crypto is doing its mask thingy.
- thickness is save as pscale attribute
- having plasticity turned on means you can have a new rest shape.
- stiffness dropoff is based on angle.
- increasing the stiffness dropoff (in the decereasing mode) helps you to create folds.
- "Match animation" means the pin follows an animated geometry, it has nothing to do with animating the constraint. It's not falsely named - you just falsely assumed what it means
- You can't actually animate a pin constraint (since it's technically not a constraint) directly - you can create the same result though by setting the mass attribute to 0 - or not 0
- ``Hit G`` to simulate in vellum brush