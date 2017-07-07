import * as React from "react";
import {Input} from 'antd';
import number = joint.util.format.number;
const Search = Input.Search;
import  Api,{product} from "../api/common";


interface SearchProps {

}
interface SearchState {

}

export default class SearchIndex extends React.Component<SearchProps, SearchState> {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }

        Api.service.get().then((data:product[])=>{

        });

    }

    componentWillReceiveProps(nextProps:SearchProps){

    }

    shouldComponentUpdate(nextProps:SearchProps){

      //  return false;
        return false;
    }

    componentWillUpdate(){

    }



    componentDidUpdate(){

    }

    componentWillUnmount(){

    }

    componentWillMount(){

    }

    componentDidMount (){



    }
    searchChange(value:string){


    }

    render() {
       console.log("render");

        return  <Search
                placeholder="input search text"
                style={{ width: 200 }}
                onSearch={value => this.searchChange(value)}
            />
    }
}




