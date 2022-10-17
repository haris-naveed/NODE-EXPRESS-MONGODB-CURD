const asyncHandler=require('express-async-handler')
//@desc Get goals
//@route Get/api/goals
//@access private

const getGoals =asyncHandler( async (req,res)=>{
    res.status(200).json({message:'Get goals'})

})

//@desc Set goal
//@route Post/api/goals
//@access private

const setGoal =asyncHandler( async (req,res)=>{
    // console.log(req.body.text)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message:'set goal'})

}
)
//@desc Update goal
//@route PUT/api/goals/:id
//@access private

const updateGoal =asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Update goal ${req.params.id}`})

}
)

//@desc Delete goals
//@route DELETE/api/goals/:id
//@access private

const deleteGoal = async (req,res)=>{
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}


module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}