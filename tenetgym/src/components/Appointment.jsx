import './Appoin.css'
import React, { useState } from 'react'
import ms from 'ms';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useNavigate } from 'react-router-dom';


function Appointment() {

    let navigate=useNavigate();
    
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('6:00');
    let flag = true;

   

    function handelsubmit() {

        const validateEmail = (email) => {
            const re = /^([a-zA-Z0-9_.+-])+@+(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return re.test(String(email).toLowerCase());
        };

        if (!fname) {
            document.getElementById("fnameid").innerHTML = "FullName required*";
            flag = false;
        }
        else if (fname.length > 8) {
            document.getElementById("fnameid").innerHTML = "Name should have 0 to 8 charecters *";
            flag = false;
        }
        else if (fname.charAt(0) !== fname.charAt(0).toUpperCase()) {
            document.getElementById("fnameid").innerHTML = "first latter of your Name should be in capital letter*"
            flag = false;
        }
        else {
            document.getElementById("fnameid").innerHTML = "";

        }

        if (!email) {
            document.getElementById("emailid").innerHTML = "Email required*";
            flag = false;
        }
        else if (!validateEmail(email)) {
            document.getElementById("emailid").innerHTML = "Email invalid*";
            flag = false;
        }
        else {
            document.getElementById("emailid").innerHTML = "";
        }

        if (!phone) {
            document.getElementById("phoneid").innerHTML = "Phone number required*";
            flag = false;
        }
        else if (phone.length < 10 || phone.length > 10) {
            document.getElementById("phoneid").innerHTML = "Phone number should have 10 characters*";
            flag = false;
        }
        else {
            document.getElementById("phoneid").innerHTML = "";
        }

        if(!gender){
            alert("fill the gender filed");
        }
        if(!value){
            alert("take a time for meet")
        }


        if (!flag) {
            return false; 
        }  


        let headersList = {
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
               Name:fname,
               Email:email,
               Phone:phone,
               Gender:gender,
               Date:startDate,
               Time:value
           });
           
           fetch("http://localhost:7000/add-appoin", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           })

    localStorage.removeItem("issignin");    
    navigate("/")
    alert("you will get the confirmation email of your appointment....")
    }

        const minsec=ms('20d')    
        const max_date=new Date(+new Date(+new Date()+minsec));

        
        
       
        
    
    return (
        <>
            <div className="div-con1">
                <div className="appoin">
                    <h1>Appointment Form</h1>
                    

                    <input type="text" name="fname" value={fname} placeholder='Name...' className='fname' onChange={(e) => { setFname(e.target.value) }} required/>
                    <br /><small style={{ fontSize: "14px", color: "red" }} id="fnameid"></small><br />

                    <input type="email" name="email" value={email} placeholder='Email...' className='email' onChange={(e) => { setEmail(e.target.value) }} required/>
                    <br /><small style={{ fontSize: "14px", color: "red" }} id="emailid"></small><br />

                    <input type="phone" name="phone" value={phone} placeholder='Phone no....' className='phone' onChange={(e) => { setPhone(e.target.value) }} required/>
                    <br /><small style={{ fontSize: "14px", color: "red" }} id="phoneid"></small><br /><div className="ph1"></div>

                    <label id='ge'>Gender:<input type="radio" id='male' name={gender} value='male' onChange={(e) => { setGender(e.target.value) }} required/>Male
                                          <input type="radio" id='female' name={gender} value='female' onChange={(e) => { setGender(e.target.value) }} required/>Female</label>
                    <div className="ph"></div>

                    <label id="datepi"><br/>
                    <span id='d'>Date:</span> <DatePicker selected={startDate} 
                    onChange={(date) => setStartDate(date)}  dateFormat='dd/MM/yyyy' 
                    id='datetime' minDate={new Date()} maxDate={max_date} 
                    filterDate={date=> date.getDay()!== 6 && date.getDay()!== 0}
                    required/>
                    </label>

                    <label className="timepi" ><br />
                    Time  :<TimePicker className='ti' onChange={onChange} value={value} disableClock={true} format='hh:mm AM' minTime={'06:00'} maxTime={'12:00'}  />
                    </label>

                    {/* <label id="datepi"><br />
                       <span id='d'>Date:</span><DatePicker type="date" selected={date} onChange={(e)=>setDate(e.target.value)} dateFormat='dd/MM/yyyy' id='datetime' minDate={new Date()} maxDate={max_date} required/>
                    </label>
                    <div className="ph1"></div>

                    <label id="timepi"><br />
                        Time :<input id='ti' type='time' selected={time} onChange={(e)=>setTime(e.target.value)}/>
                    </label> */}


                    <button className="btn1" type="submit" onClick={handelsubmit}><b>Submit</b></button>
                </div>
            </div>
        </>
    )
}

export default Appointment
