import React from 'react';

class AppProps extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.headerProp}</h1>
                <h1>{this.props.contentProp}</h1>
            </div>
        );
    }
}

AppProps.defaultProps={
    headerProp: "Header from props...",
    contentProp: "Content from props..."
}

export default AppProps;