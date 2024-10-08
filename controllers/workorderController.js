const data = {
    workorders: require ('../models/workorders.json'),
    setWorkorders: function(data){this.workorders = data}
}

const createNewWorkorder = (req,res) =>{
    const NewWorkorder = {
         id: data.parts?.length ? data.parts[data.parts.length - 1].id + 1 : 30001,
         customer: req.body.customer,
         deliveryDate: req.body.deliveryDate,
         neededProducts : req.body.neededProducts
    }

    if (!NewWorkorder.customer) {
        return res.status(400).json({ 'message': 'No customer given.' });
    }
    else if(!NewWorkorder.deliveryDate){
        return res.status(400).json({ 'message': 'No delivery date given.' });
    }
    else if((!NewWorkorder.neededProducts)){
        return res.status(400).json({ 'message': 'No array of needed products is given.' });
    }
    
    data.setWorkorders([...data.workorders,NewWorkorder]);
    res.json(data.workorders)
    res.status(201).json(data.workorders);
}

const updateWorkorder = (req,res) => {
    const workorder = data.workorders.find(workorder => workorder.id === parseInt(req.body.id));
    if(!workorder){
         return res.status(400).json({"message": `Part id ${req.body.id} not found`})
    }
    if(req.body.customer) workorder.customer = req.body.customer;
    if(req.body.deliveryDate) workorder.deliveryDate = req.body. deliveryDate;
    if(req.body.neededProducts) workorder.neededProducts = req.body.neededProducts;
    const filteredArray = data.workorders.filter(workorder =>workorder.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray,workorder];
    data.setWorkorders(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    res.json(data.workorders);
}


const getAllWorkorders = (req, res) => {
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
    deleteWorkorder,
    getAllWorkorders

}