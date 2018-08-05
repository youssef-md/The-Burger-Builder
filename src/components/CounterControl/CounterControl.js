import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
    <div className="CounterControl" onClick={props.clicked}>
        <p>{props.label}</p>
    </div>
);

export default counterControl;