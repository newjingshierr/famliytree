import * as React from "react";
import {Input} from 'antd';
import number = joint.util.format.number;
const Search = Input.Search;

interface SearchProps {
  searchProps:string;
}
interface SearchState {
     searchState:string;
}

export default class SearchIndex extends React.Component<SearchProps, SearchState> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            searchState: "new search"
        }
       // hello("1",1,2,3,5);
        console.log("constructor");
    }


    componentWillReceiveProps(nextProps:SearchProps){
        console.log("componentWillReceiveProps");
        console.log(nextProps.searchProps);
    }
    shouldComponentUpdate(nextProps:SearchProps){

        console.log("shouldComponentUpdate");
        console.log(nextProps.searchProps);
      //  return false;
        return false;
    }

    componentWillUpdate(){
       console.log("componentWillUpdate");
    }



    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount (){
        console.log("componentDidMount");
        let i =0;

        // setInterval(()=>{
        //     this.setState({searchState: String(i +1)});
        //
        // },1000);

    }
    searchChange(value:string){
       this.setState({searchState:value});

    }

    render() {
       console.log("render");
        console.log(this.props.searchProps);
        return  <Search
                placeholder="input search text"
                style={{ width: 200 }}
                onSearch={value => this.searchChange(value)}
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







