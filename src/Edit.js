import React from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

function Edit(){
const[name,setName] = React.useState("");
const[gender,setGender] =React.useState("");
const[email,setEmail] =React.useState("");
const[mobile,setMobile] =React.useState("");
const navigate = useNavigate();

let {id} =useParams();
React.useEffect(() =>{
    editData('')
},[])

const editData =() =>{
    console.log(id);
    axios.get(`https://akashsir.in/myapi/crud/student-detail-api.php?st_id=${id}`)
               .then(res => {
                console.log(res.data);
                setName(res.data.st_name);
                setGender(res.data.st_gender);
                setEmail(res.data.st_email);
                setMobile(res.data.st_mobileno);
               }).catch((error) =>{
                console.log(error)
               })
               
}
const updateValue =(e) =>{
    var myform =new FormData();
    myform.append("st_id",id);
    myform.append("st_name",name);
    myform.append("st_gender",gender);
    myform.append("st_email",email);
    myform.append("st_mobileno",mobile);
    axios.post("https://akashsir.in/myapi/crud/student-update-api.php",myform)
    .then(res =>{
        console.log(res)
        navigate("/Display");
        if(res.data.flag =="1"){
            alert('Record Updated Successfully')
        }else{

            alert('Something went wrong');
        }
       
    })
    .catch(error =>{
        console.log(error);
    })
    e.target.reset();
               e.preventDefault();
}
    return(
        <>
        <h2>Edit</h2>
        <form onSubmit={updateValue}>
    
    Name:<input type="text" name="txt"value={name} onChange={e => setName(e.target.value)}/><br/>
    Gender:<input type="text" name="gender" value={gender} onChange={e => setGender(e.target.value)}/><br/>
    email:<input type="email" name="email"  value={email} onChange={e => setEmail(e.target.value)}/><br/>
    Mobile No :<input type="number" name="mon"  value={mobile} onChange={e => setMobile(e.target.value)}/><br/>
        <input type="submit" value="submit" style={{color:"white",backgroundColor:"green"}}/>

      
     
</form>
        
        </>
    )

}
export default Edit;