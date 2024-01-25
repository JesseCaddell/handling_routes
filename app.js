const express = require('express');
const app = express();

app.get('/user/:username', (req, res) => {
    const { username } = req.params;
    res.send(`Hello ${username}`);
  });
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  