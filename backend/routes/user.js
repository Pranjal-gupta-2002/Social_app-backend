import express from "express";
import { deleteMyProfile, followUser, forgotPassword, getAllUsers, getUserProfile, login, logout, myProfile, register, resetPassword, updatePassword, updateProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.route("/register").post(register)

router.route("/login").post(login)

router.route("/logout").get(logout)

router.route("/follow/:id").get(isAuthenticated,followUser)

router.route("/update/password").put(isAuthenticated,updatePassword)

router.route("/update/profile").put(isAuthenticated,updateProfile)

router.route("/delete/me").delete(isAuthenticated,deleteMyProfile)

router.route("/me").get(isAuthenticated,myProfile)

router.route("/user/:id").get(isAuthenticated,getUserProfile)

router.route("/users").get(isAuthenticated,getAllUsers)

router.route("/forgot/password").post(forgotPassword)

router.route("/password/reset/:token").put(resetPassword)

export default router;