const express = require("express")
const {addNewHabit , getAllHabit ,deleteHabit,completeHabit,habitData} = require("../controllers/addHabit");

const {authMiddleware} = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/addNewHabit", authMiddleware, addNewHabit);
router.get("/getAllHabits", authMiddleware,getAllHabit);
router.delete("/delete/:id",authMiddleware,deleteHabit);
router.post("/complete/:id",authMiddleware,completeHabit)
router.get("/habitData/:id",authMiddleware,habitData);
// router.put("/updateHabits",authMiddleware,updateHabit);



module.exports = router 