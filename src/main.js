/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class SliderField extends Component {
	state = {
		value: 50,
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<>
				<span>A sample slider field. Value: {this.state.value}</span>
				<input type="range" value={this.state.value} onChange={(e) => {this.setState({value: e.target.value})}} min={0} max={100} name="" id=""/>
			</>
		);
	}
}

export default SliderField;
