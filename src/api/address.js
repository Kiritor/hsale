import axios from 'axios';
import pathList from './pathList';
import store from '../store'
//import cookie from 'vue-cookie'

const http = axios.create({
  timeout: 15000
});

// request拦截器
http.interceptors.request.use(function(config){
    config.data = config.data?config.data: {}
    // 把token添加到请求头,每次请求都带上
    config.headers = {
      'authorization': store.state.token==null?"":store.state.token
    }
    //'Content-type': 'application/json',
    console.log(config.headers)
    return config;
})
export default class LoginService {
 
  /**
   * 根据用户id得到收货地址
   * @param {this} vm 
   * @param {userId} id 
   */
  static getReceiverAddressList = async (vm,id) => {
    const response = await http.get(pathList.resources.receiverAddresses.getReceiverAddressList.replace('{userId}',id));
    return response;
  }


  static addReceiverAddress = async (vm,obj) => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            authorization: store.state.token==null?"":store.state.token
        }
    }; 
    const response = await axios.put(pathList.resources.receiverAddresses.addReceiverAddress,obj,config);
    return response;
  }


  static setDefaultAddress = async (vm,obj) => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            authorization: store.state.token==null?"":store.state.token
        }
    }; 
    const response = await axios.post(pathList.resources.receiverAddresses.setDefaultAddress,obj,config);
    return response;
  }

  static updateReceiverAddress = async (vm,obj) => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            authorization: store.state.token==null?"":store.state.token
        }
    }; 
    const response = await axios.post(pathList.resources.receiverAddresses.updateReceiverAddress,obj,config);
    return response;
  }

  static deleteAddress = async (vm,id) => {
    const config = {
      headers: {
          'Content-type': 'application/json',
          authorization: store.state.token==null?"":store.state.token
      }
  }; 
  const response = await axios.delete(pathList.resources.receiverAddresses.deleteReceiverAddressList.replace('{id}',id),config);
  return response;
  }


  static getReceiverAddress = async (vm,id) => {
    const config = {
      headers: {
          'Content-type': 'application/json',
          authorization: store.state.token==null?"":store.state.token
      }
  }; 
  const response = await axios.get(pathList.resources.receiverAddresses.getReceiverAddress.replace('{id}',id),config);
  return response;
  }


  


}