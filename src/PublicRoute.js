import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from './utils/auth';

function PublicRoute ({component: Component, authToken, exact , ...rest}) {
  
  return (
    <Route
      {...rest}
      exact
      render={(props) => isLoggedIn(authToken)
        ? <Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />
        : <Component {...props} {...rest} />
        }
    />
  )
}

export default PublicRoute
