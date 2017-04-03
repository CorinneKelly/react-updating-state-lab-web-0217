import React from 'react'

class YouTubeDebugger extends React.Component {
	constructor(){
		super()

		this.state = {
			errors: [],
		  user: null,
		  settings: {
		    bitrate: 8,
		    video: {
		      resolution: '1080p'
		    }
		  }
		}

	  this.changeBitrate = this.changeBitrate.bind(this)
	  this.changeRes = this.changeRes.bind(this)
		
	}

	changeBitrate(){
		this.setState({
			settings: Object.assign({}, 
				this.state.settings, {
					bitrate: 12,
				}),
			})
		return this.state.settings.bitrate
	}

	changeRes(){
		this.setState({
		settings: Object.assign({}, this.state.settings, {
			video: Object.assign({}, this.state.settings.video, {
					resolution: '720p',
				}),
			}),
		})
		return this.state.settings.video.resolution
	}

	render(){
		return(
			<div>
				<button className="bitrate" onClick={this.changeBitrate}></button>
				<button className="resolution" onClick={this.changeRes}></button>
			</div>
		)
	}
}

module.exports = YouTubeDebugger