const express = require('express');
const bodyParser = require('body-parser');
const { getHtml } = require('./crawl');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function handleAsync() {
  const sum = await getHtml();
  // console.log(sum);
  return sum;
}

app.get('/api/crawl', async (req, res) => {
  const text = await handleAsync();

  res.send([{ id: 1, text: text }]);
});

app.listen(5000, () => console.log(`Listening on port 5000`));
