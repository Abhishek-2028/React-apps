const express=require("express")
const nodemailer=require("nodemailer")
const app=express();
let port=2200;
app.use(express.json());


app.post("/mail",(res)=>{
    
        let transpoter=nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: false,
            port: 587,
            requireTLS:'true',
            auth:{
                user:'',
                pass:''
            }   
        })

        transpoter.sendMail({
            from:'abhishekkolaskar2001@gmail.com',
            to:'dhananjaykolaskar2001@gmail.com',
            subject:'appointment confirmation mail',
            text:'your appointment is accepted'
        }).then(()=>{console.log('mail send')})
           
})

app.post("/mailreject",(res)=>{
    
    let transpoter=nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false,
        port: 587,
        requireTLS:'true',
        auth:{
            user:'',
            pass:''
        }   
    })

    transpoter.sendMail({
        from:'',
        to:'',
        subject:'appointment rejection mail',
        text:'your appointment is rejected'
    }).then(()=>{console.log('mail send')})
    
})







app.listen(port,()=>console.log(`server is running on ${port}`))
