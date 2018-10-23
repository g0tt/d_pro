import React from 'react';
import Temperature from "./Temperature.jsx";
import Temperature2 from "./Temperature2.jsx";

export default class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prefs: this.props.prefs,
        }
    }

    componentDidMount() {
        this.props.clearEffect();
    }

    render() {
        if (Math.random() > 0.50) {
            return (
                <div>
                    <div className="title">通知制御設定</div>
                    <div style={{paddingLeft: "15px", paddingTop: "10px"}}>通知を行う温度を28℃に設定してください。</div>
                    <table style={{paddingLeft: "30px", paddingTop: "10px", display: "none"}}>
                        <tbody>
                        {this.state.prefs.map((pref) => {
                            return (
                                <tr key={pref.id}>
                                    <td>{pref.id}</td>
                                    <td>
                                        <select id={pref.id + "_type"} value={pref.type} onChange={this.props.handler}>
                                            <option value="0">温度</option>
                                            <option value="1">湿度</option>
                                            <option value="2">照度</option>
                                        </select>
                                    </td>
                                    <td><input type="text" id={pref.id + "_temperature"} value={pref.temperature}
                                               style={{width: "30px"}} onChange={this.props.handler}/></td>
                                    <td>
                                        <select id={pref.id + "_method"} value={pref.method}
                                                onChange={this.props.handler}>
                                            <option value="0">以上</option>
                                            <option value="1">以下</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label className="switch">
                                            <input id={pref.id + "_availableCheck"} type="checkbox"
                                                   checked={pref.availableCheck} onChange={this.props.chkHandler}/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                </tr>);
                        })}
                        </tbody>
                    </table>
                    <div style={{top: "100px", left: "80px", position: "absolute"}}>
                        <Temperature problem={this.props.problem}/>
                    </div>
                    <div align="center" style={{paddingTop: "20px"}}>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="title">通知制御設定</div>
                    <div style={{paddingLeft: "15px", paddingTop: "10px"}}>通知を行う温度を28℃に設定してください。</div>
                    <table style={{paddingLeft: "30px", paddingTop: "10px", display: "none"}}>
                        <tbody>
                        {this.state.prefs.map((pref) => {
                            return (
                                <tr key={pref.id}>
                                    <td>{pref.id}</td>
                                    <td>
                                        <select id={pref.id + "_type"} value={pref.type} onChange={this.props.handler}>
                                            <option value="0">温度</option>
                                            <option value="1">湿度</option>
                                            <option value="2">照度</option>
                                        </select>
                                    </td>
                                    <td><input type="text" id={pref.id + "_temperature"} value={pref.temperature}
                                               style={{width: "30px"}} onChange={this.props.handler}/></td>
                                    <td>
                                        <select id={pref.id + "_method"} value={pref.method}
                                                onChange={this.props.handler}>
                                            <option value="0">以上</option>
                                            <option value="1">以下</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label className="switch">
                                            <input id={pref.id + "_availableCheck"} type="checkbox"
                                                   checked={pref.availableCheck} onChange={this.props.chkHandler}/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                </tr>);
                        })}
                        </tbody>
                    </table>
                    <div style={{top: "100px", left: "80px", position: "absolute"}}>
                        <Temperature2 problem={this.props.problem}/>
                    </div>
                    <div align="center" style={{paddingTop: "20px"}}>
                    </div>
                </div>
            );
        }
    }
}