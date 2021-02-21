import { get, post, put, patch, del } from './requests'


export const generateOTP = ({ phone, countryCode }) => post('v2/auth/generate-otp', { phone, country_code: countryCode })

export const getSelf = () => get(`v2/users/me`)

export const updateCourse = (courseCode, data) => put(`v2/courses/${courseCode}/replace`, data)

export const deleteCourse = courseID => del(`v2/courses/${courseID}`)

export const updateSellerLead = (leadId, data) => patch(
    `v2/users/leads/seller`,
    {
      "seller_lead_id": leadId,
      "lead_form_responses": data
    }
)

export const loginUsingGoogleSSO = token => post('v2/aarohan/auth/login', { id_token: token });
