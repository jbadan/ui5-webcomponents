import { registerFeature } from "@ui5/webcomponents-base/dist/FeaturesRegistry.js";

class FormSupport {
	/**
	 *
	 * @param element - the WebComponent that needs form support
	 * @param nativeInputUpdateCallback - determines how the native input's disabled and value properties are calculated
	 */
	static syncNativeHiddenInput(element, nativeInputUpdateCallback) {
		const needsNativeInput = !!element.name;
		let nativeInput = element.querySelector("input[type=hidden][data-ui5-form-support]");
		if (needsNativeInput && !nativeInput) {
			nativeInput = document.createElement("input");
			nativeInput.type = "hidden";
			nativeInput.setAttribute("data-ui5-form-support", "");
			nativeInput.slot = "formSupport"; // Needed for IE - otherwise input elements are not part of the real DOM tree and are not detected by forms
			element.appendChild(nativeInput);
		}
		if (!needsNativeInput && nativeInput) {
			element.removeChild(nativeInput);
		}

		if (needsNativeInput) {
			nativeInput.name = element.name;
			(nativeInputUpdateCallback || copyDefaultProperties)(element, nativeInput);
		}
	}

	static triggerFormSubmit(element) {
		if (!element.submits) {
			return;
		}
		let parentElement;
		do {
			parentElement = element.parentElement;
		} while (parentElement && parentElement.tagName.toLowerCase() !== "form");
		if (parentElement) {
			parentElement.submit();
		}
	}
}


const copyDefaultProperties = (element, nativeInput) => {
	nativeInput.disabled = element.disabled;
	nativeInput.value = element.value;
};

// Add form support to the global features registry so that Web Components can find and use it
registerFeature("FormSupport", FormSupport);

export default FormSupport;
