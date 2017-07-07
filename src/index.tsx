import * as React from "react";
import * as ReactDOM from "react-dom";


var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
                {
                    this.props.children.map(function (child) {
                        return <li>{child}</li>
                    })
                }
            </ol>
        );
    }
});

ReactDOM.render(<div>
        <NotesList>
            <span>hello</span>
            <span>world</span>
        </NotesList>
    </div>
    ,document.getElementById("example"))