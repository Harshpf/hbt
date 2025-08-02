const   habitCard = require("../models/habitCard");
const  streak  = require("../models/completeDates");


exports.addNewHabit = async (req,res) => {

try{
    const userId = req.user._id;
    // console.log(userId)
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
   res.status(200).json({msg:"New habbit created",newHabit})

}catch(error){
    res.status(500).json({msg:"error from adding haibt ,server error",message:error.message});
}

}


exports.getAllHabit = async (req,res) =>{
    try{
        const data  = req.user;
        // console.log(data)
        const allHabits = await habitCard.find({userId:data._id});
        res.status(200).json(allHabits);
    }catch(error){
        res.status(500).json({msg:"error from getting habit",message:error.message})
    }
}

exports.deleteHabit = async(req,res) =>{
    try{

        const data= req.params;
        console.log(data.id);
        const deletedHabit = await habitCard.findByIdAndDelete(data.id);
        res.status(200).json({"msg":"habit deleted succefull"});
    }catch(err){
        res.status(500).json({msg:"error in deleting habit",message:err.message});
    }
}

exports.completeHabit = async(req,res) =>{
    try{
        const userId = req.user._id;
        const cardId = req.params.id;
        const data = req.body;
        const day = Array.isArray(data.day) ? data.day : [data.day];
        const today = data.today;


        const exist = await streak.findOne({cardId});
        if(!exist){
            const newcomplete = new streak({
            userId: userId,
            cardId: cardId,
            completed: [today],
            day
            });
            await newcomplete.save();
        }
        else {
            await streak.updateOne(
            { cardId },
            {
                $push: { completed:today } 
            }
            );
        }

        res.status(200).json("done work")
    }catch(err){
        res.status(500).json({msg:"error from server",message:err.message})
    }
}



exports.habitData = async(req,res)=>{
    try{
        const cardId = req.params.id;
        console.log(cardId)
        const data = await streak.findOne({cardId});
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({msg:"error from fetching habitData",message:err.message});
    }
}