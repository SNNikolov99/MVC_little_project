const data = {
     parts: require ('../models/parts.json'),
     setParts: function(data){this.parts = data}
}

const getAllParts = (req, res) => {
     res.json(data.parts);
 }

const createNewPartModel = (req,res) =>{

     const newPart = {
          id: data.parts?.length ? data.parts[data.parts.length - 1].id + 1 : 1,
          description: req.body.description,
          supplier: req.body.supplier,
          quantity: req.body.quantity
     }


     if (!newPart.description) {
          return res.status(400).json({ 'message': 'No description given.' });
      }
      else if(!newPart.supplier){
          return res.status(400).json({ 'message': 'No supplier given.' });
      }
      else if((!newPart.quantity)){
          return res.status(400).json({ 'message': 'No quantity given.' });
      }

     data.setParts([...data.parts,newPart]);
     res.json(data.parts);
     res.status(201).json(data.parts);
}

const updatePartModel = (req,res) => {

     const part = data.parts.find(part => part.id === parseInt(req.body.id));
     if(!part){
          return res.status(400).json({"message": `Part id ${req.body.id} not found`})
     }
     if(req.body.description) part.description = req.body.description;
     if(req.body.supplier) part.supplier = req.body.supplier;
     if(req.body.quantity) part.quantity = req.body.quantity;
     const filteredArray = data.parts.filter(part =>part.id !== parseInt(req.body.id));
     const unsortedArray = [...filteredArray,part];
     data.setParts(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
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
     const part = data.parts.find(part => part.id === parseInt(req.body.id));
     if(!part){
          return res.status(400).json({"message": `Part id ${req.body.id} not found`})
     }
     const filteredArray = data.parts.filter(part =>part.id !== parseInt(req.body.id));
     data.setParts([...filteredArray])
     res.json(data.parts);
}


module.exports = {
     getAllParts,
     createNewPartModel,
     updatePartModel,
     getPartModel,
     deletePartModel

}