import React from 'react';
import ReactDOM from 'react-dom';
import AppStateProps from './AppStateProps.jsx';

ReactDOM.render(<AppStateProps />, document.getElementById('app'));

//Using props uaing parent to child reactDOM.render()
/* ReactDOM.render(<AppProps headerProp="Header from props..." 
                contentProp="Content from props..." />, 
                document.getElementById('app')); */