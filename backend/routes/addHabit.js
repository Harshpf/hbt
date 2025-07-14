const express = require("express")
const {addNewHabit , getAllHabit } = require("../controllers/addHabit");

const {authMiddleware} = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/addNewHabit", authMiddleware, addNewHabit);
router.get("/getAllHabits", authMiddleware,getAllHabit);


module.exports = router 