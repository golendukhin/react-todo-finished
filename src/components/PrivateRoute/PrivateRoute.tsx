import React, { ComponentType } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Loading from '../Loading/Loading'

interface IPrivateRoute {
  component: ComponentType<any>
  [k: string]: any
}

// how to test private routes ?
const PrivateRoute = ({ component: Component, ...rest }: IPrivateRoute) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuthenticated ? (
          <Component {...props} />
        ) : rest.isAuthenticating ? (
          <Loading>Loading ...</Loading>
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute as any
