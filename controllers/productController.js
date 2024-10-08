const data = {
    products: require ('../models/products.json'),
    setProducts: function(data){this.product = data}
}

const createNewProduct = (req,res) =>{
    const NewProduct = {
         id: data.products[data.products.length - 1].id + 1 || 10001,
         description: req.body.description,
         neededParts: req.body.neededParts,
    }

   
    data.setProducts([...data.products,NewProduct]);
    res.json(data.products)
    res.status(201).json(data.products);
}

const updateProduct = (req,res) => {
    const product = data.products.find(product => product.id === parseInt(req.body.id));
    if(!product){
         return res.status(400).json({"message": `Part id ${req.body.id} not found`})
    }
    if(req.body.description) product.description = req.body.description;
    if(req.body.neededParts) product.neededParts = req.body.neededParts;
    const filteredArray = data.products.filter(product =>product.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray,product];
    data.setProducts(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    res.json(data.products);
}

const getProduct = (req,res) => {
    const product = data.products.find(product => product.id === parseInt(req.params.id))
    if(!product){
         return res.status(400).json({"message": `Part id ${req.params.id} not found`})
    }
    res.json(product);
}

const deleteProduct = (req,res) => {
    const product = data.products.find(product => product.id === parseInt(req.body.id));
    if(!product){
         return res.status(400).json({"message": `Product id ${req.body.id} not found`})
    }
    const filteredArray = data.products.filter(product =>product.id !== parseInt(req.body.id));
    data.setProducts([...filteredArray])
    res.json(data.products);
}


module.exports = {
    createNewProduct,
    updateProduct,
    getProduct,
    deleteProduct

}