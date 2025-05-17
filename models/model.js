const db = require('../config/.db');

const postVtc = (vtcdata,callback) => {
    const{
        nom,
        prenom,
        email,
        telephone,
        lieu_depart,
        lieu_arrivee,
        date_trajet,
        heure_trajet,
        nombre_passagers,
        message
    } = vtcdata;

    const sql = 'INSERT INTO devis (nom, prenom, email, telephone, lieu_depart, lieu_arrivee, date_trajet, heure_trajet, nombre_passagers, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nom, prenom, email, telephone, lieu_depart, lieu_arrivee, date_trajet, heure_trajet, nombre_passagers, message], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}   

module.exports = { postVtc };