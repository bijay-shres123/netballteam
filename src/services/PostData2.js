
import axios from 'axios';
//import axios from '../Components/BaseURL';
import * as axiosURLS from '../Components/axiosURL'; 

export function PostData2(userData) {

  const options = {

    headers:{
      'Content-Type': 'application/json',
    }
  }

  const Data = JSON.stringify(userData);
  
  return new Promise((resolve) => {
   
    axios.post(`http://localhost:8000/api/profile/`,Data, options )
    .then((responseJSON)=>{
      resolve(responseJSON)
    })
    .catch((error) => {
        if(error.response){
         
          resolve(error.response)
        }
        else if(error.request){
          console.log("2nd")
        }
        else{

          console.log('Err',error.message)
        }
      }
    )
     
  });
}
