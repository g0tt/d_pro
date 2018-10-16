import React from 'react';
import Hammer from 'react-hammerjs';
import _ from "lodash-es/lodash.default";
import axios from "axios";

export default class Temperature2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 25,
        }

        this.start = null;
    }

    up() {
        this.setState({
            temp: this.state.temp + 1
        });
    }

    down() {
        this.setState({
            temp: this.state.temp - 1
        });
    }

    componentDidMount(){
        alert("始めます");
        this.start = Date.now();
    }

    chkClear() {
        if (this.state.temp === 30) {
            this.clear();
        }
    }

    clear() {
        var end = Date.now();
        var workmsec = end - this.start;
        var data = {
            data: {
                problem: "sRemo_3",
                time: workmsec
            }
        };

        axios.post('/api/timer', data).then(response => {
            console.log('body:', response.data);
        });
        alert("Congrats! Time: " + workmsec + "ms");
    }

    render() {
        return (
            <div>
                <div className="circle" style={{height: "200px", width: "200px"}}>
                    <a href="#" onClick={this.up.bind(this)} style={{color: "#555", fontSize: "3.5em", textDecoration: "none", display: "block", position: "absolute", width:"200px", textAlign: "center"}}>&#9651;</a>
                    <div style={{fontSize: "3.5em", height:"200px", width: "200px", display: "table-cell", textAlign: "center", verticalAlign: "middle"}}>{this.state.temp}℃</div>
                    <a href="#" onClick={this.down.bind(this)} style={{color: "#555", fontSize: "3.5em", textDecoration: "none", display: "block", position: "absolute", width:"200px", textAlign: "center", top:"120px"}}>&#9661;</a>
                </div>
                <div style={{marginTop: "30px", marginLeft: "50px"}}>
                    <button style={{width: "100px", height: "40px"}} onClick={this.chkClear.bind(this)}>送信</button>
                </div>
            </div>
        );
    }
}