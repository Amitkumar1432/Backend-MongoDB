import User from "../models/userModel.js";

export const addUser = async (req, res) => {
  const { firstname, lastname, address, mobileno, pincode } = req.body;
  try {
    // console.log(firstname,lastname,address,mobileno,pincode)
    const newUser = await User.create({
      firstname,
      lastname,
      address,
      mobileno,
      pincode,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  console.log(req.params);
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
  }
};
