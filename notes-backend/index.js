const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');

//parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//attach public folder
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');

app.get("/",function(req,res){
    //added files
    fs.readdir(`./files`,function(err,files){
        res.render("index",{files:files});
            
});
})


app.post("/create",function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
        if(err) throw err;
        res.redirect("/")
    });
   
})

app.post("/edit",function(req,res){

    console.log(req.body);
    fs.rename(`./files/${req.body.title}`,`./files/${req.body.newName}`,function(err){
        res.redirect("/");
     });
   
})




app.get("/files/:filename",function(req,res){
    fs.readFile(`./files/${req.params.filename}`,'utf8',function(err,data){
        if(err) throw err;
        res.render("show", {filename:req.params.filename, content:data} );
    }
    );
});


app.get("/edit/:filename",function(req,res){

    res.render('edit',{filename:req.params.filename});
    
});


app.listen(3000,function(){
    console.log("Its running...");  
})