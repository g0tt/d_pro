import React from 'react';
import _ from 'lodash-es';
import axios from 'axios';
import Notification from './Notification.jsx'

export default class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            temprand: Math.random(),
            page: 0,
            availableCheck: false,
            old: {},
            notificationPrefs: [
                {
                    id: 1,
                    type: 0,
                    temperature: 35,
                    method: 0,
                    availableCheck: true,
                },
                {
                    id: 2,
                    type: 0,
                    temperature: "",
                    method: 0,
                    availableCheck: false,
                },
                {
                    id: 3,
                    type: 0,
                    temperature: "",
                    method: 0,
                    availableCheck: false,
                },
                {
                    id: 4,
                    type: 0,
                    temperature: "",
                    method: 0,
                    availableCheck: false,
                },
                {
                    id: 5,
                    type: 0,
                    temperature: "",
                    method: 0,
                    availableCheck: false,
                },
            ],
        }

        this.start = null;
        this.end = null;
    }

    componentDidMount(){
        alert("始めます");
        this.start = Date.now();
    }

    goBack() {
        this.setState(this.state.old);
    }

    handler(e) {
        let target = (e.target.id.split('_'));
        let prefs = this.state.notificationPrefs;
        prefs.find((item) => {return item.id == target[0]})[target[1]] = e.target.value
        this.setState({
            notificationPrefs: prefs,
        });
    }

    chkHandler(e) {
        let target = (e.target.id.split('_'));
        let prefs = this.state.notificationPrefs;
        prefs.find((item) => {return item.id == target[0]})[target[1]] = e.target.checked;
        this.setState({
            notificationPrefs: prefs,
        });
    }

    chkClear() {
        _.forEach(this.state.notificationPrefs, (row) => {
            this.clear();
        })
    }

    clear() {
        if (this.end != null) return false;
        this.end = Date.now();
        var workmsec = this.end - this.start;
        var data = {
            data: {
                problem: this.props.problem,
                time: workmsec
            }
        };

        axios.post('/api/timer', data).then(response => {
            console.log('body:', response.data);
        });
        //alert("Congrats! Time: " + workmsec + "ms");
    }

    render() {
        switch(this.state.page) {
            case 11:
                return (
                    <div className="list-view">
                        <Notification temprand={this.state.temprand} clearEffect={this.chkClear.bind(this)} prefs={this.state.notificationPrefs} handler={this.handler.bind(this)} chkHandler={this.chkHandler.bind(this)} problem={this.props.problem}/>
                        <div style={{position: "absolute", bottom: "15px", right:"20px", display: !_.isEmpty(this.state.old) ? "block" : "none"}}><a href="#" className="back" onClick={this.goBack.bind(this)}>戻る</a></div>
                    </div>
                );
            default:
                return(
                    <div className="list-view">
                        <div style={{position: "absolute", bottom: "15px", right:"20px", display: !_.isEmpty(this.state.old) ? "block" : "none"}}><a href="#" className="back" onClick={this.goBack.bind(this)}>戻る</a></div>
                        {this.state.items.map((item) => {return <ListItem item={item} key={item.key} listview={this} />})}
                    </div>
                );
        }
    }
}

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    click() {
        this.props.listview.setState({
            old: this.props.listview.state,
            items: this.props.item.children,
            page: this.props.item.key,
        });
    }

    render() {
        return(
            <a href="#" onClick={this.click.bind(this)} className="list-item">
                <div style={{backgroundColor: "gray", border:"1px solid", borderColor: "#222", padding: "10px", paddingLeft: "15px"}}>{this.props.item.name}</div>
            </a>
        )
    }
}