import React from 'react';

class AppStateProps extends React.Component{
    constructor(props){
        super(props);

        this.state={
            header:"Header from props...",
            content:"Content from props..."
        }
    }

    render(){
        return(
            <div>
                <Header headerProp = {this.state.header} />
                <Content contentProp = {this.state.content} />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.contentProp}</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}

export default AppStateProps;