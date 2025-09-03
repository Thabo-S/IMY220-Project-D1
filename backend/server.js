// const express = require("express");
// const path = require("path");

// const app = express();
// const port = 3000;

// app.use(express.static(path.join(__dirname,'frontend/public')));

// app.get('/api',(req, res) => {
//     res.json({message: "Backend stuff for later"});
// });

// app.get('/{*any}', (req,res)=> res.sendFile(path.resolve('frontend/public','index.html')));

// app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`)
// })



//working
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static('frontend/public'));

app.get('/api',(req, res) => {
    res.json({message: "Backend stuff for later"});
});

app.get('/{*any}', (req,res)=> res.sendFile(path.resolve('frontend/public','index.html')));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

// backend/server.js NOT WORKING
// const express = require('express');
// // const cors = require('cors');
// const path = require('path');
// const app = express();
// const PORT = 5000;

// // Middleware
// // app.use(cors());
// app.use(express.json());

// // Serve static files from frontend in production
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/public')));
// }

// // Stubbed authentication endpoints
// app.post('/api/auth/signup', (req, res) => {
//     console.log('Signup attempt:', req.body);
//     res.json({
//         success: true,
//         message: 'User created successfully',
//         user: {
//             id: Math.random().toString(36).substr(2, 9),
//             name: req.body.name,
//             email: req.body.email
//         },
//         token: 'stub-jwt-token-' + Date.now()
//     });
// });

// app.post('/api/auth/login', (req, res) => {
//     console.log('Login attempt:', req.body);
//     res.json({
//         success: true,
//         message: 'Login successful',
//         user: {
//             id: 'user123',
//             name: 'Test User',
//             email: req.body.email
//         },
//         token: 'stub-jwt-token-' + Date.now()
//     });
// });


// app.listen(PORT, () => {
//     console.log(`App listening at http://localhost:${PORT}`);
// });

