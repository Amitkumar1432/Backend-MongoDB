import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/adduser", addUser);
router.get("/getuser/:id", getUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

export default router;
