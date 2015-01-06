colorShades
===========

Plugin create a widget having the shades of single color. 

Following code is needed to show widget.

```js

$('#fieldId').colorShades({
    l_items: LIGHTER_SHADES_COUNT,
    r_items: DARKER_SHADES_COUNT,
    step: STEPS,
    base_color: BASE_COLOR
});

``` 
* BASE_COLOR is hex color code for color which shades are needed 
* LIGHTER_SHADES_COUNT is color shades lighter than base color.
* DARKER_SHADES_COUNT is color shades darker than base color
* STEPS define the how much color change during next palette color. More steps means bigger change.

Also checkout demo.html file to see example.

Note : Plugin requires following libraries.

jQuery and tinycolor library.
* [jQuery] 
* [TinyColor] 


[jQuery]:http://jquery.com
[Tinycolor]:https://github.com/bgrins/TinyColor

