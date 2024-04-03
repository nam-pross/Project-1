const express=require("express")
const app=express();
const port =3000;

const route = require("./routes/client/index.route")

app.set('view engine','pug');
app.set('views','./views');


//routes dẫn địa chỉ đến index.pug thay vì dùng app.get{ set.render }
route(app);



app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});