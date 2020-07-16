import axios from 'axios';
import pathList from './pathList';
import store from '../store'
import cookie from 'vue-cookie'

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
  };

  static getUserInfo = async (vm,id) => {
    const response = await axios.get(pathList.resources.users.getUserInfo.replace('{userId}',id));
    return response;
  }
  
  static updateAvator = async(vm,id,image) => {
    // 创建form对象
    const param = new FormData();
    param.append("avator",image);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: cookie.get("token")
      }
    }; 
    const response = axios.post(pathList.resources.users.updateAvator.replace('{userId}',id), param, config);
    return response;
  }

  static updateGender = async (vm,params) => {
    const config = {
      headers: {
        authorization: cookie.get("token")
      }
    }; 
    const response = axios.post(pathList.resources.users.updateGender,params,config);
    return response;
  }
}