// Copyright (c) 2021, Victor Maduforo and contributors
// For license information, please see license.txt

frappe.ui.form.on('Owners', {
	// refresh: function(frm) {

	// }
	refresh: function(frm) {
        frm.add_custom_button('Add Property', () => {
            frappe.new_doc('Premises', {
                owner: frm.doc.full_name
            })
        })
    },
    before_save: function(frm) {
        frm.doc.full_name = frm.doc.first_name + ' ' + frm.doc.last_name;
    }
});
