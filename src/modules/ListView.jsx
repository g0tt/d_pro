import React from 'react';

export default class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
    }

    goBack() {
        this.setState(this.state.old);
    }

    render() {
        return(<div style={{width: "400px", height:"650px", backgroundColor:"#ccc", position: "relative"}}>
                <div style={{position: "absolute", bottom: "15px", right:"20px", display: this.state.old ? "block" : "none"}}><a href="#" onClick={this.goBack.bind(this)}>戻る</a></div>
                {this.state.items.map((item) => {return <ListItem item={item} key={item.key} listview={this} />})}
            </div>
        );
    }
}

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    click() {
        this.props.listview.setState({
            old: this.props.listview.state,
            items: this.props.item.children
        });
    }

    render() {
        return(
            <a href="#" onClick={this.click.bind(this)} className="list-item">
                <div style={{backgroundColor: "gray", height:"40px", border:"1px solid"}}>{this.props.item.name}</div>
            </a>
        )
    }
}