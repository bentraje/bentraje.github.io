************
Cycles
************


**General**


- Bump node in cycles will be the one that combines normal and bump ma.
- tiling in blender. texture coordinate (UV) > (Vector) mapping (Vector) node. > Texture (Map). In the point tab. Modify scale.
- Use generated if its an HDRI
- Reflective/Refractive Caustics
- Caustics is for indirect lighting
- Faking caustics. How?
- Cycles4d is ported over from Blender which uses XYZ axis mapping. C4D uses XZY mapping.
- You need to specify the displacement per se. By default, its only for bump
- In the materials>Settings>Surface>Displacement
- Ctrl Shift +D to duplciate node but still connected
- Shift R to repeat th process
- Getting the normals in the landscape tutorial: Geometry (normal) > (normal) Normal (dot) > (fac) Color Ramp
- Creating waves. just normal in the gloss shader.
- A couple of things to pay attention to with fluid regarding materials is the IOR (Index of Refraction). You can use a Glass Shader for most liquids. For something like milk you’ll want an SSS Shader (Sub-Surface Scattering). For something like wine though, go with a Glass Shader.
- Another thing you might try is using a Volume Absorption Shader in conjunction with your Glass Shader to make your wine look thicker where it is denser. Red wine has sediment, so it will be a much deeper red the further in you go. A Volume Absorption Shader can help you get this look. Play with the “Density” value until you get something that looks right to you.
- In Cycles4D, to get an alpha. you need the native c4d alpha channel tick and also the film transparent.
- If we want to control this manually ourselves we can simply add a gamma node set to 0.454 (linear to sRGB) or 2.2 (sRGB to linear) instead of switching that non-color setting.
- So as shown a height map used for a bump node and that same height map converted to a normal map and then plugged in a normal map node will shade differently. That is something we may need to bare in mind, to the point where we may want to tweak the shader settings, the specularity of lamps and the bump strength to make them look more similar to each other.
- Normal Map Texture > Normap Map > Normal Map (Principlied BSDF)
- What if you want to have normal and height? You use the Bump Map. I know confusing.
- Noise: Manifest in It manifests in one of two ways: grain and fireflies.
- Regarding the fireflies: In this case throwing more samples at the problem won’t get rid of the problem completely.
- Blurring glossy reflections slightly will reduce fireflies.
- Using the Filter Glossy control to blur glossy reflections will reduce fireflies.
- Increasing the light size will reduce and may abolish fireflies
- Turning off multiple importance sampling for a light will remove fireflies but also other important lighting components.
- In fact, Cycles 4D has two types of caustics, reflective and refractive,
- Which is pretty good, but remember that in many cases you will want those caustics! You will also lose indirect lighting from the sphere, which may be undesirable.
- Use Clamp Direct and/or Clamp Indirect to control fireflies.
- To simplify that stuff, I’ll just say that many objects are more reflective the more their surfaces are angled away from the view. On the contrary, metals are not, so they are equally reflective at all angles. In another words, it depends on Fresnel coefficient.
- To create a convincing illusion of depth inside the ice, place something right inside your cube of frozen water. For example, insert another piece of ice
- Add Translucent to the refractive shader for the ice thing ray length node
- Try clamping indirect samples even more: maybe something like 1 or even 0.3?
- Also, enable Multiple Importance Sampling in the background settings. And set its value to 1024 or 2048. Hopefully, that should reduce noise (even without clamping).
- Soft shadows are going to be noisy. That problem can be solved in Branched Path Tracer. Turn up the light samples count in the light source.
- Big Light is equal to soft light
- Dirk follows with a great tip: “When you photograph something that needs a softer touch, move the light closer to your subject or add a diffusion device like a soft box or umbrella.”
- In another words, move the light closer or make it bigger.
- How does the clamp work? When the pixel brightness goes over some value, the clamp prevents it from getting brighter. So, set it to 1 to keep lighting at bay.
- Yes soft light is about having a big light source up close but there is another point; fade out. Basically if you have a light that is VERY close to the model it will change intensity very quickly with distance because of the formula intensity = 1/(distance squared) . This means that the models nose will be quite bright but as you come to the ears the light as already fading out quite a lot.
- The sun can’t penetrate a deep fog layer, so the light reaching the ground seems to come from all directions.
- Now compare it to a day lighting. During a daytime, you see only one dominant light source, plus the softbox of the sky. On the contrary, the night throws hundreds of small light sources at us..
- If you want to create an awesome night highway lighting setup, be ready to handle 10, 20, 100 light sources. Tiny, sharp, and overly bright for sure.
- Have you ever noticed that night doesn’t feature soft lights? As the lamps are small, and the city is nothing more than a distant glowing chain, the shadows are very hard.
- When light is refracted through the dirt windshield and then passes through the lens of your eye, you see an overwhelming lens flare. It often looks like a streaks of light, stretching into different directions. Sometimes, it looks like a quasar: a huge vertical ray.
- Honestly, I find that SSS and Translucent shader with raylength node plugged in behave in very similar way. Though, it becomes the matter of personal preference. Yes, I would recommend SSS for grapes 🙂
- Form what I’ve found you don’t need more than 256 samples with de noosing turned on unless you’re doing volumetrics
- you can’t render if the camera is inside the volume
- slope equals speed
- light size. need to have more samples if it is smmaller
- density is 0.002
- anistorphy 0.5
- WTF?
- map range node better than color ramp.
- in volume. it’s almost always necessary for the BPT tracing.
- Bounces 0: Volume samples 4
- volume anistorpy is a somewhat fall-off. more anistorpy means (i.e. closer 1). it will closer to the light source)
- to preview node. hold the node and Ctrl+Shift+LMB
- more info https://gregzaal.github.io/node-wrangler/
- Metal no diffuse color. Color comes in tintid reflection
- sun has no decay
- using the poitiness in the geometry node to determine the peaks and highs.
- box texture > blend is quals to triplanar
- Homogeneous Volume. Assume volume has the same density everywhere (not using any textures), for faster rendering.
- HDRI Lighting: Not really an object but through a separate setting. Click on the world Tab. Import HDRI Texture. To rotate, change vector>mapping and vector>texture coordinated.
- World Settings>Multiple importance sampling. Only available in using HDRI
- Remove fireflies: increase or match map resolution setting to the HDRI map.]
- Get rid of fireflies? Aside from increase samples, use clamping.
- Try to avoid alpha transparency if there are better ways (i.e. 29 min vs 16 min)
- Scene>Use GPU Compute
- Reduce max light bounce. Default is 12. You can get by 5 or 6.
- Shift+Ctrl+Click on the Node to render it directly.
- View the texture in blender. Blender View. Select all the components and select the texture dropdown in the UV/Image Editor. On the Cycles Render. Have to add a node. Also press N for the shadeless render
     

