const DemoDB = require('../model/model');
const sentEmail = require('../utiles/sentEmail');
const User = require('../model/User_model')

const controller = {
  getAll: async (req, res) => {
    try {
      const all = await DemoDB.find().select('-__v');
      res.status(200).json(all);
    } catch (err) {
      res.status(500).json('Error to get all Item');
    }
  },
  createPost: async (req, res) => {
    try {
      console.log(req.body);
      const newPost = new DemoDB(req.body);
      const savedPost = await newPost.save();
      if (!savedPost) {
       return res.status(400).json({ message: 'Not Saved' });
      }
 
      // Email notification
      // Find that person who has logged in
      const user = await User.findById(req.userId)
      await sentEmail(
        // In this place who is logged in that person have tis mail
        // But that is must be Authendicated route
        'itsm29101@gmail.com',//Instand user.email
        'New Member is added',
        `A new Member name is ${savedPost.name} has been created`
      );
      res.status(201).json(savedPost);
    } catch (err) {
      res.status(500).json({ message: 'Error to Create new Post' ,err:err.message});
    }
  },
  gteByID: async (req, res) => {
    try {
      const id = req.params.id;
      const getOne = await DemoDB.findById(id);
      if (!getOne) {
        res.status(404).json('ID is not Found');
      }
      res.status(200).json(getOne);
    } catch (err) {
      res.status(500).json({ message: 'Error to get that Id' });
    }
  },
  upPost: async (req, res) => {
    try {
      const id = req.params.id;
      const newUpdate = req.body;
      const updated = await DemoDB.findByIdAndUpdate(id, newUpdate, {
        new: true,
      });
      if (!updated) {
        res.status(404).json({ message: 'Not get that id' });
      }
      res.status(200).json({ message: 'Successful', updated });
    } catch (err) {
      res.status(500).json({ message: 'Error to get that id' });
    }
  },
  deletePost: async (req, res) => {
    try {
      const id = req.params.id;
      const deleted = await DemoDB.findByIdAndDelete(id);
      if (!deleted) {
        res.status(404).json({ message: 'Not get ID' });
      }
      res.status(200).json({ message: 'Successfully Deleted!!!', deleted });
    } catch (err) {
      res.status(500).json({ message: 'Error to Delelte' });
    }
  },
};
module.exports = controller;
