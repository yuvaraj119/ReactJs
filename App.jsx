import React from 'react';

class App extends React.Component{
    constructor(){
        super();

        this.state={
            data:[
                {
                    "id":1,
                    "name":"foo",
                    "age":"20"
                },{
                    "id":2,
                    "name":"Bar",
                    "age":"30"
                }
            ]
        }

    }
    render(){

        var i =1;
        var mystyle={
            fontSize: 100,
            color: '#FF0000'
        }

        return(
            <div>
                Hello World!!
                <h1>Header</h1>
                <h2>Content</h2>
                <p data-myattribute="somevalue">This is the content!!!</p>
                <h1>{1+1}</h1>
                <h1 style={mystyle}>{i==1?'True':'False'}</h1>
                {"//End of the line Comment...."}
                <Header />
                <Content />
                <table>
                    <tbody>
                        {this.state.data.map((person,i) => <TableRow key ={i} 
                            data= {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}

class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;