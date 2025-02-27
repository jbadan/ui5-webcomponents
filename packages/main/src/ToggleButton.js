import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import Button from "./Button.js";
import ToggleButtonTemplate from "./generated/templates/ToggleButtonTemplate.lit.js";

// Styles
import toggleBtnCss from "./generated/themes/ToggleButton.css.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-togglebutton",
	properties: /** @lends  sap.ui.webcomponents.main.ToggleButton.prototype */ {
		/**
		 * Determines whether the <code>ui5-togglebutton</code> is displayed as pressed.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		pressed: {
			type: Boolean,
		},
	},
};

/**
 * @class
 *
 *<h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-togglebutton</code> component is an enhanced <code>ui5-button</code>
 * that can be toggled between pressed and normal states.
 * Users can use the <code>ui5-togglebutton</code> as a switch to turn a setting on or off.
 * It can also be used to represent an independent choice similar to a check box.
 * <br><br>
 * Clicking or tapping on a <code>ui5-togglebutton</code> changes its state to <code>pressed</code>. The button returns to
 * its initial state when the user clicks or taps on it again.
 * By applying additional custom CSS-styling classes, apps can give a different style to any <code>ui5-togglebutton</code>.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/ToggleButton";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.ToggleButton
 * @extends Button
 * @tagname ui5-togglebutton
 * @public
 */
class ToggleButton extends Button {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return ToggleButtonTemplate;
	}

	static get styles() {
		return [Button.styles, toggleBtnCss];
	}

	_onclick(e) {
		this.pressed = !this.pressed;
		this.fireEvent("press", { pressed: this.pressed });
	}

	get classes() {
		const result = super.classes;
		result.main.sapMToggleBtnPressed = this.pressed;
		return result;
	}
}

ToggleButton.define();

export default ToggleButton;
