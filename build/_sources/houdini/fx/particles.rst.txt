************
Particles
************

- for particles way better to use $ID compared to $PT
- impuls activation is per frame while constant activation is per second
- hysical tab of particles has temperature parameter
- display particles as pixels rather than points
- birth tab. jitter birth time>negative. interpolate to back. its a bit of an intensive operation though
- pop steer seek. more or less like xparticles attrractor or cover modifier
- $LIFE = 0 – 1 ($AGE/$LIFESPAN)
- $AGE = age in seconds
- $LIFESPAN = 2 second
- if you use pop torque. use also pop drag to control
- pop stream can create groups of particles from a single stream.
- pop curve furce > air resistance helps maintain the particles to the curve
- different masses only takes into account with the air drag present
- inherit color from a texture for particles can be done outside the dopnet or inside the dopnet


- rules based group.
- that is what you usually end up using.
- pop context uses normalized age. but you cant access it. you need to recreate it
- fit (age, 0, life, 0, 1)
- to pop wrangle
- point velocity node
- age bage drag
- @v *= charamp("int",, @bage)
- attribute emission. need to tick off scale point count by area. otherwise it wont work
- if you need particles to bounce, you need to use the actual simulation.
- if not. then just use pop collission detect.
- life expentancy is in seconds
- attribute noise but in multiplication.