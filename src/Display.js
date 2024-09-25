import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Display(){
const[data,setData] = React.useState([]);


React.useEffect(()=>{
    getData();
    },[])
    var getData=()=>{
        axios.get("https://akashsir.in/myapi/crud/student-display-api.php")
        .then(res =>{
            console.log(res.data);
            setData(res.data.student_list);
        }).catch((error)=>{
            alert("Error Occurred:"+error);
        })
    }
    var deleteData=(id)=>{
        var myform = new FormData();
        myform.append('st_id',id);
        axios.post("https://akashsir.in/myapi/crud/student-delete-api.php", myform)
        .then((res) => {
            console.log(res.data);
        })
        getData();
   }
    return(
        <>
       <h2>Display</h2>
           <table border={3}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Edit & delete</th>
            </tr>
            {data.map((v, i ) =>
            {
                return<tr key={i + 1}>
                    <td key={v.st_id}>{i + 1}</td>
                    <td>{v.st_name}</td>
                    <td>{v.st_gender}</td>
                    <td>{v.st_email}</td>
                    <td>{v.st_mobileno}</td>
                    <td>
                        <Link to={'/Edit/'  + v.st_id} style={{color:"blue"}}>Edit</Link>  |
                        <input type='button' value="delete" onClick={()=>deleteData(v.st_id)} style={{color:"white",backgroundColor:"red"}}/>
                    </td>
                </tr>
                
            }
        )}

           </table>
        </>
    );


}
export default Display;