************
Arnold
************

**General**

- Samples in the light is for the direct diffuse.
- Eliminate fireflies? Clamp values by 2.
- Tx files makes it at mid-mapped immediately. Mid-mapped is larger than the original file because it contains different resolution. Mid-mapped helps when the object is far away from the camera, it immediately downsizes the texture resolution.
- Normalize will break the control for the size, exposure and radius tool.
- To create a mesh light, change the arnold translator from poly mesh to mesh light under the shape node.
- Get used of higher samples. Light Samples 7. Diffuse 6.
- Mix Bump Map and the Normal Map. Be sure to plug in the Normal Map first then to the Bump2D
- Creating background to appear. Separate. Create an arnold sky to illumate and in the sky slot, add an image with the visible diffuse and cash shadows ticked off.
- Create a Physical Sky work flow. Create a physical sky , it is only a background element. If you want to add some illuminatin, create an arnold sky and drag the physical sky maerial.
- Bake selected geometry yun pala.
- Interior. Use quad light and distant light
- Use Light Decay. Far end. 5. smaller value.
- Diffuse depth rays, much more higher. Ray depth later nlng. pag hapit na mahuman.
- Bake the noise
- Script to Add a Tag and name it according to the layer name. (Why not object ID nlng) nlng?
- With the window it is too impossible. So composite nlng.
- In addition, spin the UV using the 1.2 or 1.3 method.
- Reverse Gamma. Oh yea. to increase contrast
- Light filters are only for spot light?
- There’s two denoisers. Here’s when to use them:
-     Use the OptiX Denoiser for fast (GPU-powered), slightly-lower quality denoising of IPR
-         Use the Arnold Denoiser (aka noice) for high-quality denoising of final frames and animation sequences
- There’s two denoisers. Here’s when to use them:ss
- UDIM Maya. Just make sure the tiling option is set -up. By default, it is off so it won’t work right off the bat. And just add the token <UDIM>
