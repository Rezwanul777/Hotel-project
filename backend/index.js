const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors=require('cors')
require('dotenv').config()

const port = process.env.PORT || 5000



// body parser
app.use(express.json())
app.use(cors())

//router define
const blogRoutes=require('./src/routes/blog.route')
app.use('/api/v1/blog',blogRoutes )

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
    
}
main().then(()=>console.log("database connected successfully")).catch((err)=> console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

