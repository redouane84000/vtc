const db = require('../config/.db');   
const { postVtc } = require('../models/model');

const postVtcController = (req, res) => {
    const vtcdata = req.body;
    postVtc (vtcdata, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error inserting data');
        } else {
            console.log(result);
            res.status(200).send('Data inserted successfully');
        }
    });
}

module.exports = { postVtcController };
