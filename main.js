import React from 'react';
import ReactDOM from 'react-dom';
import MyHOC from './MyHOC.jsx';

ReactDOM.render(<MyHOC />, document.getElementById('app'));

//Using props using parent to child reactDOM.render()
/* ReactDOM.render(<AppProps headerProp="Header from props..." 
                contentProp="Content from props..." />, 
                document.getElementById('app')); */

/* ReactDOM.render((
    <Router history = {BrowserRouter}>
        <Route exact path="/" component={ReactRouter}>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>
), document.getElementById('app')); */