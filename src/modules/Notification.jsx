import React from 'react';

export default class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prefs: this.props.prefs,
        }
    }

    render() {
        return (
            <div>
                <div className="title">通知制御設定</div>
                <div style={{paddingLeft:"15px", paddingTop: "10px"}}>通知・制御を行う温度や時間を設定してください。</div>
                <table style={{paddingLeft: "30px", paddingTop: "10px"}}>
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
                            <td><input type="text" id={pref.id + "_temperature"} value={pref.temperature} style={{width: "30px"}} onChange={this.props.handler}/></td>
                            <td>
                                <select id={pref.id + "_method"} value={pref.method} onChange={this.props.handler}>
                                    <option value="0">以上</option>
                                    <option value="1">以下</option>
                                </select>
                            </td>
                            <td>
                                <label className="switch">
                                    <input id={pref.id + "_availableCheck"} type="checkbox" checked={pref.availableCheck} onChange={this.props.chkHandler} />
                                    <span className="slider round"></span>
                                </label>
                            </td>
                        </tr>);
                })}
                </tbody>
                </table>
                <div align="center" style={{paddingTop: "20px"}}>
                <button className="save" onClick={this.props.clearEffect}>設定</button>
                </div>
            </div>
        );
    }
}