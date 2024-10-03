const data = {
    workorders: require ('../models/workorders.json'),
    setWorkorders: function(data){this.workorders = data}
}

const createNewWorkorder = (req,res) =>{
    const NewWorkorder = {
         id: data.workorders[data.workorders.length - 1].id + 1 || 1,
         customer: req.body.customer,
         deliveryDate: req.body.deliveryDate,
         neededProducts : req.body.neededProducts
    }

    
    data.set([...data.workorders,NewWorkorder]);
    res,json(data.workorders)
}

const updateWorkorder = (req,res) => {
    const workorder = data.workorders.find(workorder => workorder.id === parseInt(req.params.id));
    if(!workorder){
         return res.status(400).json({"message": `Part id ${req.params.id} not found`})
    }
    if(req.body.customer) req.body.customer;
    if(req.body.deliveryDate) req.body. deliveryDate;
    if(req.body.neededProducts) req.body.neededProducts;
    const filteredArray = data.workorders.filter(workorder =>workorder.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray,workorder];
    data.setWorkorders(unsortedArray.sort((a,b) =>{a.id > b.id ? 1 :a.id < b.id ? 1 : 0 }))
    data.setWorkorders([...filteredArray])
    res.json(data.workorders);
}

const getWorkorder = (req,res) => {
    const workorder = data.workorders.find(workorder => workorder.id === parseInt(req.params.id))
    if(!workorder){
         return res.status(400).json({"message": `Part id ${req.params.id} not found`})
    }
    res.json(workorder);
}

const deleteWorkorder = (req,res) => {
    const workorder = data.workorders.find(workorder => workorder.id === parseInt(req.params.id));
    if(!workorder){
         return res.status(400).json({"message": `Workorder id ${req.params.id} not found`})
    }
    const filteredArray = data.workorders.filter(workorder =>workorder.id !== parseInt(req.body.id));
    data.setWorkorders([...filteredArray])
    res.json(data.workorders);
}


module.exports = {
    createNewWorkorder,
    updateWorkorder,
    getWorkorder,
    deleteWorkorder

}