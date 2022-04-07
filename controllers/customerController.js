const Customer = require("../models/customer");

module.exports = {
    getAllCustomer: async (req, res, next) => {
    try {
        await Customer.find() 
        .then(result => {
            console.log(result)
            res.send(result)
            next()})       
    } catch (error) {
        console.log(error)
    };
    },

    getIdCustomer: async (req, res, next) => {        
        try {
            await Customer.findById(req.params.id)
            .then(result => {
                console.log(result)
                res.send(result)
                next()})            
        } catch (error) {
            console.log(error)            
        };
    },

    createCustomer: async (req, res) => {
        console.log(req.body)
    try {
        await Customer.create({ 
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            dogs: [{
                dogName: req.body.dogs[0]?.dogName,
                size: req.body.dogs[0]?.size,
                hair: req.body.dogs[0]?.hair,
                info: req.body.dogs[0]?.info
            }]            
        })
        .then(response => {
            console.log(response.data)
            return res.send(`Created ${response.data}`)
        })
    } catch (error) {
        console.log(error)        
    }
    },

    updateCustomer: async (req, res) => {
        const id = req.params.id;
    
        try {
          const updateCustomer = await Customer.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
          );
          console.log(updateCustomer);
          return res.send(`Customer ${id} updated`);
        } catch (error) {
          console.log(error);
        }
      },

    deleteCustomer: async (req, res, next) => {
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

    