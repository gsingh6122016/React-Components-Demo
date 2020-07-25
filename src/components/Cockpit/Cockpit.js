import React, { useEffect } from 'react'
import classess from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');

      setTimeout(() => {
        alert('Saved Data to cloud');
      },1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect2');
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect2');
      };
    });

    const classes = [];

    let btnClass = [classess.Button]

    if(props.ShowPersons)
    {
        btnClass.push(classess.Red);
    }



        if (props.personsLength <= 2)
        {
          classes.push(classess.red);
        }
        if (props.personsLength <= 1)
        {
          classes.push(classess.bold);
        }

    return (
        <div>
        <h1>{props.title}</h1>
        <p className = {classes.join(' ')}>This resally works.</p>
        <button
          // style={Style}
          // className={classess.Button}
          className={btnClass.join(' ')}
          onClick = {props.toggle} >Toggle Persons
          </button>
        </div>
         

    );
}

export default React.memo(cockpit);