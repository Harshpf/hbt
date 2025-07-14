const  habitCard  = require("../models/habitCard");

exports.addNewHabit = async (req,res) => {

try{
    const userId = req.user._id;
    console.log(userId)
    const data = req.body;
    const newHabit = new habitCard({
        userId:userId,
        name: data.name,
        category: data.category,
        description: data.description,
        days: Array.isArray(data.days) ? data.days : [],
        duration: data.duration,
        enableReminder: data.enableReminder,
        reminderTime: data.reminderTime,
        priority: data.priority,
        goal: data.goal,
        notes: data.notes
    });

   await newHabit.save();
   res.status(200).json({msg:"New habbit created"})

}catch(error){
    res.status(500).json({msg:"error from adding haibt ,server error",message:error.message});
}

}


exports.getAllHabit = async (req,res) =>{
    try{
        const data  = req.user;
        console.log(data)
        const allHabits = await habitCard.find({userId:data._id});
        res.status(200).json(allHabits);
    }catch(error){
        res.status(500).json({msg:"error from getting habit",message:error.message})
    }
}