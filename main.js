import express from 'express';

const app = express()

app.get('/',(req,res)=>{
    res.json({msg:"hello students!"});
})

const port = 6969;
app.listen(port,()=>{
    console.log(`server running in http://localhost:${port}`)
})