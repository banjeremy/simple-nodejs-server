const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

let hitCount = 0;
app.get('/api/hitcount', (req, res) => {
  res.json({ hitCount: ++hitCount });
});

app.listen(app.get('port'), () => {
  console.log(`The party is happening at: http://localhost:${app.get('port')}/`);
});
