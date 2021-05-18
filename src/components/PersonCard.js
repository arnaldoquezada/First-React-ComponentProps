import React, { Component } from 'react';


class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor}=this.props;//Desestructurando mis props
        return (
        <div >            
            <h1>{lastName}, {firstName}</h1>           
            <h3>Age: {age}</h3>
            <h4>Hair Color: {hairColor}</h4> 
        </div>
        )
    }
}
export default PersonCard;