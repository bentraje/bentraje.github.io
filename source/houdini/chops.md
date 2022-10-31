# CHOPS


- cops mosaic node. 
- in the user interface, the rotation is in degrees.
- in vex, it is in radians.
- in the attribute scope channel sope.
- P.x doesn't work. It has to be P(0)
- envelope helps you to smooth out the incoming signals.
- mops ignore zero fall offf prims
- the mops delay is not actually the equivalent for c4d delay effector
- it would mops springs effector
- If you'd like to generate stepped curves, try using the Count CHOP.
- Your CHOP track names need to be absolute paths. Otherwise they will not work.
- Geometry in CHOPs don't scale well. Simply because you are layering channels over geometry attributes, and other simulation data. Try avoiding this at all costs.
- CHOP Any nodes associated with this network type are built for editing animation curves and audio data.
- Pretty much anything that involves a curve, creates a curve through motion, or has a relation to cos,tan and sin can be edited in a CHOP network.
- velocity damping is in the actual vellum solver.
- Single threaded. One of the most oldest system/feature in Houdini. Long overdue of overhaul. 
- Filter node is the one that makes a smoother transition
- Noise. Pulse Node. 
- Fetch node is like import or object merge node but in CHOPS
  - can also use geometry node to fetch from the SOPs land. 
- Graph per single channel is also a good thing. 
- Math - post channel positive 
- chop("../chopnet1/OUT/rx")
- Set to frames instead of seconds on the  CHOPs much easier. 
- Math node can also do multiply the chop nodes. wtf haha 
- Okay this is the part where CHOPs makes it slow
  - supposing you have 120 packed points being used to copy some objects.
  - To use chops, you also need a 120 channels to work with to match each point. - You can also have lesser channels
    - if you have only 1 channel then same animation will remap to 120 points. 
    - if you have 10 channel, then every 12 channel has the same animation data. 
  - And this having many channels is grinds it to a hault. if you have 200 frames. Then you will be viewing 24,000 (200 x 120) at a given time as motion fx editor views all data of all timeline and not per frame. 
- Yea that copy to stamp old is abit tricky. Might need to reference the file again and again. copy to stamp was replace in favor of the for loop block
- Discovered that the files not working were 24 bit, when playing 16 bit audio everything is ok.
- The only time to worry about the CHOPS being transferred to SOPS for animated sequence is through the channel SOP. If you are referencing through expresssion, it will be instally referred as animated


## Audio Processing

- Only in chops where you can process audio
- Use parameter EQ to isolate one drum sound
- Normally you have two channel, you can just delete the other one through delete node. 
- H to zoom in motion fx view 
- If you are working with audio you will have to that speaker icon render view available to your nodes 
- Use envelope node to dwon sample an audio. For animation purposes, you don't need that high samples all the time (44khz)
- Use trigger to have a visually binary data removing noise/audio that is not part of the trigger threshold. 
- Resample then pulse reserve 
- hold node with the inputs as noise and binary data from the trigger node
  - nice. instead of the constant 0 1 pulse. you get a random range of 0 to 1.
- there is even a logic node. 
- count chop
- and there is also a copy stamp haha. so complicated. 
- $C refers to per channel data. Allows you to have different data per channel like for seed and offset. 
- Ahh. Finally the automatic detectioon of what is the minimum and maximum of the incoming data
  - icmin(0,0) and icmax(0,0). only works for chops though since in chops the data is for the whole timeline/range and not per frame (like in SOPs)
- s