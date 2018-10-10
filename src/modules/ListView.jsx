import React from 'react';

export default class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            //name: this.props.name
        }
    }

    render() {
        return(<div style={{width: "400px"}}>
            {this.props.items.map((item) => {return <ListItem name={item.name} key={item.key} />})}
            </div>
        );
    }
}

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{backgroundColor: "gray"}}>{this.props.name}</div>
        )
    }
}