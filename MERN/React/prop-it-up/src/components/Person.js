import React, { Component } from 'react';
    
class Person extends Component {
    //to set state    
    constructor(props)  {
            super(props);
        this.state = {
            getOlder: this.props.age
        }
        }
    
    render(){
        
        //destructure from App
        const {firstName,hairColor,lastName} = this.props;

        return <div>
                <h1>
                    { firstName } { lastName }
                </h1>
                <p>
                    Age: { this.state.getOlder }
                </p>
                <p>
                   Hair color: {hairColor}
                </p>
<button onClick={() => this.setState({getOlder: this.state.getOlder + 1})}>Birthday button for {firstName}</button>
            </div>
        ;
}
}

export default Person;