**Volume Rendering**

- By default, Cycles4D sets Step Size at 10. Set Step size to 1.
- Houdini Pyro to Blender Cycles
    For testing, export default Pyro Explosion Shelf set-up from houdini to VDB.
    Import it with the new volume object container (2.83)
    Density (25). Black body Intensity (1000). Temperature (4000). Temperature Attr (Heat)
ss

**Optimization**

- Limit the number of bounces to four, and you will experience incredible render speed.
- In practice more bounces will introduce more noise, and it might be good to use something like the Limited Global Illumination preset in the Light Paths Section that uses fewer bounces for different shader types. .
- Diffuse surfaces typically can get away with fewer bounces, while glossy surfaces need a few more, and transmission shaders such as glass usually need the most
- Also important is to use shader colors that do not have components of value 1.0 or values near that; try to keep the maximum value to 0.8 or less and make your lights brighter.
- High values for the color components tend to introduce noise because light intensity then does not decrease much as it bounces off each surface.
- Turn off some lamp’s shadows, using only one or two main sun lamps to cast shadows. A few “shadows only” lights will render faster than every light having shadows on.
- On Clamping: If set too low this can cause missing highlights in the image, which might be useful to preserve for camera effects such as bloom or glare. To mitigate this conundrum it’s often useful to clamp only indirect bounces, leaving highlights directly visible to the camera untouched.
- When you decrease “max steps”, you will decrease the number of bounces the render engine has to calculate before a light ray is turned off.
- In reality light in a vacuum will always fall off at a rate of 1/(distance^2). However, as distance goes to zero, this value goes to infinity and we can get very bright spots in the image. These are mostly a problem for indirect lighting, where the probability of hitting such a small but extremely bright spot is low and so happens only rarely. This is a typical recipe for fireflies.
- To reduce this problem, the Light Falloff node has a Smooth factor, that can be used to reduce the maximum intensity a light can contribute to nearby surfaces. The images above show default falloff and smooth value 1.0.

**Gobo**

- Normal to vector mapping for light textures and gobo
- as a light texture pala ito
- does not work with sunlight

**References**

**Node Studies. Blender**
- https://docs.google.com/presentation/d/1ggss5H_XdWtIZ825iRuUjk7svvzdoPWM-cP1yv4kCCc/edit?fbclid=IwAR3TWwNcU2z7mw0iZmzmWcEwdPEOh-RxeiADkz2opB9_PKACCWzXq_KQ5Z4#slide=id.g500010a94b9d5336_9
