/**
 * Created by Administrator on 2017/5/31.
 */
//main.js
import React, {Component} from 'react';
import config from './config.json';


class Greeter extends Component{
    render() {
        return (
            <div>
            {config.greetText}
    </div>
    );
    }
}

export default Greeter;