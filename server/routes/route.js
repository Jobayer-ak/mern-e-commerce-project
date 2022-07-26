import express from "express";
import { getProducts } from "../controller/product-controller.js";

import { userSignup, userLogin } from "../controller/user-controller.js";


const router = express.Router();

router.get("/products", getProducts)

router.post("/signup", userSignup);
router.post("/login", userLogin);


export default router;