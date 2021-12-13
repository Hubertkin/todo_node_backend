const Todo = require('../models/Todo')

async function addTodo(req , res){
    try{
      const newTodo = await Todo.create(req.body);
      res.status(200).json(newTodo);
    }catch(error){
        console.log('can\'t add Data: ',error.message);
        res.status(401).json({message: 'Can\'t add Data'});
    }
}

 async function deleteTodoById(req,res){
     const todoId = req.params.id
    try {
       await Todo.findByIdAndDelete(todoId);
       res.status(200).json({message :'Todo has been deleted successfully'});
    } catch (error) {
       console.log('Can\'t delete: ', error.message); 
       res.status(401).json({error: error.message});
    }
}

 async function updateTodoById(req,res){
     const todoId = req.params.id;
     const body = req.body;
     try {
          await Todo.findByIdAndUpdate(todoId , body);
         res.status(200).json({message: 'Todo is updated'})
         
     } catch (error) {
         console.log('Can\'t update:', error.message);
         res.status(401).json({error: error.message});
     }

}
async function getTodoById(req,res){
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo);
    } catch (error) {
        console.log('Can\'t get todo: ',error.message);
        res.status(401).json({error: error.message});
        
    }

}

async function getAllTodo(req,res){
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        console.log('Can\'t get data :', error.message)
        
    }

}

module.exports = {
    getAllTodo,
    addTodo,
    updateTodoById,
    deleteTodoById,
    getTodoById
}





