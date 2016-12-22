import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Item = React.createClass({
	render() {
		const item = this.props.item;
			return (
				<div>
					<span>{item.id}</span><span>{item.name}</span><span>{item.department}</span><span style={{ backgroundColor: item.status }}>{item.status}</span><button onClick={() => this.props.toggleChange(item.id)}>change</button>
				</div>
			)
	}
})

export default Item;