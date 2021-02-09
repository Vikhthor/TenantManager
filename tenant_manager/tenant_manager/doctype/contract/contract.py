# -*- coding: utf-8 -*-
# Copyright (c) 2021, Victor Maduforo and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Contract(Document):
	def save(self, *args, **kwargs):
		self.expiry_date = frappe.utils.add_years(self.start_date, self.term)
		# chunks = self.start_date.split('-')
		# #chunks = ['year','month', 'day']
		# #chunks[0] = self.start_date.year
		# #chunks[1] = self.start_date.month
		# #chunks[2] = self.start_date.day
		# #year = int(chunks[0])
		# #month = int(chunks[1])
		# #day = int(chunks[2])
		# #expiry = f'{year + self.term}-{month}-{day}'
		# #self.expiry_date = expiry
		property = frappe.get_doc('Premises', self.property)
		if property.status == 'Occupied':
			frappe.msgprint(frappe._('Warning'), frappe._('This property has been rented out'))
		super().save(*args, **kwargs)
		# pass
