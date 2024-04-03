const express=require("express")
const app=express();
const port =3000;

app.set('view engine','pug');
app.set('views','./views');




app.get("/",(req,res)=>{
    res.send("123");
});

app.get("/product",(req,res)=>{
    res.send("Danh sách");
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});