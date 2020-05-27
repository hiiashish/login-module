import axios from "axios";
import * as messages from '../constants';
import {deleteCookie} from '../utils/cookieHandler'
import { setCookie } from '../utils/cookieHandler';
// import * as types from '../actions';

 export const loginUserService = (request) => {
    const LOGIN_API_ENDPOINT = 'https://swapi.dev/api/people';
  
    // const parameters = {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // };
    return axios.get(LOGIN_API_ENDPOINT)
    .then(res => {
      return authenticateUser(res.data,request.user);
    }).catch(error=>{ }
      // {type: types.LOGIN_USER_ERROR,error}
      )
}

function authenticateUser(data,user){
  let loginResponse= {userName: user.username, loginSucess : false, failedMessage : messages.LOGIN_FAILED};

  let userFound = data.results.find(item=>(item.name.toLowerCase() ===user.username.toLowerCase() && item.birth_year.toLowerCase()=== user.password.toLowerCase()));
  if(userFound)
  {
    loginResponse.loginSucess=true;
    loginResponse.failedMessage = '';
    setCookie('token', user.username, 1);
  }
 return loginResponse;
}

export const logOutUser =(request) =>{
  return deleteCookie();
}
  
