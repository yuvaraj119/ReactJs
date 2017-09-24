import React from 'react';

class AppEvents extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data: "Initial data..."
        }

        this.updateState = this.updateState.bind(this);
        
    }

    updateState(){
        this.setState({data:"Data updated..."})
    }

    render(){
        return(
            <div>
                <button onClick = {this.updateState}>CLICK</button>
                <h4>{this.state.data}</h4>
                <Content myDataProp={this.state.data}
                    updateStateProp={this.updateState}></Content>
            </div> 
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <button onClick = {this.props.updateStateProp}>CLICK</button>
                <h3>{this.props.myDataProp}</h3>
            </div>    
        );
    }
}

export default AppEvents;