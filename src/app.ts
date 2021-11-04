const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});


const PORT: any = 6060;
     app.listen(PORT, () => {
      console.log(`Application run on the ${PORT}`);
    });

