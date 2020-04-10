import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from '@progress/kendo-react-conversational-ui';
import * as marked from 'marked';
import './MessagingView.css';
import PersonIcon from '@material-ui/icons/Person';

function MessageTemplate(props) {
    let message = props.item;
    let parser = marked.setOptions({});
    let parsedMessage = parser.parse(message.text);
    let htmlToinsert = { __html: parsedMessage };
    return (
        <div className="k-bubble">
            <div dangerouslySetInnerHTML={htmlToinsert} />
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.user = {
            id: 1
        };
        this.bot = {
            id: 0
        };
        this.state = {
            messages: [{
                author: this.bot,
                text: 'Type in some _Markdown_ to see it **rendered** here'
            },
            {
                author: this.user,
                text: 'Type in some _Markdown_ to see it **rendered** here'
            }]
        };
    }

    addNewMessage = (event) => {
        this.setState((prevState) => {
            return { messages: [...prevState.messages, event.message] };
        });
    };

    render() {
        return (
            <div className="my-app">
                <div className="container">
                    <h1 className="text-center">Users</h1>
                    <ul className="list-group">
                    {
                        ["a","b","c"].map((item, index)=>{
                            return (
                                <div className="maches-user-item card list-group-item">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                    <div style={{marginLeft: '10px'}}>
                                        <label>{item}</label><br />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                                        )
                        })
                    }
                    </ul>
                </div>
                <Chat user={this.user}
                    messages={this.state.messages}
                    onMessageSend={this.addNewMessage}
                    width={400}
                    messageTemplate={MessageTemplate}>
                </Chat>
            </div>
        );
    }
}
export default App;