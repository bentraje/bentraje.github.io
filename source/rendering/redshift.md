# Redshift



> CANON RESPONSE FOR HDRI and PORTALS?

## General

- In redshift, normal map is being phase out. Use bump map instead.
- offsetion texture node. its lifts the black. 
- Use Displacement Node. But need also to have a redshift tag on the object,. Set the maximum duisplacement and displacement scale
- AO texture (Out Color) > In Color Multiplier (Albedo or Diffuse)
- Gama ovverride on noncolor data
- Using the Ramp as a mediator.
- When placing multiple copies of a Redshift Proxy in a scene, it is much more efficient for memory and performance to create a single Redshift Proxy and then create multiple instances of this proxy and place them as desired.
- Irradiance cache, irradiance point cloud. These are not needed because progressive rendering computes GI in a brute-force way.
- When Show Samples is enabled, the noisy parts of the image will **typically be brighter because the unified sampler** will shoot more rays to try and clean up the noise. 
- When denoising is used with an animation we recommend disabling Random Noise Pattern!
- Choosing a filter type and filter size highly depends on what you are rendering. For example, still images can often get away with sharpening filters such as Mitchell or Lanczos. Animations, on the other hand, usually work best with blurrier filters, like Gauss. The reason is that 'jaggies' are particularly visible on animations!
- Copy Pre-Converted Textures to Cache Folder
- Texture Processor Tool
- Sampling in RS works by **dividing the localized samples** (lights, reflection, refraction, GI, AO, Volume, SSS etc etc) by the maxUnified then the value is multiplied by the minUnified, then if the result is noisy (according to the adaptive error threshold) it shoots more samples until it considers there's no more noise or it reaches the maxUnified or localized samples value which one is bigger.
-  Place portal lights that are slightly larger than the windows right outside.
-  You got hard edges because of the sun light which is hard, you need to increase the shadow softness of the sun to get soft shadows (by a lot, try 10).
-  1.8 on metals 
-  metalness is usually brdf 
-  

> the main reason for crashes is using too much GPU VRAM (for hair and/or textures), since RT is not out-of-core.

## Portals

- The Portal light blocks and absorbs Global Illumination rays. It works by sampling light color from the RS Environment shader, either from the Default Environment (see Redshift Render Preferences/Globals/Options), from a Redshift Camera Environment or the Custom Environment link of the Portal itself (by asigning RS Environment Materials).
- In your scene, make sure that the Z-axis of the portal is directed towards the interior, as the ambient light is emitted only along the positive Z-axis of this light.
- Light Sampling Parameters
  - The following parameters are only visible and relevant when Automatic Sampling is disabled. 
  - Generally, the larger and more intense a light is, the more samples it needs to produce noise-free results. 
- Also you "can" use portals with the HDR Dome Light, but it will block the GI from objects in the exterior, but if you don't have anything outside which is bright enough to cast GI inside that it should be lighting the interior somewhat then it shouldn't matter.
- This is a limitation of how mip mapping works on envs compared to the dome light which is using Multi Importance Sampling (different techniques with slightly different results).
You'll probably get the same if instead of a dome light you'll use an env shader.
We don't have a solution for now. You just have to account for the differences.
- A portal light uses the Env shader not the Env object so create a rsEnv shader, 
- No, light portals don't work togather with Domelight, you either lit your interior with Domelight or portals+environment map.



## Interiors

- When a domelight is present in the scene in replaces any rsEnvironment that you have. The portal lights will sample the rsEnvironment directly behind them but since you are not using the rsEnvironment you are not sampling the domelight efficiently. Either disable the dome light environment or light the scene only with the dome light. The portal lights use Multi Importance Sampling through the rsEnv so they are effective for interiors.
- A 16/64/0.003 unified, 1024 samples for the lights and 1024 samples for GI should do the trick,
- IC is very good for flat surfaces but not so god on vegetation so set your plants to forced BF.
- The prepass render only computes GI nothing else, once that has been computed you simply set the GI method to load instead of rebuild. Then the final render will skip the already computed GI. No loss in render times.
- You can also try to try the GI compute with a single frame by enabling motion blur and set the length to the length of the animation, this will compute the GI for one frame but it will be the same for the whole animation, then just load it
- It's fine to have the IC or IPC preview showing a lot of fireflies, don't worry about it.
- You might be better of with just a dome light instead of portals if the hdr light is too contrasty. Portals are perfect with diffuse hdrs not great with tiny light source data inside the hdr texture due to missing MIS
- Generally speaking you don't use portals when using a dome light. You use portals when working with the environment light. Usually works best for interiors while domelights work better for wide open lighting situations. But as Adrian mentioned the domelight does do a bit better when there is a very intense high contrast lighting HDR. So it will depend on your scene and HDR which method works best.
- Reduce your direct light cut-offs.
- Well, through testing, it seems that oddly enough, placing a plane object with a glass material right outside the window and then setting the fresnel type to metalness on that material brings down the blown out whiteness quite a bit.
- Then it is normal. The stronger the bokeh, the more samples you will need. In scenes with Motion blur you can get away with lower samples, but in architectural interiors, noise is easy to spot on. Give a try to Altus denoising.

