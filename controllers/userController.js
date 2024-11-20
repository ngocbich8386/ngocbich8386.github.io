const User = require("../models/User");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error: error.message });
    }
  },
};
