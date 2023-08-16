//1) setup of application(require/imports ex. express,react,cors,modal, etc...)
const express  = require('express');

//2)
const app = express();


//3) defining objects i.e plants array


//4) define the routes
app.get('/tip', (req, res) => { 
 res.send('Put in total and tip percent in URL')
  });

//define routes
app.get('/tip/:total/:tipPercentage', (req,res)=>{
  const total = Number(req.params.total);
  const tipPercentage = Number(req.params.tipPercentage).toFixed(2);

    const tipAmount = (total * tipPercentage) / 100;
    const totalA = total + tipAmount;
  
  res.send(`The total is ${totalA.toFixed(2)} and the tip amount is ${tipAmount.toFixed(2)}`)
  
});


//5) app.listen(very last)
app.listen(3000, ()=>{
    console.log('Listening on Port 3000')
});