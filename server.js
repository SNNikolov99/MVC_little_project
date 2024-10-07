const express = require('express');
const app = express();
const PORT = 3501;

app.use(express.json());

app.use('/parts', require('./routes/parts'));
app.use('/products', require('./routes/products'));
app.use('/productInstances', require('./routes/productInstances'));
app.use('/workorders', require('./routes/workorders'));

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));