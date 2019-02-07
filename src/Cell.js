import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value

            //cell should render a div with className cell 
            //in render cell should set background color in line with attr {{backgroundColor: 'state's color'}}
            //click listener which updates state to  '#333'
        }
    }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render () {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
        )
    }


}