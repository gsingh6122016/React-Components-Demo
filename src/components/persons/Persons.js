import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent

   {    
         // shouldComponentUpdate(nextProps, nextState) {
         //    console.log('[Persons.js] shouldComponentUpdate');
         //    if (nextProps.persons !== this.props.persons ||
         //        nextProps.clicked !== this.props.clicked  ||
         //        nextProps.changed !== this.props.changed
         //       ) {
         //       return true;
         //    }
         //    else {
         //       return false;
         //    }
         // }

         getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('[Persons.js] getSnapshotBeforeUpdate');
            return { message: 'Snapsahot!!'};
         }

         componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('[Persons.js] componentDidUpdate');
            console.log(snapshot);
         }



        render(){
        
        return this.props.persons.map( (person, index) =>{ 
        return (
        <Person
        name = {person.name}
        age = {person.age}
        key = {person.id}
        click = {() => this.props.clicked(index)}
        change = {(event) => this.props.changed(event, person.id)}
        ></Person>
        );
 } );

};

   };
export default Persons
