import React from 'react';
import ReactDOM from 'react-dom';

class ComponentLifeCycle extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data: 0
        }

        this.setNewNumber = this.setNewNumber.bind(this);

    }

    setNewNumber(){
        this.setState({data: this.state.data+1});
    }

    render(){
        return(
            <div>
                <button onClick={this.setNewNumber}>Increment</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends React.Component{

    constructor(){
        super();
        this.state={
            consoleText:""
        }
    }

    componentWillMount() {
      console.log('Component WILL MOUNT!');
      this.setState({consoleText: "Component WILL MOUNT!"});
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
      this.setState({consoleText: "Component DID MOUNT!"});
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
      this.setState({consoleText: "Component DID MOUNT!"});
   }

   shouldComponentUpdate(newProps, newState) {
        this.setState({consoleText: "Component ComponentUpdate true"});
        return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
      this.setState({consoleText: "Component WILL UPDATE!"});
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
      this.setState({consoleText: "Component DID UPDATE!"});
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
      this.setState({consoleText: "Component WILL UNMOUNT!"});
   }
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
            <div id="myDiv">{this.state.consoleText}</div>
         </div>
      );
   }

}

export default ComponentLifeCycle;