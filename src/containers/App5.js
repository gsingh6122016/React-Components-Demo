import React, { Component } from 'react';
import classess from './App.css';
import Persons from '../components/persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../HOC/WithClass';
import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium' ;

// to out put conditional content
//this is beeter way then App3

class App extends Component {

  state = {
    persons : [
      {id : "1", name : "max", age : 15},
      {id : "2", name : "Ives", age : 23},
      {id : "3", name : "elizabeth", age : 21} 
    ],
    otherState : "this will not be changed by the set state function, i.e it remains as it is.",
    ShowPersons : false,
    ShowCockpit : true
  }

  TogglePersonHandler = () => {
    const CheckState = this.state.ShowPersons;
    this.setState({ShowPersons : !CheckState});
    
  }

  DeletePersonHandler = (PersonIndex) => {
      //to copy persons array into new variable
      const persons = [...this.state.persons];
      //or u can do
    // const persons = this.state.persons.slice();
    persons.splice(PersonIndex, 1);
    this.setState( {persons : persons} )
  }


  componentDidMount() {
    console.log('[App.js] componenetDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componenetDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }


  nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id ;
      });

      const person = {
          ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;
      
      this.setState({
        persons:persons
      })
  }

  render() {
    
    // const StyledButton = styled.button`
    // background-color:${props => props .alt ? 'red':'green'};
    //   color: white;
    //   font: inherit;
    //   border: 1px solid black;
    //   padding: 8px;
    //   cursor: pointer;
    //   &:hover {
    //     background-color:${props => props .alt ? 'crimson':'lightgreen'};
    //     color: black;
    // `;

    // const Style = {
    //   //these values are stored as strings
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid black',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor:'lightgreen',
    //     color: 'black'
    //   }
    // }

    let PersonsToToggle = null;
    
    

    if(this.state.ShowPersons)
       {
           PersonsToToggle = (
      
                
                  <Persons 
                  persons={this.state.persons}
                  clicked= {this.DeletePersonHandler}
                  changed= {this.nameChangeHandler}
                  />
             
            
          );

          
  
          // Style.backgroundColor = 'red';
          // Style[':hover'] = {
          //   backgroundColor: 'blue',
          //   color: 'black'
          // };
  }

        

    return (
  
      <WithClass classes={classess.App}>
        <button 
        onClick = {() => {
          this.setState({ ShowCockpit: false });
        }}
        >
          Remove Cockpit
          </button>
        {this.state.ShowCockpit ? 
        <Cockpit 
        title={this.props.appTitle}
        ShowPersons={this.state.ShowPersons}
        personsLength = {this.state.persons.length}
        toggle = {this.TogglePersonHandler}
        /> : null}

          {PersonsToToggle}
        
      </WithClass>
      
    );
  }
}
export default App;
// export default Radium(App);
