import * as React from "react";
import {Input} from 'antd';
import number = joint.util.format.number;
const Search = Input.Search;

interface SearchProps {

}
interface SearchState {

}

export default class SearchIndex extends React.Component<SearchProps, SearchState> {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
        hello("1",1,2,3,5);

    }



    render() {
        return  <Search
                placeholder="input search text"
                style={{ width: 200 }}
                onSearch={value => console.log(value)}
            />
    }
}

function checkLogin(name: string, pwd: string, ...others: string[]){
    console.info(others.join(' '));
}

checkLogin('brook', '123456', 'brook@email.com', `12800`); // brook@email.com 12800


function  hello( str:string,nums:number, ...num:number[]){
    console.log("str:"+str);
    console.log("nums:"+nums);
   let i = 0;
   for( i=0; i<num.length; i++){
       console.log(num[i]);
   }

}







