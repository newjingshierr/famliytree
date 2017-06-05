import * as React from "react";
import * as ReactDOM from "react-dom";
import {Layout} from 'antd';
const {Header, Footer, Content} = Layout;
import {Input, Icon} from 'antd';
const Search = Input.Search;
import {Card} from 'antd';
import SearchIndex from './components/search';


ReactDOM.render(
    <Layout>
        <Header style={{backgroundColor:'#16b0de'}}> <SearchIndex/>
            <Icon type="user"/><Icon type="heart-o"/></Header>
        <Content><Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
            </div>
            <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
            </div>
        </Card><Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
            </div>
            <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
            </div>
        </Card><Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
            </div>
            <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
            </div>
        </Card><Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
            </div>
            <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
            </div>
        </Card></Content>
        <Footer>Footer</Footer>
    </Layout>
    ,

    document.getElementById("example")
);