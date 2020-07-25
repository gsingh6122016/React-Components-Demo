import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name : "max", age : 15},
      {name : "Ives", age : 23},
      {name : "elizabeth", age : 21} 
    ],
    otherState : "this will not be changed by the set state function, i.e it remains as it is."
  }

  SwitchNameHandler = (newName) => {

    this.setState(
      {
        persons : [
        {name : newName, age : 15},
        {name : "Ives", age : 23},
        {name : "elizabeth", age : 22}
         
      ]
    }
    )

  }

  ChangeNameHandler = (event) => {

    this.setState(
      {
        persons : [
        {name : "max", age : 15},
        {name : event.target.value, age : 23},
        {name : "elizabeth", age : 22}
         
      ]
    }
    )

  }



  render() {
    
    const Style = {
      //these values are stored as strings
      backGroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>hi, this is my react app.</h1>
        <button 
          style={Style}
          onClick = {this.SwitchNameHandler.bind(this, "maximum")} >change name</button>

        {/* or you can also use
        <button onClick = {() => this.SwitchNameHandler("maximum")} >change name</button> */}

        <Person 
        name = { this.state.persons[0].name } 
        age = { this.state.persons[0].age }
        click = {this.SwitchNameHandler.bind(this, "maxy")}
        /> 
        <Person 
        name = { this.state.persons[1].name } 
        age = { this.state.persons[1].age }
        change = {this.ChangeNameHandler}
        >, Sect Master of supreme sect
        </Person> 
        <Person 
        name = { this.state.persons[2].name } 
        age = { this.state.persons[2].age }
        /> 
      </div>
    );
  }
}

export default App;
