
import express from "express";
import { addData,updateData,getData,getSingleData } from '../controllers/dataController.js'

//router object
const router = express.Router();

router.get('/',getData)
router.get('/',getSingleData)
router.post("/add", addData);
router.put("/update", updateData);

export default router;
