import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "User name is required"],
  },
  lastname: {
    type: String,
    required: [true, "Email is required"],
  },
  address: {
    type: String,
    required: [true, "Email is required"],
  },
  mobileno: {
    type: Number,
  },
  pincode: {
    type: Number,
    required: [true, "Pincode is required"],
  },
});

const User = mongoose.model("user", userSchema);

export default User;
