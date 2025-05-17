const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const vtcRoutes = require('./routes/route');



app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.body);
    
    next();
 });

app.use('/vtc', vtcRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
