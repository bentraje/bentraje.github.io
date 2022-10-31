************
Grooming
************

- https://renderman.pixar.com/from-hick-to-hipster
- Every hairstyle is different, but most of the time you will end up using the same modifiers. What makes a difference are their settings and combinations.
- The most common modifiers are Clump, Noise, Bend, and Length.
- Variation is the other key aspect for getting realistic hair and Masks are very important for this. Use them to drive as many attributes as you can, because hair consists of about 150K individual hair strands that, depending on many elements (dirt, age, length, gender, etc.), create a wide range of patterns.
- i@active = 1;
- Brushing and stroke work should be done on the guides, not the generated hair.
- Grooming should always be done on the static mesh, not the animated mesh
- comb node for coming normals haha
- Varying segment counts per curve is useful when grooming a character with varying hair length. Often it makes sense for longer hairs to have more segment counts and increasing segments for the whole character slows things down.
- How to get the hair/fur velocity. one you are inside the guide groom. you can click the curve advect shelf tool to generate the necessary nodes in drawing curves for advection
- Generating fur without any guides is useful for creating things like grass, or very short fur. This saves a significant amount of computation time. Simply turn off the Use Guides checkbox on the Hair Generate object, which will ignore guides completely and create hair straight out from the skin normal as if you didn’t have any guides.