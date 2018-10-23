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
        console.log(this.checkSwipe(e.deltaX, e.deltaY));
    }

    checkSwipe(deltaX, deltaY) {
        if (deltaY > 0 && Math.abs(deltaX) < 50) {
            this.setState({
                temp: this.state.temp - 1
            });
            return "down"
        } else if (deltaY < 0 && Math.abs(deltaX) < 50) {
            this.setState({
                temp: this.state.temp + 1
            });
            return "up";
        }
    }

    componentDidMount(){
        console.info("始めます");
        this.start = Date.now();
    }

    chkClear() {
        if (this.state.temp === 28) {
            this.clear();
        }
    }

    clear() {
        var end = Date.now();
        var workmsec = end - this.start;
        var data = {
            data: {
                problem: this.props.problem + "_temp_swipe",
                ua: window.navigator.userAgent,
                time: workmsec
            }
        };

        axios.post('/api/timer', data).then(response => {
            console.log('body:', response.data);
        });
        alert("クリア！");
        window.close();
    }

    render() {
        var options = {
            touchAction:'compute',
            recognizers: {
                pan: {
                    threshold: 40
                }
            }
        };
        return (
            <div>
                <div className="circle" style={{left: "12px", top: "12px", height: "200px", width: "200px", borderRadius: "100px", border: "solid 3px green", position: "absolute"}}>
                </div>
                <Hammer onPanStart={this.onPanStart.bind(this)}
                        onPan={this.onPan.bind(this)}
                        onPanEnd={this.onPanEnd.bind(this)}
                        options={options}
                        direction="DIRECTION_ALL">
                    <div className="circle" style={{left: "0px", top: "0px", height: "230px", width: "230px", borderRadius: "115px", position: "absolute"}}>
                    </div>
                </Hammer>
                <div className="noselect" style={{fontSize: "3.5em", height:"150px", width: "130px", top: "0px", paddingTop: "70px", left: "50px", position: "absolute", display: "table-cell", textAlign: "center", verticalAlign: "middle"}}>{this.state.temp}℃</div>
                <div style={{marginTop: "240px", marginLeft: "60px"}}>
                    <button style={{width: "100px", height: "40px"}} className="save" onClick={this.chkClear.bind(this)}>送信</button>
                </div>
            </div>
        );
    }
}