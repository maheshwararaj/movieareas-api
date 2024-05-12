import express from 'express';
import movieRoutes from './routes/movies.route.js'
const app = express()
const port = 6969;
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ msg: "Hello students!!" });
  });
  

//crud functionality
// //client -> middleware -> server
 app.use('/movies',movieRoutes);

app.listen(port,()=>{
    console.log(`server running in http://localhost:${port}`)
})