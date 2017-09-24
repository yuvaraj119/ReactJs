import React from 'react';

class ReactForms extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data: 'Initial data...'
        }

        this.updateState = this.updateState.bind(this);
    }

    updateState(e){
        this.setState({data: e.target.value});
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.data}
                    onChange={this.updateState} />
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
                <input type = "text" value = {this.props.myDataProp} 
                onChange = {this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3> 
            </div>
        );
    }
}

export default ReactForms;