const express = require("express")
const {addNewHabit , getAllHabit ,deleteHabit,completeHabit} = require("../controllers/addHabit");

const {authMiddleware} = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/addNewHabit", authMiddleware, addNewHabit);
router.get("/getAllHabits", authMiddleware,getAllHabit);
router.delete("/delete/:id",authMiddleware,deleteHabit);
// router.put("/updateHabits",authMiddleware,updateHabit);
router.post("/complete/:id",authMiddleware,completeHabit)
// router.get("/habitById",authMiddleware,habitById);



module.exports = router 