# Week 1

## Introducing P5js 
For full documentation visit [p5js.org](https://p5js.org/)

p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else!

### What is JavaScript?

For full documentation visit [Javascript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)

JavaScript is a programming language that allows you to implement complex functionalities on web pages. It integrates a lot of front-end functionalities (client-side, i.e. how the website looks) but can be also used for back-end when used with a runtime such as [Node.js](https://nodejs.org/en)

### Some Terminology

| Syntax | Description |
| ----------- | ----------- |
| Sketch | These are used to refer to quick iterations of small creative coding programs written in P5js. |
| Programming Sketchbook | This is a collection of P5js sketches. Just like with a normal sketchbook, the idea is that you work out a variety of different ideas in code and present them as a collection. |
HTML/CSS | The other main languages, other than JS, used on the web are [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps). HTML is used to define the content while CSS is used for the visual output. |
Canvas | A [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) is an HTML element that is intended for drawing graphics in web pages. Although it can produce other kinds of output, such as sound, P5js mostly uses the canvas element for its visual output. |
Processing | P5js is a translation of an older creative coding environment called [processing](https://processing.org/) into JS.  Code written in Processing looks similar to code written in P5js and most of the functions are named the same. |


---
## Understanding the Sketch
There are two function declarations for the 'skeleton' program: the setup() and the draw().

### The setup()
- The setup() function is called once by P5Js when the sketch first loads.
- this creates the canvas

```JavaScript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```