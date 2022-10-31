
# Python


- Ctrl+Spacebar to Autocomplete in the console
- bpy.context = C
- bpy.data = D

```python
bpy.context.scene_Frame.current
bpy.ops.render.render(use_viewport=True)
bpy.data.scenes["Scene"].render.filepath


for f in mesh.polygons:
    for i in f.loop_indices:
        l = mesh.loops[i]
        v = mesh.vertices[ l.vertex_index ] #the right vertex
        map = mesh.uv_layers['UVMap'].data[i] #the right uv mapping
		
        
```

```python
bpy.ops.object.mode_set(mode='POSE')
import bpy

bpy.ops.import_scene.gltf(filepath="C:/Users/Luke/Desktop/Blender_Dota/props_debris/battle_debris1.gltf", filter_glob="*.glb;*.gltf", loglevel=0, import_pack_images=False, import_shading='NORMALS')

import bpy

bpy.ops.wm.save_as_mainfile(filepath="C:/Users/Luke/Desktop/save_test.blend")

import bpy

bpy.ops.wm.save_as_mainfile(filepath=bpy.data.filepath)
bpy.ops.wm.open_mainfile(filepath=bpy.data.filepath)
```

```python
import bpy

old_armature = bpy.data.objects['metarig_old']
new_armature = bpy.data.objects['metarig_new']
old_bone_list = old_armature.pose.bones

for old_bone in old_bone_list:
    
    if old_bone.constraints:
        
        for old_constraint in old_bone.constraints:
            
            if old_constraint.target.type == 'ARMATURE':                
            
                new_bone = new_armature.pose.bones[old_bone.name]
                new_constraint = new_bone.constraints.new(old_constraint.type)
                                
                new_constraint.target = old_constraint.target
                new_constraint.subtarget = old_constraint.subtarget
                new_constraint.target_space = old_constraint.target_space
                new_constraint.owner_space = old_constraint.owner_space
                
                new_constraint.invert_x = old_constraint.invert_x
                new_constraint.invert_x = old_constraint.invert_y
                new_constraint.invert_x = old_constraint.invert_z
                
            else:
                pass
            
    else:
        pass
```

```python
import bpy

armature = bpy.data.objects['Armature_proxy']
bone_list = armature.pose.bones

for bone in bone_list:
    print (bone.name)
    
    if bone.constraints:
        for constraint in bone.constraints:
            print (constraint.target)
            print (constraint.target.__dir__())
            if constraint.target.type == 'ARMATURE':
                print ("yahoo")
                
    break

constraints.subtarget
```

```python
import bpy

modify parameters
bpy.data.objects['Cube'].location = (1,2,3)

retrieve selected object 
bpy.context.active_object
or 
bpy.data.objects

C.selected_objects (Selected objects)

bpy.data.objects (All objects)


for ob in bpy.data.objects: print (ob.name)
for ob in bpy.context.selected_objects: ob.scale = [2,2,2]


bpy.data.objects = list all objects of all scenes
bpy.context.scene.objects = list object in the selected scene. 
```