import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// JSX - it isn't HTML in JS, it's html like or xml like syntax
// jsx isn't a part of react
// the same above example created using jsx
// jsx (transpiled before it reaches the js engine)
// JSX => Babel transpiles it to React.createElement => ReactElement => JS Object => HTMLElement(render)

const jsxHeading = (
<h1 className="head" tabIndex={1}>
  Namaste react using jsx
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(jsxHeading);

// React components :
// class based components --> old way of writing code
// functional components --> new way 

// React Functional Component -> normal js fn that returns some piece of jsx code/ React element
// both the headingComponent's syntaxes are same !!

const Title = () => (
  <h1 className="head" tabIndex={1}>
  Shreya Chopra 
  </h1>
);

const number = 1000;
  
// this is component composition -> jab ek component ke andar doosra component ho
// hum koi bhi js code ko bs ek curly braces ke andar agr jsx mei daale tb bhi vo execute ho jayega ! 
const HeadingComponent = () => (
  <div id="container">
  <Title />
  <h2>{number}</h2>
  <h1 className="heading">namaste react functional component</h1>
  </div>
); 

// const HeadingComponent2 = () => {
//   return <h1 className="heading">namaste react functional component</h1>
// };

// react component will always be rendered like this !
root.render(<HeadingComponent />)