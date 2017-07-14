import * as React from "react";
import * as ReactDOM from "react-dom";
import {Layout, Input, Icon} from 'antd';
const {Header, Footer, Content} = Layout;
const Search = Input.Search;
require.ensure([], () => {
    require("./themes/layout.less");
}, "layout.css");


export class App extends React.Component<any,any> {
    constructor() {
        super();
    }

    onKeyChange = (e) => {
        console.log(e.target.value)
    }
    onSearch = (value) => {
        console.log(value);
    }

    render() {
        return <div>
            <Layout>
                <Header className="layoutPosition" style={{textAlign:'center'}}>
                        <div >
                            <Search
                                id="indexSearch"
                                onChange={this.onKeyChange}
                                placeholder="搜索"
                                style={{ width: 200 }}
                                onSearch={this.onSearch}
                            />

                            <Icon type="heart-o" style={{fontSize:24,marginLeft:'10',verticalAlign:'middle'}}/>
                            <Icon type="user" style={{fontSize:24,marginLeft:'10',verticalAlign:'middle'}}/>
                        </div>

                </Header>
                <Content style={{ height:1500}}>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>;
    }
}

ReactDOM.render(
    <App/>, document.getElementById("example"));