import express from "express"
import axios from "axios"

const app = express()
const port = 3000
const API_URL = "https://secrets-api.appbrewery.com/random"

app.use(express.static("public"))

app.get("/", (req, res) => {
  axios
    .get(API_URL)
    .then((response) => {
      const { secret, username } = response.data
      res.render("index.ejs", { user: username, secret: secret })
    })
    .catch(function (error) {
      console.log(error)
      // console.log(error.response.data)
      res.status(500)
    })
})

app.listen(port, (err) => {
  if (err) console.error(err.message)
  console.log(`Listening on port: ${port}.`)
})
