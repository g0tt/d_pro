import React from 'react';
import Hammer from 'react-hammerjs';
import _ from "lodash-es/lodash.default";
import axios from "axios";

export default class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 25,
        }

        this.start = null;
    }

    onPanStart(e) {
    }

    onPan(e) {
    }

    onPanEnd(e) {
        console.log(this.checkSwipe(e.deltaY));
    }

    checkSwipe(deltaY) {
        if (deltaY > 0) {
            this.setState({
                temp: this.state.temp - 1
            });
            return "down"
        } else {
            this.setState({
                temp: this.state.temp + 1
            });
            return "up";
        }
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
        var options = {
            touchAction:'compute',
            recognizers: {
                pan: {
                    threshold: 5
                }
            }
        };
        return (
            <div>
                <Hammer onPanStart={this.onPanStart.bind(this)}
                        onPan={this.onPan.bind(this)}
                        onPanEnd={this.onPanEnd.bind(this)}
                        options={options}>
                <div className="circle" style={{height: "200px", width: "200px", borderRadius: "100px", border: "solid 3px green"}}>
                    <div style={{fontSize: "3.5em", height:"200px", width: "200px", display: "table-cell", textAlign: "center", verticalAlign: "middle"}}>{this.state.temp}℃</div>
                </div>
            </Hammer>
                <div style={{marginTop: "30px", marginLeft: "50px"}}>
                    <button style={{width: "100px", height: "40px"}} onClick={this.chkClear.bind(this)}>送信</button>
                </div>
            </div>
        );
    }
}