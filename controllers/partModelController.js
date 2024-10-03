const data = {
     parts: require ('../models/parts.json'),
     setParts: function(data){this.parts = data}
}

const createNewPartModel = (req,res) =>{
     const newPart = {
          id: data.parts[data.parts.length - 1].id + 1 || 1,
          description: req.body.description,
          supplier: req.body.supplier,
          quantity: 0
     }

     data.setParts([...data.parts,newPart]);
     res,json(data.parts)
}

const updatePartModel = (req,res) => {
     const part = data.parts.find(part => part.id === parseInt(req.params.id));
     if(!part){
          return res.status(400).json({"message": `Part id ${req.params.id} not found`})
     }
     if(req.body.description) req.body.description;
     if(req.body.supplier) req.body.supplier;
     if(req.body.quantity) req.body.quantity;
     const filteredArray = data.parts.filter(part =>part.id !== parseInt(req.body.id));
     const unsortedArray = [...filteredArray,part];
     data.setParts(unsortedArray.sort((a,b) =>{a.id > b.id ? 1 :a.id < b.id ? 1 : 0 }))
     data.setParts([...filteredArray])
     res.json(data.parts);
}

const getPartModel = (req,res) => {
     const part = data.parts.find(part => part.id === parseInt(req.params.id))
     if(!part){
          return res.status(400).json({"message": `Part id ${req.params.id} not found`})
     }
     res.json(part);
}

const deletePartModel = (req,res) => {
     const part = data.parts.find(part => part.id === parseInt(req.params.id));
     if(!part){
          return res.status(400).json({"message": `Part id ${req.params.id} not found`})
     }
     const filteredArray = data.parts.filter(part =>part.id !== parseInt(req.body.id));
     data.setParts([...filteredArray])
     res.json(data.parts);
}


module.exports = {
     createNewPartModel,
     updatePartModel,
     getPartModel,
     deletePartModel

}