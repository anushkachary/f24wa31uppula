// In your app.js or server.js file
 
const express = require('express');
const app = express();
const port = 3000;
 
// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to my Express server!'); // Message for root URL
});
 
// Other routes, like your computation endpoint
app.get('/computation', (req, res) => {
    // Generate a random value between -1 and 1
    let x = (Math.random() * 2 - 1); // Generates a number between -1 and 1
    // Check for query parameter 'x' and use that value if provided
    if (req.query.x) {
        x = parseFloat(req.query.x);
    }
 
    // Apply Math functions
    const absValue = Math.abs(x);
    const acosValue = Math.acos(x);
    const sinValue = Math.sin(x);
    const sinhValue = Math.sinh(x);
    // Prepare the response string
    const response = `
        Math.abs() applied to ${x} is ${absValue} <br>
        Math.acos() applied to ${x} is ${acosValue} <br>
        Math.sin() applied to ${x} is ${sinValue} <br>
        Math.sinh() applied to ${x} is ${sinhValue}
    `;
    // Send the response
    res.send(response);
});
 
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});