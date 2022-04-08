const User = require("../models/user");

module.exports = {
    getAllUsers: async (req, res, next) => {
    try {
        await User.find() 
        .then(result => {
            console.log(result)
            res.send(result)
            next()})       
    } catch (error) {
        console.log(error)
    };
    },

    getIdUser: async (req, res, next) => {        
        try {
            await User.findById(req.params.id)
            .then(result => {
                console.log(result)
                res.send(result)
                next()})            
        } catch (error) {
            console.log(error)            
        };
    },

    updateUser: async (req, res) => {
        const id = req.params.id;
    
        try {
          const updateUser = await User.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
          );
          console.log(updateUser);
          return res.send(`User ${id} updated`);
        } catch (error) {
          console.log(error);
        }
      },

    deleteUser: async (req, res, next) => {
        const _id = req.params.id;
        try {
            await Customer.findOneAndDelete({ _id })
                .then(result => {
                    console.log(result)
                    next()})                       
        } catch (error) {
            console.log(error);
        }
    }  
    

}

    