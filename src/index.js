import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const name = "David";
const x = "App";
const y = "item";
//const el = <p>Hello, {name}</p>
//const el = <div className={x}><h3>Hello, React</h3></div>;
//let counter = 0; 
const root = ReactDOM.createRoot(document.getElementById('root'));
//function show() {
//  counter++;
//  const el = <div className={x}>{counter}</div>;
//functional component
//function Hello() {
//  return <h1 className={x}>Hello World</h1>;
//}
//class component
//class Hello extends React.Component {
//  render() {
//    return <h1 className={x}>Hello World</h1>
//  }
//}
//props in functional components
//function Hello(props) {
//  return <h1 className={x}>Hello, {props.name}!</h1>
//}
//components using components
//function Hello(props) {
//  return <h1 className={x}>Hello, {props.name}!</h1>;
//}

//function AppNew() {
//  return <div>
//    <Hello name="David"/>
//    <Hello name="James"/>
//    <Hello name="Amy"/>
//  </div>;
//}
//const el = <AppNew />;
//props in class components
//class Hello extends React.Component {
//  render() {
//    return <h1 className={x}>Hello, {this.props.name}!</h1>
//  }
//}
//an example
//function Item(props) {
//  return <div className={y} {...x}>
//    <b>Name:</b> {props.name}<br/>
//    <b>Price:</b> ${props.price}
//  </div>;
//}
//function AppNew() {
//  return <div>
//      <Item name="Cheese" price="4.99"/>
//      <Item name="Bread" price="1.5"/>
//      <Item name="Ice Cream" price="24"/>
//    </div>;
//}
//state and setState()
//class Hello extends React.Component {
//  state = {
//    name: "James"
//  }
//  render() {
//    return <h1 className={x}>Hello {this.state.name}!</h1>
//  }
//}
//class Counter extends React.Component {
//  state = {
//    counter: 0
//  }
//  increment = () => {
//    this.setState({
//      counter: this.state.counter + 1});
//  }
//  render() {
//    return <div className={x}>
//      <p>{this.state.counter}</p>
//      <button onClick={this.increment}>Increment</button>
//    </div>
//  }
//}

//hooks, hooks can only be used inside functional components.
//function Counter() {
  //array destructuring
  //const [counter, setCounter] =useState(0);

  //function increment() {
    //setCounter(counter + 1);
  //}
  //return <div className={x}>
    //<p>{counter}</p>
    //<button onClick={increment}>Increment</button>
  //</div>;
//}
//Example of special lifecycle methods for class components
//class Counter extends React.Component {
  //state = {
    //counter: 0
  //}
  //increment = () => {
    //this.setState({counter: this.state.counter+1});
  //}
  //componentDidMount() {
    //this.setState({counter: 42});
  //}
  //componentDidUpdate() {
    //alert("Number of clicks: " + this.state.counter);
  //}
  //render() {
    //return <div className={x}>
      //<p>{this.state.counter}</p>
      //<button onClick={this.increment} className={y}>Increment</button>
    //</div>;
  //}
//}
//Special Hook called useEffect to make lifecycle methods available in functional components
//function Counter() {
  //const [counter, setCounter] = useState(10);

  //useEffect(() => {
    //alert("Number of clicks: " + counter);
  //});

  //function increment() {
    //setCounter(counter+1);
  //}
  //return <div className={x}>
  //<p>{counter}</p>
  //<button onClick={increment} className={y}>Increment</button>
  //</div>;
//}
//Handling user input
//function Converter() {
  //const [km, setKm] = useState(0);

  //function handleChange(e) {
    //setKm(e.target.value);
  //}
  //function convert(km) {
    //return (km/1.609).toFixed(2);
  //}

  //return <div className={x}>
  //<input type="text" value={km} onChange={handleChange} />
  //<p className={y}> {km} km is {convert(km)} miles </p>
  //</div>;
//}
//Forms using functional components
//function AddForm() {
//  const [sum, setSum] = useState(0);
//  const [num, setNum] = useState(0);

//  function handleChange(e) {
//    setNum(e.target.value);
//  }
//  function handleSubmit(e) {
//    setSum(sum + Number(num));
//    e.preventDefault();
//  }

//  return <form onSubmit={handleSubmit} className={x}>
//  <input type="number" value={num} onChange={handleChange} />
//  <input type="submit" value="Add" />
//  <p className={y}> Sum is {sum} </p>
//  </form>;
//}
//Forms using class components
//class AddForm extends React.Component {
//  state = {
//    sum: 0,
//    num: 0
//  }
//  handleChange = (e) => {
//    this.setState({
//      num: e.target.value});
//  }
//  handleSubmit = (e) => {
//    this.setState({
//      sum: this.state.sum + Number(this.state.num)});
//      e.preventDefault();
//  }

//  render() {
//    return <form onSubmit={this.handleSubmit} className={x}>
//    <input type="number" value={this.state.num} onChange={this.handleChange} />
//    <input type="submit" value="Add" />
//    <p className={y}> Sum is {this.state.sum} </p>
//    </form>;
//  }
//}
//Rending a list
//function MyList(props) {
//  const arr = props.data;
//  const listItems = arr.map((val, index) =>
//    <li key={index} className={y}>{val}</li>
//  );
//  return <ul className={x}>{listItems}</ul>
//}
//Contact Manager
function AddPersonForm(props) {
  const [ person, setPerson ] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index} className={y}>{val}</li>
  );
  return <ul>{listItems}</ul>
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

//const arr = ["A", "B", "C"];

//const el = <AppNew />;
//const el = <Hello />;
//const el = <Counter />;
//const el = <Converter />;
//const el = <AddForm />;
//const el = <MyList data={arr} />;
const el = <ContactManager data={contacts} />;
root.render(
    el
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>
  //<h1>Hello, React!</h1>
  );
//}

//setInterval(show, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
