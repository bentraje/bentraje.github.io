************
Dynamics
************

- Half the job is preparing the geometry for destruction
- One is that scatter/fracture voodoo to have the objects in convex hull rather than concave
- Rotational stifness means it will inherent rotation when it gets hit from other objects.
- Dynamic friction is a multiplier on the friction value. And affects only moving objects.
- Collission detection change to surface collision from volume collisison
- DOP requires a manifold in dealing with collision
- Glue constraint from 1000 to -1
- Rotation stiffs set 0.5. Not default 1. this is to prevent objects spinning out of control
- A great example of this is with packed rbd's; if the incoming geo has a @deforming=1 attribute, that tells the rigid body sim to respect the non-rigidness of the shape.
- connectrivity > rest length is needed in Bullet soft t
- Assemble sop, ensures you have names on things
- RBD Constraints from Rules, one of several ways to create the lines between the RBD geo. Note that it ONLY makes the lines, for this to work with RBD requires attributes, which you get with a...
- RBD Constraint Properties - Set constraint type, stiffness etc.
- RBD Configure - Used to configure the RBD geo itself. You can select by group, or direct selection, or in this case intersecting with some boxes. The selection is used to pin the left and right sides.
- RBD bullet solver sop - do the actual solve.
- If its only a collider, directo to RBD Configure
- Unlike SOPS, DOPS is not linear. It is more of a scene description.
- Transform pieces: Low Proxy to High Proxy
- rbdkeyactive1 to use to switch from the hand key animated. 
- constraint should be in primtive attribute lagi or something 
-  