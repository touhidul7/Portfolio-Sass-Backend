
// Health check route for debugging
app.get('/health', (req, res) => {
    res.send('OK');
});
const express = require('express');
const cors = require('cors');
const connectDB = require('../config/db');
require('dotenv').config();

const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173', 
  optionsSuccessStatus: 200
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

connectDB();

// app.use(require('../routes/inforoutes'));
// app.use(require('../routes/profilesroutes'));
// app.use(require('../routes/projectroutes'));
// app.use(require('../routes/experienceroutes'));
// app.use(require('../routes/skillroutes'));
// app.use(require('../routes/technologyroutes'));
// app.use(require('../routes/blogroutes'));

let logs = [];
const originalLog = console.log;
console.log = (...args) => {
  const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ');
  logs.push(`[${new Date().toISOString()}] ${message}`);
  if (logs.length > 1000) logs.shift();
  originalLog.apply(console, args);
};

app.get('/console', (req, res) => {
  res.send(`<pre>${logs.join('\n')}</pre>`)
});

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keyboard Shortcuts</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 600px;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #007BFF;
            color: white;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Keyboard Shortcuts</h2>
        <table>
            <tr>
                <th>Shortcut</th>
                <th>Action</th>
            </tr>
            <tr>
                <td><b>Ctrl + C</b></td>
                <td>Copy</td>
            </tr>
            <tr>
                <td><b>Ctrl + V</b></td>
                <td>Paste</td>
            </tr>
            <tr>
                <td><b>Ctrl + X</b></td>
                <td>Cut</td>
            </tr>
            <tr>
                <td><b>Ctrl + Z</b></td>
                <td>Undo</td>
            </tr>
            <tr>
                <td><b>Ctrl + Y</b></td>
                <td>Redo</td>
            </tr>
            <tr>
                <td><b>Ctrl + S</b></td>
                <td>Save</td>
            </tr>
        </table>
    </div>
</body>
</html>
    `);
});

const serverless = require('serverless-http');
module.exports = serverless(app);
