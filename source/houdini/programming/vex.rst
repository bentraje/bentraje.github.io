********
  VEX
********



**General**

- One of the most comprehensive VEX attribute reference: https://wiki.johnkunz.com/index.php?title=VEX_Attribute_Glossary#What_is_VEX.3F

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