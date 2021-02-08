// Copyright (c) 2021, Victor Maduforo and contributors
// For license information, please see license.txt

frappe.ui.form.on('Rental Agreement', {
	// refresh: function(frm) {

	// }
	frm.add_custom_button('Collect Rent', () => {
		frappe.new_doc('Paid Rents', {
			expected_rent: frm.doc.rental_fee,
			property: frm.doc.property,
			tenant: frm.doc.tenant_name
		})
	})
});
