const { find } = require("../models/customer");
const Customer = require("../models/customer");



module.exports = {
    getAllCustomer: async (req, res, next) => {
    try {
        await Customer.find() 
        .then(result => {
            console.log(result)
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
                next()})            
        } catch (error) {
            console.log(error)            
        };
    },

    createCustomer: async (req, res) => {
    try {
        await Customer.create({ 
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            dogs: {
                dogName: req.body.dogName,
                size: req.body.size,
                hair: req.body.hair,
                info: req.body.info
            }
        })
        //console.log("test")
        res.redirect("/");
        
    } catch (error) {
        console.log(error)        
    }
    },

    updateCustomer: async (req, res) => {
        const id = req.params.id;
        try {
            await Customer.findOneAndUpdate(id, {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                dogs: {
                    dogName: req.body.dogName,
                    size: req.body.size,
                    hair: req.body.hair,
                    info: req.body.info
                    }
            });
            res.send(`Customer ${id} updated`)            
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

    