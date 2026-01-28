import React from "react";
import REACTDOM from "react-dom/client";
import "./index.css";

// REACT ELEMENT IS A JS OBJECT
// PROPS -> children + attributes
// jiski koi id nhi hai vha empty obj aayega 

const heading = React.createElement(
  "h1",
  {id: 'heading', xyz: 'abc' as string},
  "hello world from react!"
);

console.log(heading);

const root = REACTDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(heading);


/* how to create these nested elements in react ?
  <div id="parent">
      <div id="child1">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
      </div> 
      <div id="child2">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
      </div> 
  </div>

*/

// nested html structure in raect
// ReactElement(object) => HTML  (Browser understands)
// agr 1 se zda sibling bnaana hai toh wrap everything up in an array


const parent = React.createElement("div", {id: 'parent' as string}, [
  React.createElement("div", {id: 'child1' as string}, 
    [
       React.createElement("h1", {id: 'heading' as string}, "i am an h1 tag"),
       React.createElement("h2", {id: 'heading' as string}, "i am an h2 tag")
    ]),
    React.createElement("div", {id: 'child2' as string}, 
    [
       React.createElement("h1", {id: 'heading' as string}, "i am an h1 tag"),
       React.createElement("h2", {id: 'heading' as string}, "i am an h2 tag")
    ])

]);
root.render(parent);


// JSX