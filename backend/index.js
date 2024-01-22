const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'zscorecheckre',
});

db.connect(err => {
   if (err) {
      console.error('MySQL connection error: ', err);
   } else {
      console.log('Connected to MySQL database');
   }
});

app.post('/datafill', (req, res) => {
   const formData = req.body;

   const query = 'INSERT INTO zscorechecker SET ?';

   db.query(query, formData, (err, result) => {
      if (err) {
         console.error('MySQL query error: ', err);
         res.status(500).send('Error submitting form');
      } else {
         console.log('Form data submitted successfully');
         res.status(200).send('Form data submitted successfully');
      }
   });
});


app.post('/api/Contactus', (req, res) => {
   const formData = req.body;

   const query = 'INSERT INTO contact_details SET ?';

   db.query(query, formData, (err, result) => {
      if (err) {
         console.error('MySQL query error: ', err);
         res.status(500).send('Error submitting form');
      } else {
         console.log('Form data submitted fuvker imsefiiwer  successfully');
         res.status(200).send('Form data submitted successfully');
      }
   });
});





app.post('/User-Submited', (req, res) => {
    const { subjectstream, subject1, subject2, subject3, Distric, Zscore } = req.body;


 
   const query = "SELECT * FROM zscorechecker WHERE zscore > ? AND subject_one = ? AND subject_two = ? AND subject_tree = ?;";
 
   db.query(query, [Zscore, subject1, subject2, subject3], (error, results) => {
     if (error) {
       console.error(error);
       res.status(500).send('Error processing query');
     } else {
       const data = JSON.stringify(results);
       console.log(data);
       res.send(data); 
     }
   });
 
});




app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
