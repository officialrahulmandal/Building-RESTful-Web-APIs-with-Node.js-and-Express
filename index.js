const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
    res.send(`node is runnuning on port ${PORT}`)
)

app.listen(PORT, ()=>
    console.log(`your server is running on port ${PORT}`)
)