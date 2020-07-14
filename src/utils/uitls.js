
export default class FarmerUtils {
  static getParmValueFromUrl (url, paramName) {
    let params = url.split('&')
    for (let i = 0; i < params.length; i++) {
      let paramArray = params[i].split('=')
      if (paramArray[0] == paramName) {
          return paramArray[1]
      }
    }
  }
}