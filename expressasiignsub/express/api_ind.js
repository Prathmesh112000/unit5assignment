const express=require("express")
const app=express()
const fs=require("fs")
var cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    fs.readFile("./db.json",(err,data)=>{
        var parsed=JSON.parse(data)
        // console.log(parsed.todos)
        res.end(JSON.stringify(parsed))
    })   
})

app.delete("/todos/1",(req,res)=>{

    fs.readFile("./db.json",(err,data)=>{
        var parsed=JSON.parse(data)
        parsed.todos=parsed.todos.filter(elem=>{
            return elem.id != "2"
        })
        console.log(parsed.todos);
        res.end()
        // fs.writeFile("./db.json",JSON.stringify(parsed),(err,data)=>{
        //     console.log(data)
        // })
    })

})





app.post("/todos",(req,res)=>{
    fs.readFile("./db.json",{encoding:"utf-8"},(err,dat)=>{
       const parsed=JSON.parse(dat)
      
       parsed.todos=[...parsed.todos,req.body]
       console.log(parsed.todos);
      

       fs.writeFile("./db.json",JSON.stringify(parsed),()=>{
        res.end("task added in db.json")
    })
        // res.end()
    })



  
    
})



app.listen(8080,()=>{
    console.log("server is started on 8080")
})