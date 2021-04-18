import { get, post, put, del } from './requests'


export const generateOTP = ({ phone, countryCode }) => post('generate-otp', { phone, country_code: countryCode })

export const getData = () => get(`users/me`)

export const updateUser = (userID, data) => put(`users/${userID}`, data)

export const deleteUser = userID => del(`users/${userID}`)
