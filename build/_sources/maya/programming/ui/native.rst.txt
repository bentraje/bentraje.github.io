*****
  Native
*****

..  code-block:: C++
    :caption: Prevent window duplication
    :linenos:

    string $newWin;

    if  (`window -exists $newWin`){
        deleteUI -window $newWin;
    }

..  code-block:: C++
    :caption: MEL UI with slider widget
    :linenos:

    window -rtf true -title "makeBall";
      columnLayout;
          floatSliderGrp -label "radius" -field true radiusSlider;
          floatSliderGrp -label "height" -field true heightSlider;
          button -label "Make Something" -command  "makeStickBall";
    showWindow;

    proc makeStickBall () {
      float $rad =`floatSliderGrp -q -value "radiusSlider"`;
      float $hei =`floatSliderGrp -q -value "heightSlider"`;
      polyCylinder -r $rad -h $hei;
      move 0 ($hei/2) 0;
      polySphere -r ($rad*2);
    }


..  code-block:: Python
    :caption: Python UI with generic multi sphere creation
    :linenos:

    import maya.cmds as cmds

    global sphereCountField
    global sphereRadiusField

    def showUI():
        global sphereCountField
        global sphereRadiusField
        myWin = cmds.window(title="Make Spheres", widthHeight=(300, 200))
        cmds.columnLayout()
        sphereCountField = cmds.intField(minValue=1)
        sphereRadiusField = cmds.floatField(minValue=0.5)
        cmds.button(label="Make Spheres", command=makeSpheres)
        cmds.showWindow(myWin)

    def makeSpheres(*args):
        global sphereCountField
        global sphereRadiusField
        numSpheres = cmds.intField(sphereCountField, query=True, value=True)
        myRadius = cmds.floatField(sphereRadiusField, query=True, value=True)

        for i in range(numSpheres):
          cmds.polySphere(radius=myRadius)
          cmds.move((i * myRadius* 2.2), 0, 0)
          
    showUI()

**Links**

- http://patrickvfx.blogspot.com/2017/07/maya-ui-layout-example.html