My suggestion for interior:
BF+IPC
BF rays 1024 or 2048
IPC SPP 16 or 32, retrace 2 or 4. Screen radius 4 will make it go noticeably faster, but can fail if you have thin geometry in my experience. IPC settings are mostly only needed to be changed if there is object + camera animation, and maybe light animation as well, though.


By the way, I would bet that most of the rendering time is because of the semi-transparent curtains. These tend to kick our ass when it comes to irradiance caching and this is something we've been meaning to look at for some time. When things clear up a bit, we'll revisit this. In the meantime, if you have 'thickness' in these curtains, I would suggest you make them single sided 'sheets' of geometry.

I would usually have the small overhead lights as incandescent materials with GI set to off, or actual lights set to only affect the fixture they're in. Then use large area lights to produce the actual light. 

Env is the rsSky so they pick up the sky env to cast light inside. If you have glass in your windows **turn off their shadow casting** there's no need for that.

Please remember that in the real-world all lights have a size while in CG they can be abstract and have no size (sun, point, spot). So always use a light with a size. The intensity of the BRDF is controlled by the reflections section of your material. Please have a quick read on how the rsMaterial behaves and its controls. here:

Just wanted to remind you that a mesh light needs GI to be turned on to clean up the noise so if there's no GI in the scene you can increase the samples to whatever value it won't clean it up properly.
A mesh light "samples" noise on both direct and indirect rays that's why it needs GI to be on. So those 36 seconds if GI off, might turn into 10 if GI is on, but if GI was on then maybe the scene requires that many samples.
Hope it helps.

You might be better off with just setting these detailed objects to force brute force in their object properties, and let the large surfaces likes walls and floors stay IC

There are also ways of making IPC faster, at the loss of some detail. Lowering its radius to 4 will speed things up.

I suggest you force BF on those cornices since for small details IC might be even slower than BF.

Also I would rather have 8-64 unified samples, but raise the error threshold to maybe 0.02 if it still looks ok. Would also turn on "randomize pattern on each frame" so that the noise won't be stuck to your screen.

Lowering "max subsample intensity" and "max secondary ray intensity" to 1.2 can also save a little bit, but this will remove some of the range in the image, and make it feel a bit flatter.

> If the performance is low **because the scene has many lights,** I'd start by increasing the direct lighting cutoff.


PORTALS MANY or JUST ONE LARGE

The other suggestions offered here by other people are good. If you tried mesh lights and got noise, you should raise the mesh light's num samples.

Yes, it's likely that the BF rays need to be raised, defaults of 16 I think, are just for test renders and useless for final quality.

Please note that IC is not very efficient when dealing with a lot of tiny objects that is why BF is a way better solution for these scenarios.
Noise wise, turn off GI and if it's clean then simply increase the GI samples until you're satisfied.

> Are you using an RS dome light (hdr) in your image? Try setting the correct color profile first on that image (and not use auto) try setting it to 'Scene-linear Rec.709-sRGB' and see if that helps with getting less saturated accurate colors.

> Linear Rec 709 sRGB, sRGB, Tone Un-Mapped

Controlling final the image in post is important for interiors. Tweaking your curves in particular can really sell the realism. A cryptomatte pass provides even more control.

> No, that is correct, the portal lights don't have Image based Multi Importance Sampling so they need a lot of samples to cleanup compared to a dome light which has MIS. The same happens with a textured Area Light compared to a non textured Area Light. Thus the difference in render times, diffuse environments are fast, contrasty environments are slow.

> I see... you will not use portals in general when in comes to HDRI-Lighting. Am I right? You will use it in conjunction with Redshift Sky and RS Sun. Right?

> Is the env using a high contrast HDRI or a low contrast one? If it's high contrast a dome light without portal is more efficient, if it's low contrast then the portals should do a better job

> Portal lights have no MIS (Multi Importance Sampling) support so it's harder for them to clean up noise than a regular dome light which has MIS support. Portals are effective when the env associated with them is fairly low contrast and diffuse.

> To be efficient a portal light requires a diffuse env not a sharp env as it cannot do Multi Importance Sampling. When the env texture is sharp you're better off with a dome light instead because it cannot do the MIS on the texture directly as it does it for dome lights. You will notice this on textured lights or portals (which are in essence textured lights)

> If you want to keep that specific texture either switch to a dome light or use a high number of samples for the lights or use auto sampling

> Is it pointing the right way? Also, be sure to place it outside the window, not in it.