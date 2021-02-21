import React from 'react'
import GoogleLogin from 'react-google-login';
import { get } from 'lodash-es';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveAuth } from '../actions/auth';
import { loginUsingGoogleSSO } from '../utils/api';
import { GOOGLE_SSO_CLIENT_ID } from '../constants';


const LoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const responseGoogle = async (response) => {
        const token = get(response, 'tokenObj.id_token', '')
        if (token) {
            try {
                const data = await loginUsingGoogleSSO(token);
                localStorage.setItem('Authorization', get(data, 'data.auth_token', ''));
                dispatch(saveAuth(get(data, 'data.auth_token', '')))
                history.push('/dashboard')
            } catch (err) {
                console.log(err);
            }
        }
    }
    
    return (
        <div>
            <GoogleLogin
                clientId={GOOGLE_SSO_CLIENT_ID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default LoginPage
