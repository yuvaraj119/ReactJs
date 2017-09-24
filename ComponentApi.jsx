import React from 'react';
import ReactDOM from 'react-dom';

class ComponentApi extends React.Component{
    constructor(){
        super();

        this.state={
            data: []
        }

        //1. Set State
        this.setStateHandler = this.setStateHandler.bind(this);
        //2. Force Update
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        //3. Find Dom Node
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

    setStateHandler(){
        var item ="setState..."
        var myArray = this.state.data;
        myArray.push(item)
        this.setState({data: myArray})
    }

    forceUpdateHandler(){
        this.forceUpdate();
    }

    findDomNodeHandler(){
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    render(){
        return(
            <div>
                <button onClick = {this.setStateHandler}>Set State</button>
                <button onClick = {this.forceUpdateHandler}>Force Update</button>
                <button onClick = {this.findDomNodeHandler}>Find DOM Node</button>
                <h4>State Array: {this.state.data}</h4>
                <h4>Random Number: {Math.random()}</h4>
                <div id = "myDiv">NODE</div>
            </div>
        );
    }
}

export default ComponentApi;