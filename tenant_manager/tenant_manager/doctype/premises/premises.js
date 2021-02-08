// Copyright (c) 2021, Victor Maduforo and contributors
// For license information, please see license.txt

frappe.ui.form.on('Premises', {
	// refresh: function(frm) {

	// }
	refresh: function(frm) {
        frm.add_custom_button('Add Owner', () => {
            frappe.new_doc('Owners', {
                property: frm.doc.address
            })
        })
        frm.add_custom_button('Assign Tenant', () => {
            frappe.new_doc('Tenant', {
                property: frm.doc.address
            })
        })
    }
});
