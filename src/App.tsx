import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store'

import './App.scss'
import { Spin } from 'antd';
import PublicRoute from './PublicRoute';

const PrivateRoute = React.lazy(() => import('./PrivateRoute'))
const LoginPage = React.lazy(() => import('./containers/LoginPage'))
const SignupPage = React.lazy(() => import('./containers/SignupPage'))
const DashboardPage = React.lazy(() => import('./containers/DashboardPage'))

const history = createBrowserHistory()

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Spin size="large" />}>
          <Switch>
            <PublicRoute
              exact
              path="/"
              component={(props:any) => <LoginPage {...props} />}
            />
            <PublicRoute
              exact
              path="/sign-up"
              component={(props:any) => <SignupPage {...props} />}
            />
            <PrivateRoute
              exact
              path="/dashboard"
              component={(props:any) => <DashboardPage {...props} />}
            />
            <Route component={(props:any) => <LoginPage {...props} />}/>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
