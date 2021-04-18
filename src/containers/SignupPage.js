import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveAuth } from '../actions/auth';
import SignupForm from '../components/SignupForm/SignupForm';


const SignupPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = async () => {
            try {
                localStorage.setItem('Authorization', 'token123');
                dispatch(saveAuth('token123'))
                history.push('/dashboard')
            } catch (err) {
                console.log(err);
            }
    }
    
    return (
        <div>
            <SignupForm onSubmit={onSubmit} />
        </div>
    )
}

export default SignupPage
