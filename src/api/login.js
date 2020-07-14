import PathList from './pathList'
import rest from 'axios';
import pathList from './pathList';

export default class LoginService {
  static transParams = (data) => {
    let params = new URLSearchParams();
    for (let item in data) {
      params.append(item, data['' + item + '']);
    }
    return params;
  }
    
  static login = async (vm, params) => {
  
    const response = await rest.post(pathList.resources.auth.login , params, {
      headers: {'Content-Type': 'application/json'}
    })
    return response;
  }

  static getUserInfo = async (vm) => {
    const response = await vm.$axios.get(PathList.resources.user.getUserInfo)
    return response
  }

  static verificationLogin = async (vm, params) => {
    const url = PathList.resources.user.verificationCodeLogin
    let param = '?phone=' + params.phone + '&verificationCode=' + params.messageCode
    if(params.utmSource) {
      param += '&utmSource=' + params.utmSource
    }
    const response = await vm.$axios.post(url + param, {})
    return response
  }

  static verificationRegister = async (vm, params) => {
    const url = PathList.resources.user.verificationCodeRegister
    const response = await vm.$axios.post(url, params)
    return response
  }

  static getVerificationCode = async (vm, params, type) => {
    const param = '?phone=' + params.phone + 
                  '&verificationCodeType=' + type +
                  '&sessionId=' + params.sessionId +
                  '&sig=' + params.sig +
                  '&token=' + params.token +
                  '&scene=' + params.scene +
                  '&appKey=' + params.appKey
    const response = await vm.$axios.get(PathList.resources.user.getVerificationCode + param)
    return response
  }

  static getVerificationCodeNoValidation = async (vm, phone, type) => {
    const params = {
      phone,
      verificationCodeType: type
    }
    const response = await vm.$axios.post(PathList.resources.user.getVerificationCodeNoValidation, params)
    return response
  }

  static getAuthenticateInfo = async (vm, type) => {
    return vm.$axios.get(PathList.resources.user.getAuthenticateInfo + '?authenticateScene=' + type)
  }

  static qingtuiLogin = async (vm, qtCode) => {
    const url = PathList.resources.user.qingtuiLogin
    const response = await vm.$axios.post(url + '?qtCode=' + qtCode, {})
    return response
  }

  static bindQingtui = async (vm, params) => {
    const url = PathList.resources.user.bindQingtui
    let param = '?phone=' + params.phone + '&messageCode=' + params.messageCode + '&bindToken=' + params.qingtuiBindingToken
    const response = await vm.$axios.post(url + param, {} )
    return response
  }

  static getState = async (params) => {
    let url = PathList.resources.sso.getState
    let param = '?thirdPartyType=' + params.thirdPartyType
    const response = await rest.get(url + param)
    return response
  }

  static wxAuth = async (params) => {
    let url = PathList.resources.sso.wxAuth
    let param = '?code=' + params.code + '&state=' + params.state + '&thirdPartyType=' + params.thirdPartyType
    const response = await rest.get(url + param)
    return response
  }

  static getUserInfoInWx = async () => {
    const response = await rest.get(PathList.resources.user.getUserInfo)
    return response
  }

  static logout = async (vm) => {
    let url = PathList.resources.user.logout
    const response = await vm.$axios.post(url)
    return response
  }

  static bindAccount = async (vm, params) => {
    let data = {
      accountBindingToken: params.accountBindingToken,
      phone: params.phone,
      utmSource: params.utmSource,
      verificationCode: params.messageCode
    }
    let url = PathList.resources.user.bindAccount
    const response = await vm.$axios.post(url, data)
    return response
  }

  static getCurrentUser = async () => {
    const response = await rest.get(PathList.resources.user.getUserInfo)
    return response
  }
}