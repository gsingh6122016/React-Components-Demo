import React, {Component} from 'react';
import classess from './Person.css';
import Aux from '../../../HOC/Auxiliary'
import withClass from '../../../HOC/WithClass'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render (){
        console.log('[Person.js] rendering...');
        return  (

            // <div className = {classess.Person}>
            //         <p onClick = {this.props.click}>i'm {this.props.name} and I am {this.props.age} years old{this.props.children}</p>
            //         <input type = "text" onChange = {this.props.change} value = {this.props.name} ></input>
            // </div>
        
            <Aux>
                <p onClick = {this.props.click}>i'm {this.props.name} and I am {this.props.age} years old{this.props.children}</p>
                    <input type = "text" 
                    ref={this.inputElementRef}
                    onChange = {this.props.change} 
                    value = {this.props.name} ></input>

            </Aux>
                 
        
            );
    
    };
};

export default Person;
