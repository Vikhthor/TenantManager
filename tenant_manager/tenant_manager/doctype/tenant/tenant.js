// Copyright (c) 2021, Victor Maduforo and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tenant', {
	refresh: function(frm) {
        frm.add_custom_button('Create Rental Agreement', () => {
            frappe.new_doc('Contract', {
                tenant_name: frm.doc.full_name
            })
        })
        frm.add_custom_button('Add New Property', () => {
            frappe.new_doc('Premises')
        })
    }
});
