const data = {
    productInstances: require ('../models/product_instances.json'),
    setProductInstances: function(data){this.productInstances = data}
}

const createNewProductInstance = (req,res) =>{
    const NewProductInstance = {
         id: data.parts?.length ? data.parts[data.parts.length - 1].id + 1 : 20001,
         dateOfManufacture: req.body. dateOfManufacture,
         workcluster: req.body.workcluster,
    }

   
    if (!NewProductInstance.dateOfManufacture) {
        return res.status(400).json({ 'message': 'No date of manufacture given.' });
    }
    else if(!NewProductInstance.workcluster){
        return res.status(400).json({ 'message': 'No workcluster given.' });
    }
    

    data.setProductInstances([...data.productInstances,NewProductInstance]);
    res.json(data.productInstances)
    res.status(201).json(data.productInstances);
}

const updateProductInstance = (req,res) => {
    const productInstance = data.productInstances.find(productInstance => productInstance.id === parseInt(req.body.id));
    if(!productInstance){
         return res.status(400).json({"message": `Part id ${req.body.id} not found`})
    }
    if(req.body.dateOfManufacture) productInstance.dateOfManufacture = req.body.dateOfManufacture;
    if(req.body.workcluster) productInstance.workcluster = req.body.workcluster;
    const filteredArray = data.productInstances.filter(productInstance =>productInstance.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray,productInstance];
    data.setProductInstances(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    res.json(data.productInstances);
}


const getAllPIs = (req, res) => {
    res.json(data.productInstances);
}

const getProductInstance = (req,res) => {
    const productInstance = data.productInstances.find(productInstance => productInstance.id === parseInt(req.params.id))
    if(!productInstance){
         return res.status(400).json({"message": `Part id ${req.params.id} not found`})
    }
    res.json(productInstance);
}

const deleteProductInstance = (req,res) => {
    const productInstance = data.productInstances.find(productInstance => productInstance.id === parseInt(req.body.id));
    if(!productInstance){
         return res.status(400).json({"message": `ProductInstance id ${req.body.id} not found`})
    }
    const filteredArray = data.productInstances.filter(productInstance =>productInstance.id !== parseInt(req.body.id));
    data.setProductInstances([...filteredArray])
    res.json(data.productInstances);
}


module.exports = {
    createNewProductInstance,
    updateProductInstance,
    getProductInstance,
    deleteProductInstance,
    getAllPIs

}