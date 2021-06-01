import axios from "axios"

export function request_local(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: "http://127.0.0.1:5000/api/",
    timeout: 5000
  })
  return instance(config)
}
export function request_remote(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL: "http://api.apishop.net/common/driverLicense/",
    timeout: 5000
  })
  return instance(config)
}