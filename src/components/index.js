import page from "./page/page.vue"
import eradio from "./e-radio.vue"
import epagination from "./e-pagination.vue"
import etextarea from "./e-textarea.vue"
import econfirm from "./e-confirm.vue"
import eselect from "./e-select.vue"
import ebutton from "./e-button.vue"
import emask from "./e-mask.vue"
import erouterlink from "./e-router-link.vue"
import eform from "./e-form.vue"
import econtainer from "./e-container.vue"
import elabel from "./e-label.vue"
import ecol from "./e-col.vue"
import etablecell from "./e-table-cell.vue"
import emessage from "./e-message.vue"
import ecolumn from "./e-column.vue"
import elayout from "./e-layout.vue"
import eloading from "./e-loading.vue"
import emodal from "./e-modal.vue"
import eicon from "./e-icon.vue"
import eselectoption from "./e-select-option.vue"
import etable from "./e-table.vue"
import erow from "./e-row.vue"
import eupload from "./e-upload.vue"
import enav from "./e-nav.vue"
import eimg from "./e-img.vue"
import etip from "./e-tip.vue"
import echeckbox from "./e-checkbox.vue"
import einput from "./e-input.vue"
import ecanvas from "./e-canvas.vue"

import eLoading from "./eLoading.js"
import eConfirm from "./eConfirm.js"
import eMessage from "./eMessage.js"
const Components={
	page,
	eradio
,
	epagination
,
	etextarea
,
	econfirm
,
	eselect
,
	ebutton
,
	emask
,
	erouterlink
,
	eform
,
	econtainer
,
	elabel
,
	ecol
,
	etablecell
,
	emessage
,
	ecolumn
,
	elayout
,
	eloading
,
	emodal
,
	eicon
,
	eselectoption
,
	etable
,
	erow
,
	eupload
,
	enav
,
	eimg
,
	etip
,
	echeckbox
,
	einput

}
export default {
	install:(Vue) => {
		Object.keys(Components).forEach(key =>{
			let component = Components[key];
			Vue.component(component.name, component);
		});
		
		Object.assign(Vue.prototype, {eLoading: eLoading});
		Object.assign(Vue.prototype, {eConfirm: eConfirm});
		Object.assign(Vue.prototype, {eMessage: eMessage});
		// Object.assign(Vue.prototype, {emodal: emodal});
		
	}
};