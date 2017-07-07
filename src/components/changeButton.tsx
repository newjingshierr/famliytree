import * as React from "react";
import { Button } from 'antd';
import SearchIndex from './search';
import Api from '../api/common';
import {product} from '../api/common';
import {ResponseData} from '../api/common';


interface SearchProps {

}
interface SearchState {

}

export default class ButtonIndex extends React.Component<SearchProps, SearchState> {

    j:number = 0;

    constructor(props, context) {
        super(props, context);

    }

    componentWillReceiveProps(){

    }

    componentWillMount(){

    }

    componentDidMount (){


    }
    change(){


    }


    render() {

        var products: product[];
        var responseData:ResponseData<product[]>;
        Api.service.get().then((data:product[])=>{
        });

        return(
        <div>
            <Button type="primary" onClick={this.change.bind(this) }>Primary</Button>
            <SearchIndex />
        </div>)

    }
}












