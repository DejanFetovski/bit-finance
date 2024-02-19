import axios from 'axios'

import { SocialReqDataType } from 'types/apiData.type'

const baseUrl = '/users'

const getUserInfo = (address: string) => {
  const req = axios.get(`${baseUrl}/${address}`)
  return req.then((res) => res.data)
}

const getPoints = () => {
  const req = axios.get(`${baseUrl}/points`)
  return req.then((res) => res.data)
}

const createSocial = (reqData: SocialReqDataType) => {
  const req = axios.post(`${baseUrl}/social`, reqData)
  return req.then((res) => res.data)
}

export { getUserInfo, getPoints, createSocial }
