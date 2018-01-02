import React, {Component} from 'react';

export class Home extends Component{
    constructor(props){
        super();
        this.state = {
            text: props.text
        }
    }
    render (){
        return (    
            <div>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
};
