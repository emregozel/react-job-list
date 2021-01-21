const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/priority', (req, res) => {
  res.send([{label: 'Urgent', value: 'Urgent'},{label: 'Regular', value: 'Regular'},{label: 'Trivial', value: 'Trivial'}]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));