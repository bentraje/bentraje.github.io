********
  Introduction
********


- Maya offers several programming language.
    - MEL
    - maya.cmds (Python)
    - PyMEL (Python)
    - OpenMaya (Python)
    - C++ 
- Except for C++, all of them can be used for scripting
- Only C++ and OpenMaya (Python) can be used for Plugins
- You can use all the Python flavors (i.e. Pymel + OpenMaya) in one python file. Although you might have to wrangle some variables if you want to pass data not native to python (i.e. custom objects)
- C++ was the oldest (as it is the language Maya is made of).
- MEL was made available for easy user programming. C++ can't be used for scripting since it needed to be compiled. 
- maya.cmds was made available as Python was becoming popular. maya.cmds is just a wrapper of MEL commands. 
- PyMEL was initially made as a third party library by Luma Pictures studio and was made available for public. Autodesk eventually picked it up and became a native language. PyMEL makes an object-oriented implementation (i.e. Pythonic) of the Maya API. maya.cmds, since just a wrapper, is still heavily procedural oriented. 
- OpenMaya is heavily based on C++ API, which makes it capable of creating plug-ins. It's also harder to write since the commands are not as abstracted compared to other Python implementations. 
- Despite having several languages, none of them are deprecated. The most logical language to learn and invest to is Python, as it is available not only to Maya but to all other major DCC.
- There is not much changes in Maya in the past decade, a blessing and a curse. Scripts you can find even on abandoned forums just works. Makes it easy to pick up any Maya language. 


MEL
---

- Variables have ``$`` prefix. 
- ++$aa is different from $aa++
- To invoke the previous MEL Command, in the MEL Command tab press the up arrow key.
- Multi line comment ``/*``. Single line comment ``//``
- Name cannot be start with a number
- For file paths, MEL reads forward slashes and not back lashes.





..  code-block:: C++
    :caption: General Syntax
    :linenos:

    $my_Values[] = {1,2,3,4,5,6};
    // You can access individual elements by numbers (starts with zero) (i.e $my_Values[2])

    matrix $m[3][5] = <<1,2,3,4,5;6,7,8,9,10;11,12,13,14,15>>

..  code-block:: C++
    :caption: Flow Syntax
    :linenos:

    // If/Else Block

    if ( $a == $b) {
        ...
    } else if ($a > $b) {
        ...
    } else {
        ...
    }

    //Compare $a with the result of whether $b is greater than 10. 
    //If true, then $c is used. 
    //If false, then $c is subtracted by 10.
    $a = ($b > 10) ? $c : ($c - 10);

    //Basic for loop
    int $i;
    for ($i = 10; $i > 0; $i--) {
        print($i+"...\n");
    }
    print("Blastoff!!!");
    string $arry[3] = {"red","green","blue"};

    //Iterate through each k variable in arry
    for ($k in $arry) {
        ...
    }

    // Procedures or Functions

    global proc <return type> <name>(<arg list>) {
        ...
        return <exp>;
    }
    global proc float squareAndAdd(float $x, float $y) {
        return $x * $x + $y;
    }
    square(5.0, 2.0);
    27


    setAttr("mySphere1.translateX",10); // Function syntax
    setAttr mySphere1.translateX 10; // Command syntax

    $a = getAttr("mySphere.translateX"); // Function syntax
    $b = `getAttr mySphere.translateY`; // Command syntax

..  code-block:: C++
    :caption: Do something on selected objects
    :linenos:

    string $sel[] = `ls -sl`;
    for ($each in $sel){
        $rescale = $rescale + 1;
        scale $rescale $rescale $rescale $each;
    }

..  code-block:: C++
    :caption: Execute a MEL file inside a procedure
    :linenos:

    global proc savePose(){
    rehash;
    eval ("source savePoseUI_DT.mel");
    }
    savePose;

..  code-block:: C++
    :caption: Creating stairs
    :linenos:

    float $stepH = 4;
    float $stepW = 24;
    float $stepD = 8;
    int $numSteps = 6;

    for ($i = 0 ; $i < $numSteps ; ++$i) {
    polyCube -h $stepH -w $stepW -d $stepD;
    move -r 0 ($i * $stepH) ($i * $stepD);
    }

..  code-block:: C++
    :caption: By default, MEL commands are in creation mode. Need specify query or edit mode on existing objects
    :linenos:

    polySphere -name "Fred"
    polySphere -query -radius
    polySphere -edit -radius 5 "Fred"


*******
PyMEL
******


..  code-block:: Python
    :caption: General syntax
    :linenos:

    for x in ls( type='transform'):
        # object oriented design
        print x.longName()
    
        # make and break some connections
        x.sx.connect(x.sy)
        x.sx.connect(x.sz)

    x.sx.disconnect()
 
    # add and set a string array attribute with the histor
    x.setAttr('newAt', x.getShape().history(), force=1)


**Quirks**

- You can access an object directly through a name. Blessing as it is convenient, but a curse since if you rename the object, the code will break. In this case, you'll end up using PyMel and storing it as a proper object variable
- Some weird instance where you need to slice a list from a Python methods.
- In python for constraints, the affected object are shown first while in MEL it is last.