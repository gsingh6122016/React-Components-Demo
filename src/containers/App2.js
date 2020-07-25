import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

    const [personState, setPersonState ] = useState({
        persons : [
            {name : "max", age : 15},
            {name : "Ives", age : 23},
            {name : "elizabeth", age : 21} 
          ],
      //    otherState : "this will be changed by the setPersonState function"
    });

    const [OtherState, setOtherState ] = useState({
        otherState : "this will not be changed by the setPersonState function"});



    const SwitchNameHandler = () => {

        setPersonState(
          {
            persons : [
            {name : "maximum", age : 15},
            {name : "Ives", age : 23},
            {name : "elizabeth", age : 22}
             
          ]
        }
        );
    
      };

    return (
      <div className="App">
        <h1>hi, this is my react app.</h1>
        <button onClick = {SwitchNameHandler} >change name</button>
        <Person name = { personState.persons[0].name } age = { personState.persons[0].age }/> 
        <Person name = { personState.persons[1].name } age = { personState.persons[1].age }>, Sect Master of supreme sect</Person> 
        <Person name = { personState.persons[2].name } age = { personState.persons[2].age }/> 
      </div>
    );

}

export default App;



 
