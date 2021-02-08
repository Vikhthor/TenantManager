// Copyright (c) 2021, Victor Maduforo and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tenant', {
	// refresh: function(frm) {

	// }
	refresh: function(frm) {
        frm.add_custom_button('Create Rental Agreement', () => {
            frappe.new_doc('Rental Agreement', {
                tenant_name: frm.doc.full_name
            })
        })
        frm.add_custom_button('Add New Premises', () => {
            frappe.new_doc('Premises', {
                address: frm.doc.property
            })
        })
    }
});
