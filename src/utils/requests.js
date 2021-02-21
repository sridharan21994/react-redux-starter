import { API_URL } from '../constants'

const readJSONBody = (res) => {
  if (!res.headers.get('content-type')) return null
  return res.headers.get('content-type').startsWith('application/json') ? res.json() : null
}

const authToken = () => {
  // const { authReducer } = store.getState()
  return localStorage.getItem('Authorization')
}

function request(method, endpoint, payload = null) {
  const _authToken = authToken()
  const opts = {
    headers: {
      Authorization: _authToken,
    },
    method,
  }

  if (payload) {
    // multipart data
    if (payload instanceof FormData) {
      opts.body = payload
    } else {
      opts.headers['Content-Type'] = 'application/json'
      opts.body = JSON.stringify(payload)
    }
  }

  // return fetch(`http://localhost:5000/${endpoint}`, opts)
  const URL = /^(http|https):\/\//i.test(endpoint) ? endpoint : `${API_URL}/${endpoint}`
  return fetch(URL, opts)
    .then(async (res) => {
      const trace = res.headers.get('Trace-Id')
      const body = await readJSONBody(res)

      // follow happy path if 200 OK
      if (res.ok) return body

      if (res.status === 401) {
        localStorage.removeItem('Authorization')
        localStorage.removeItem('uid')
        window.location.href = "/"
      }

      if (res.status >= 400) {
        console.error(`Sorry about that 😕. Copy-paste to #it-qna Trace-ID: ${trace}`)
        return body
      }

      // if no error message then return null
      return null
    })
    .catch((err) => {
      throw new Error(err.message)
    })
}

export function get(endpoint) {
  return request('GET', endpoint)
}

export function patch(endpoint, payload) {
  return request('PATCH', endpoint, payload)
}

export function post(endpoint, payload) {
  return request('POST', endpoint, payload)
}

export function put(endpoint, payload) {
  return request('PUT', endpoint, payload)
}

export function del(endpoint) {
  return request('DELETE', endpoint)
}
