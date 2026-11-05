const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

const userRouter = require('./routers/users');

app.use("/", userRouter);

app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log("Server Listening on PORT", PORT)
})