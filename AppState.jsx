import React from 'react';

class AppState extends React.Component{
    constructor(props){
        super(props);

        this.state={
            header: "Header from state...",
            content: "Content from state..."
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.header}</h1>
                <h1>{this.state.content}</h1>
            </div>
        );
    }
}

export default AppState;