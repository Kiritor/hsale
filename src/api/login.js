import axios from 'axios';
import pathList from './pathList';
import store from '../store'

const http = axios.create({
  timeout: 15000
});

// request拦截器
http.interceptors.request.use(function(config){
    config.data = config.data?config.data: {}
    // 把token添加到请求头,每次请求都带上
    config.headers = {
      'Content-type': 'application/json',
      'authorization': store.state.token==null?"":store.state.token
    }
    console.log(config.headers)
    return config;
})
export default class LoginService {
 
  static login = async (vm, params) => {
  
    const response = await http.post(pathList.resources.auth.login , params)
    return response;
  }
}