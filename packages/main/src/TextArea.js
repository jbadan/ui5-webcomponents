import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import CSSSize from "@ui5/webcomponents-base/dist/types/CSSSize.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import { fetchResourceBundle, getResourceBundle } from "@ui5/webcomponents-base/dist/ResourceBundle.js";
import { getFeature } from "@ui5/webcomponents-base/dist/FeaturesRegistry.js";
import TextAreaTemplate from "./generated/templates/TextAreaTemplate.lit.js";

import { TEXTAREA_CHARACTERS_LEFT, TEXTAREA_CHARACTERS_EXCEEDED } from "./i18n/defaults.js";

// Styles
import styles from "./generated/themes/TextArea.css.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-textarea",
	properties: /** @lends sap.ui.webcomponents.main.TextArea.prototype */ {
		/**
		 * Defines the value of the Web Component.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		value: {
			type: String,
		},

		/**
		 * Indicates whether the user can interact with the component or not.
		 * <br><br>
		 * <b>Note:</b> Disabled components cannot be focused and they are out of the tab chain.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Defines whether the <code>ui5-textarea</code> is readonly.
		 * </br></br>
		 * <b>Note:</b> A readonly <code>ui5-textarea</code> is not editable,
		 * but still provides visual feedback upon user interaction.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		readonly: {
			type: Boolean,
		},

		/**
		 * Defines a short hint intended to aid the user with data entry when the component has no value.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		placeholder: {
			type: String,
		},

		/**
		 * Defines the number of visible text lines for the component.
		 * <br><br>
		 * <b>Notes:</b>
		 * <ul>
		 * <li>If the <code>growing</code> property is enabled, this property defines the minimum rows to be displayed
		 * in the textarea.</li>
		 * <li>The CSS <code>height</code> property wins over the <code>rows</code> property, if both are set.</li>
		 * </ul>
		 *
		 * @type {number}
		 * @defaultvalue 0
		 * @public
		 */
		rows: {
			type: Integer,
			defaultValue: 0,
		},

		/**
		 * Defines the maximum number of characters that the <code>value</code> can have.
		 *
		 * @type {number}
		 * @public
		 */
		maxLength: {
			type: Integer,
			defaultValue: null,
		},

		/**
		 * Determines whether the characters exceeding the maximum allowed character count are visible
		 * in the <code>ui5-textarea</code>.
		 * <br><br>
		 * If set to <code>false</code>, the user is not allowed to enter more characters than what is set in the
		 * <code>maxLength</code> property.
		 * If set to <code>true</code> the characters exceeding the <code>maxLength</code> value are selected on
		 * paste and the counter below the <code>ui5-textarea</code> displays their number.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		showExceededText: {
			type: Boolean,
		},

		/**
		 * Enables the <code>ui5-textarea</code> to automatically grow and shrink dynamically with its content.
		 * <br><br>
		 * <b>Note:</b> If set to <code>true</code>, the CSS <code>height</code> property is ignored.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		growing: {
			type: Boolean,
		},

		/**
		 * Defines the maximum number of lines that the Web Component can grow.
		 *
		 * @type {number}
		 * @defaultvalue 0
		 * @public
		 */
		growingMaxLines: {
			type: Integer,
			defaultValue: 0,
		},

		/**
		 * Determines the name with which the <code>ui5-textarea</code> will be submitted in an HTML form.
		 *
		 * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
		 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
		 *
		 * <b>Note:</b> When set, a native <code>input</code> HTML element
		 * will be created inside the <code>ui5-textarea</code> so that it can be submitted as
		 * part of an HTML form. Do not use this property unless you need to submit a form.
		 *
		 * @type {string}
		 * @defaultvalue: ""
		 * @public
		 */
		name: {
			type: String,
		},

		_height: {
			type: CSSSize,
			defaultValue: null,
		},

		_exceededTextProps: {
			type: Object,
			defaultValue: null,
		},

		_mirrorText: {
			type: Object,
			multiple: true,
			defaultValue: "",
		},
		_maxHeight: {
			type: String,
		},
		_focussed: {
			type: Boolean,
		},
		_listeners: {
			type: Object,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.TextArea.prototype */ {
		/**
		 * Fired when the text has changed and the focus leaves the <code>ui5-textarea</code>.
		 *
		 * @event
		 * @public
		 */
		change: {},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-textarea</code> component provides large spaces for text
 * entries in the form of multiple rows.
 * It has the functionality of the <code>TextField</code> with the additional
 * functionality for multiline texts.
 * <br><br>
 * When empty, it can hold a placeholder similar to a <code>ui5-input</code>.
 * You can define the rows of the <code>ui5-textarea</code> and also determine specific behavior when handling long texts.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/TextArea";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.TextArea
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-textarea
 * @public
 */
class TextArea extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get styles() {
		return styles;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return TextAreaTemplate;
	}

	constructor() {
		super();

		this.resourceBundle = getResourceBundle("@ui5/webcomponents");

		this._listeners = {
			change: this._handleChange.bind(this),
		};
	}

	onBeforeRendering() {
		this._exceededTextProps = this._calcExceededText();
		this._mirrorText = this._tokenizeText(this.value);

		if (this.growingMaxLines) {
			// this should be complex calc between line height and paddings - TODO: make it stable
			this._maxHeight = `${this.growingMaxLines * 1.4 * 14 + 9}px`;
		}

		const FormSupport = getFeature("FormSupport");
		if (FormSupport) {
			FormSupport.syncNativeHiddenInput(this);
		} else if (this.name) {
			console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`); // eslint-disable-line
		}
	}

	getInputDomRef() {
		return this.getDomRef().querySelector("textarea");
	}

	getInputValue() {
		const inputDOM = this.getDomRef();

		if (inputDOM) {
			return this.getInputDomRef().value;
		}

		return "";
	}

	oninput() {
		const inputValue = this.getInputValue();

		this.value = inputValue;
	}

	onfocusin() {
		this._focussed = true;
	}

	onfocusout() {
		this._focussed = false;
	}

	_handleChange() {
		this.fireEvent("change", {});
	}

	_tokenizeText(value) {
		const tokenizedText = value.replace(/&/gm, "&amp;").replace(/"/gm, "&quot;").replace(/"/gm, "&#39;").replace(/</gm, "&lt;")
			.replace(/>/gm, "&gt;")
			.split("\n");

		if (tokenizedText.length < this.rows) {
			return this._mapTokenizedTextToObject([...tokenizedText, ...Array(this.rows - tokenizedText.length).fill("")]);
		}

		return this._mapTokenizedTextToObject(tokenizedText);
	}

	_mapTokenizedTextToObject(tokenizedText) {
		return tokenizedText.map((token, index) => {
			return {
				text: token,
				last: index === (tokenizedText.length - 1),
			};
		});
	}

	_calcExceededText() {
		let calcedMaxLength,
			exceededText,
			leftCharactersCount;

		if (this.showExceededText) {
			const maxLength = this.maxLength || 0;

			if (maxLength) {
				leftCharactersCount = maxLength - this.value.length;

				if (leftCharactersCount >= 0) {
					exceededText = this.resourceBundle.getText(TEXTAREA_CHARACTERS_LEFT, [leftCharactersCount]);
				} else {
					exceededText = this.resourceBundle.getText(TEXTAREA_CHARACTERS_EXCEEDED, [Math.abs(leftCharactersCount)]);
				}
			}
		} else {
			calcedMaxLength = this.maxLength;
		}

		return {
			exceededText, leftCharactersCount, calcedMaxLength,
		};
	}

	get classes() {
		return {
			main: {
				sapWCTextArea: true,
				sapWCTextAreaWarning: (this._exceededTextProps.leftCharactersCount < 0),
				sapWCTextAreaGrowing: this.growing,
				sapWCTextAreaNoMaxLines: !this.growingMaxLines,
				sapWCTextAreaWithCounter: this.showExceededText,
				sapWCTextAreaDisabled: this.disabled,
				sapWCTextAreaReadonly: this.readonly,
			},
			inner: {
				sapWCTextAreaInner: true,
				sapWCTextAreaStateInner: (this._exceededTextProps.leftCharactersCount < 0),
				sapWCTextAreaWarningInner: (this._exceededTextProps.leftCharactersCount < 0),
			},
			exceededText: {
				sapWCTextAreaExceededText: true,
			},
			mirror: {
				sapWCTextAreaMirror: true,
			},
			focusDiv: {
				sapWCTextAreaFocusDiv: true,
				sapWCTextAreaHasFocus: this._focussed,
			},
		};
	}

	get styles() {
		const lineHeight = 1.4 * 16;

		return {
			mirror: {
				"max-height": this._maxHeight,
			},
			main: {
				width: "100%",
				height: (this.rows && !this.growing) ? `${this.rows * lineHeight}px` : "100%",
			},
			focusDiv: {
				"height": (this.showExceededText ? "calc(100% - 26px)" : "100%"),
				"max-height": (this._maxHeight),
			},
		};
	}

	get tabIndex() {
		return this.disabled ? undefined : "0";
	}

	get ariaInvalid() {
		return this.valueState === "Error" ? "true" : undefined;
	}

	static async define(...params) {
		await fetchResourceBundle("@ui5/webcomponents");

		super.define(...params);
	}
}

TextArea.define();

export default TextArea;
