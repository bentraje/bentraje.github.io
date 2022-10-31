# Generic Python Libraries


```{eval-rst}
.. toctree::
   :maxdepth: 2

   json/index.rst
```

```python
def interpolate(x1: float, x2: float, y1: float, y2: float, x: float):
    """Perform linear interpolation for x between (x1,y1) and (x2,y2) """

    return ((y2 - y1) * x + x2 * y1 - x1 * y2) / (x2 - x1)


print (interpolate(x1=-100, x2=100, y1=20,y2=50, x=0))
```