# API 2.0


## General

- No one is actually calling this as API 2.0. lol. But Maya calls it this way and its way easier to differentiate the old and newer API. 
- Maxon. 2.0. Classic. 2.0
  - `import maxon # API 2.0`
  - `import c4d # API 1.0` 
- MAXON API does not use any more integer value (e.g. Ocube to describe the ID corresponding to a cube) to represent things instead they use reverse domain approach (e.g. "net.maxon.animation.autoweight.base.jointcount" represent the joint count parameter). These reverse domains are strings but the type to represent them is maxon.Id.
- Then come the DataDictionarry part, this is almost similar to a BaseContainer, except that it acts like a Python dict where a key can be anything, and the value can be any maxon.Data.

