# MotionBlurJS
## What is MotionBlurJS
**MotionBlurJS** is a lightweight JavaScript library that allows your animations to shine with homemade native CSS Motion Blur and Motion Fade while keeping your code clean and your CSS animations smooth.

## How does it work
**MotionBlurJS** will duplicate your objects so they can get blurred or faded on runtime, the code will compile into a clean version of the motion blur and the DOM will only show the necessary objects, in order for it to work properly the blurred object has to be positioned absolutely and to be animated with keyframes CSS animation

## The simple method
You can use *MotionBlurJS* by simply linking to it in your document head tag like so:
```HTML
<head>
    <script src="https://www.motionblurjs.com/blur.js"></script>
</head>
```
After that, all you have to do is naming the class of the div you want to blur to either the **blurjs** or **fadejs** class, you can mix it with your current classes as well by separating those with spaces, like so:
```HTML
<div id="yourId" class="someClass blurjs"></div>
```
or
```HTML
<div id="yourId" class="fadejs someClass"></div> 
```
## The dynamic method
This method will allow you to dynamically blur the objects even if they won’t load with the page itself, to achieve this just add this img tag inside the div you want to blur, like so:
```HTML
<div id="yourId" class="someClass">
    <img src="" onerror="blurMe(event);" style="display:none !important;" />
</div>
```
or
```HTML
<div id="yourId" class="someClass">
    <img src="" onerror="fadeMe(event);" style="display:none !important;" />
</div>
```

## Bug report
This code is under active development, if you experience any bugs or kinks, feel free to report those through Github or by mail: motionblurjs@gmail.com please mention which method you were using and if possible, send me your code snippets, happy coding !
