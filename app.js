const express = require('express');
const app = express();
const port = process.env.PORT || 3000;      
const cors = require('cors');
const vtcRoutes = require('./routes/route');
const dotenv = require('dotenv');

dotenv.config();


app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.body);
    
    next();
 });


app.get('/', (req, res) => {
    res.send('Hello World test de connexion');
});

app.use('/vtc', vtcRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
