import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import ListItemBase from "./ListItemBase.js";

// Template
import GroupHeaderListItemTemplate from "./generated/templates/GroupHeaderListItemTemplate.lit.js";

// Styles
import groupheaderListItemCss from "./generated/themes/GroupHeaderListItem.css.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-li-groupheader",
	properties: /** @lends  sap.ui.webcomponents.main.GroupHeaderListItem.prototype */ {
	},
	slots: /** @lends sap.ui.webcomponents.main.GroupHeaderListItem.prototype */ {
		/**
		 * Defines the text of the <code>ui5-li-groupheader</code>.
		 * <br><b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
		 *
		 * @type {Node[]}
		 * @slot
		 * @public
		 */
		"default": {
			type: Node,
		},
	},
	events: /** @lends  sap.ui.webcomponents.main.GroupHeaderListItem.prototype */ {
	},
};

/**
 * @class
 * The <code>ui5-li-group-header</code> is a special list item, used only to separate other list items into logical groups.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.GroupHeaderListItem
 * @extends ListItemBase
 * @tagname ui5-li-groupheader
 * @public
 */
class GroupHeaderListItem extends ListItemBase {
	static get render() {
		return litRender;
	}

	static get template() {
		return GroupHeaderListItemTemplate;
	}

	static get metadata() {
		return metadata;
	}

	static get styles() {
		return [ListItemBase.styles, groupheaderListItemCss];
	}

	get classes() {
		const result = super.classes;

		// Modify main classes
		result.main.sapMGHLI = true;
		result.main.sapMLIBTypeInactive = true;

		// Define span classes
		result.span = {
			sapMGHLITitle: true,
		};

		return result;
	}
}

GroupHeaderListItem.define();

export default GroupHeaderListItem;
