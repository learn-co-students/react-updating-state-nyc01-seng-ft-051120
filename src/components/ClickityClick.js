// State changes happen asynchronously
// initial state:       this.state
// updated state:       this.setState 



import React from 'react';

class ClickityClick extends React.Component {

// constructor() is like 'initialize' in Ruby Classes 
    constructor() {
        super();

// Define the initial state:

        this.state = {
        hasBeenClicked: false
        };
    }

// Update our state here...

    handleClick = () => {
        this.setState({
        hasBeenClicked: true
        }, () => 
        console.log(this.state.hasBeenClicked)) // prints true
  }

    // handleClick = () => {
    //     this.setState({
    //     hasBeenClicked: true
    //     })
    //     console.log(this.state.hasBeenClicked); // prints false 
    // }

///////

    render() { 
        return (  
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}
 export default ClickityClick;