/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class SliderField extends Component {

	/**
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} e Event
	 */
	handleChange = ( e ) => {
		const val = e.target.value;
		const {id, onChange} = this.props;
		onChange(id, val);
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		console.log(this.props);
		const { id, name, value, field } = this.props
		return (
			<>
				<input
					type="range"
					id={id}
					name={name}
					value={value}
					onChange={this.handleChange}
					className="range-slider"
					{ ...field.attributes }
				/>
				<br/>
				<strong>{value}%</strong>
			</>


		);
	}
}

export default SliderField;
