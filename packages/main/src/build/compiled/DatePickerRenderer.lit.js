
/* eslint no-unused-vars: 0 */	
import ifTruthy from '@ui5/webcomponents-base/src/renderer/ifTruthy.js';
import { html, svg, repeat } from '@ui5/webcomponents-base/src/renderer/LitRenderer.js';
const DatePickerLitRenderer = {};
const block0 = (context) => { return html`<div 	id="${ifTruthy(context.ctr._id)}"	data-sap-ui="${ifTruthy(context.ctr._id)}"	aria-hidden="${ifTruthy(context.ariaHidden)}"		class="${ifTruthy(context.classes.main)}"		style="${ifTruthy(context.styles.main)}"><!-- INPUT --><ui5-input			id="${ifTruthy(context.ctr._id)}-inner"			placeholder="${ifTruthy(context.ctr._input.placeholder)}"			type="${ifTruthy(context.ctr._input.type)}"			value="${ifTruthy(context.ctr.value)}"			?disabled="${ifTruthy(context.ctr.disabled)}"			?readonly="${ifTruthy(context.ctr.readonly)}"			value-state="${ifTruthy(context.ctr.valueState)}"			@change="${ifTruthy(context.ctr._input.onChange)}"			@input="${ifTruthy(context.ctr._input.onLiveChange)}"			data-sap-focus-ref	>		${ context.showIcon ? block1(context) : undefined }</ui5-input><!-- POPOVER --><ui5-popover			id="${ifTruthy(context.ctr._id)}-popover"			allow-target-overlap="${ifTruthy(context.ctr._popover.allowTargetOverlap)}"			placement-type="${ifTruthy(context.ctr._popover.placementType)}"			hide-header="${ifTruthy(context.ctr._popover.hideHeader)}"			hide-arrow="${ifTruthy(context.ctr._popover.hideArrow)}"			horizontal-align="${ifTruthy(context.ctr._popover.horizontalAlign)}"			stay-open-on-scroll="${ifTruthy(context.ctr._popover.stayOpenOnScroll)}"			.customClasses="${ifTruthy(context.ctr._popover._customClasses)}"			@afterClose="${ifTruthy(context.ctr._popover.afterClose)}"			@afterOpen="${ifTruthy(context.ctr._popover.afterOpen)}"	><ui5-calendar				id="${ifTruthy(context.ctr._id)}-calendar"				data-ui5-slot="content"				primary-calendar-type="${ifTruthy(context.ctr._calendar.primaryCalendarType)}"				format-pattern="${ifTruthy(context.ctr._calendar.formatPattern)}"				timestamp="${ifTruthy(context.ctr._calendar.timestamp)}"				.selectedDates="${ifTruthy(context.ctr._calendar.selectedDates)}"				@selectedDatesChange="${ifTruthy(context.ctr._calendar.onSelectedDatesChange)}"		></ui5-calendar></ui5-popover><slot name="formSupport"></slot></div>`; };
const block1 = (context) => { return html`<ui5-icon				data-ui5-slot="icon"				src="${ifTruthy(context.ctr._input.icon.src)}"				class="${ifTruthy(context.classes.icon)}"				tabindex="-1"			></ui5-icon>		`; };
const renderMe = block0;
DatePickerLitRenderer.render = renderMe;
export default DatePickerLitRenderer;