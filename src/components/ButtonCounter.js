import React, { Component } from 'react'

class ButtonCounter extends Component {

    state = {
        count: 0
    }

    handleClick = () => {
        // let newCount = this.state.count + 1
        // this.setState({
        //     count: newCount
        // }, () => console.log("inside setState", this.state.count))
        // console.log("outside of setState",this.state.count)
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>
                    Click Me
                </button>
            </div>
        )
    }
}

export default ButtonCounter