import React from 'react'

class DigitalClicker extends React.Component {
	constructor(){
		super()
		this.state = {
			timesClicked: 0,	
		}
		this.clickCount = this.clickCount.bind(this)
	}

	clickCount(something){
		var prevTotal = this.state.timesClicked
		this.setState({
			timesClicked: prevTotal + 1,
		})

		return this.state.timesClicked
	}

	render(){
		return(
			<div>
				
				<button onClick={this.clickCount}>{this.state.timesClicked}</button>
			</div>
		)
	}
}

module.exports = DigitalClicker