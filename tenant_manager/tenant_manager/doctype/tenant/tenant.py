# -*- coding: utf-8 -*-
# Copyright (c) 2021, Victor Maduforo and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Tenant(Document):
	# this method will run every time a document is saved
    def before_save(self):
        self.full_name = f'{self.first_name} {self.last_name or ""}'
    def validate(self):
        property = frappe.get_doc('Premises', self.property)
        if property.status == 'Occupied':
            frappe.throw('This property is already let out')
        else:
            return
    def save(self,*args, **kwargs):
        self.full_name = f'{self.first_name} {self.last_name or ""}'
        if (self.rent_paid > self.rental_fee):
            self.advance_rent = self.rent_paid - self.rental_fee
        else:
            self.advance_rent = 0
        if (self.rental_fee > self.rent_paid):
           self.rent_due = self.rental_fee - self.rent_paid
        else:
            self.rent_due = 0
        super().save(*args, **kwargs)
    def on_submit(self):
        property = frappe.get_doc('Premises', self.property)
        property.status = 'Occupied'
        property.save()
	# pass