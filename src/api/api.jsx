import axios from "axios";


const loginUser = (username, password) => {
    return axios.post('https://project-intern-bcc-production.up.railway.app/api/v1/user/login', {
      email: email,
      password: password
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
  }

export default loginUser;