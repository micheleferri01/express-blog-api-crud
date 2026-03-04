const express = require('express');
const app = express();
const port = 3000;
const url = `http://localhost:${port}`;
const postsRouter = require('./routers/posts');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`the server is listening on port: ${port}`);
});