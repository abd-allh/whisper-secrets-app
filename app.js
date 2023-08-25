import express from "express"
import axios from "axios"

const app = express()
const port = 3000
const API_URL = "https://secrets-api.appbrewery.com/random"

app.use(express.static("public"))

app.get("/", async (req, res) => {
  axios
    .get(API_URL)
    .then(function (response) {
      // handle success
      res.render("index.ejs", {
        user: response.data.username,
        secret: response.data.secret,
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .finally(function () {
      // always executed
    })
})

// app.get("/", async (req, res) => {
//   try {
//     const result = await axios.get(API_URL)
//     console.log(result.data)
//     res.render("index.ejs", { user: user, secret: secret })
//   } catch (error) {
//     console.log(result.data)
//     res.render("index.ejs", { secret: error.message })
//   }
// })

app.listen(port, (err) => {
  if (err) console.error(err.message)
  console.log(`Listening on port: ${port}.`)
})
