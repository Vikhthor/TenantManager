## Tenant Manager

A Frappe application to assist property agents in managing tenants

### Installation

On your Frappe bench directory, run the following command to add the app:

> $ bench get-app https://github.com/Vikhthor/TenantManager.git

### Installation

This Frappe app assists Housing Agents to:
1. Manage poperties on behalf of the owners
2. Manage tenants occupying the properties (Define contracts, acknowledge rent etc)
3. Generate report on Rents received over a specified period.

### DocTypes

The app provides DocTypes as follows:
1. Premises: The housing property under the Agent's control. Specifies the location (address and state) and status (vacant or occupied).
2. Owners: The details of the property owners like owner's name, email and a link to the premises owned.
3. Contract: The rental agreement between the Agent and a tenant. Defines the terms of the letting contract like term (duration of each rentage), standard Rental fee, additional utilities included, and status of the contract (active or terminated) with respect to the property in question.
4. Tenant: The tenancy details of a particular tenant. Includes his/her name, rent paid, standard number of occupants and links to the respective contract and property occupied by the tenant.
5. Paid Rents: The description of actual rent paid by tenants and their expected rent as defined in their respective contract. It also includes a report that gives an overview of rent received the period.

#### License

Proprietary