const Customer = require("../models/Customer");

module.exports = {
  getAllCustomers: async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching customers", error: error.message });
    }
  },

  getCustomerById: async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) return res.status(404).json({ message: "Customer not found" });
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: "Error fetching customer", error: error.message });
    }
  },

  createCustomer: async (req, res) => {
    try {
      const customer = new Customer(req.body);
      await customer.save();
      res.status(201).json({ message: "Customer created successfully", customer });
    } catch (error) {
      res.status(500).json({ message: "Error creating customer", error: error.message });
    }
  },

  updateCustomer: async (req, res) => {
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCustomer) return res.status(404).json({ message: "Customer not found" });
      res.status(200).json({ message: "Customer updated successfully", updatedCustomer });
    } catch (error) {
      res.status(500).json({ message: "Error updating customer", error: error.message });
    }
  },

  deleteCustomer: async (req, res) => {
    try {
      const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
      if (!deletedCustomer) return res.status(404).json({ message: "Customer not found" });
      res.status(200).json({ message: "Customer deleted successfully", deletedCustomer });
    } catch (error) {
      res.status(500).json({ message: "Error deleting customer", error: error.message });
    }
  },
};
