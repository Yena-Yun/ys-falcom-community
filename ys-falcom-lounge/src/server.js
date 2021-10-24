const express = require('express');
const bodyParser = require('body-parser');
const { getHtml } = require('./crawl');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('api/crawl', async (req, res) => {
  const text = await getHtml();
  console.log(text);
  // res.send([{ id: 1, text: text }]);
  // console.log(req);
  res.send(text);
});

app.listen(3000, () => console.log(`Listening on port 3000`));
