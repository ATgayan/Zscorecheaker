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


app.post('http://localhost:4000/api/Contact_us', (req, res) => {
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

app.get('/Resultpage',(req,res)=>{
          const query='SELECT * FROM zscorechecker';

          db.query(query,(err,result)=>{
            if(err){
               console.log(err);
            }
            else{
               const data = JSON.stringify(result);
               const newData=JSON.parse(data);
               res.send(newData);
               
            }
              
          });
});



app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
