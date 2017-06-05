import * as React from "react";
import { Button } from 'antd';
import SearchIndex from './search';


interface SearchProps {

}
interface SearchState {
  i:string;
}

export default class ButtonIndex extends React.Component<SearchProps, SearchState> {

    j:number = 0;

    constructor(props, context) {
        super(props, context);
        this.state = {
            i :"11"
        }
    }

    componentWillReceiveProps(){

    }

    componentWillMount(){

    }

    componentDidMount (){


    }
    change(){
        console.log("change");


        setInterval(()=>{

              this.setState({i:String(this.j++)})

        },1000);
    }


    render() {

        return(
        <div>
            <Button type="primary" onClick={this.change.bind(this) }>Primary</Button>
            <SearchIndex  searchProps ={this.state.i}/>
        </div>)

    }
}












