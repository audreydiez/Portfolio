import { Route } from 'react-router-dom'

export function SubRoutes(route) {
    return (
        <Route
            exact={route.exact}
            path={route.path}
            render={(props) => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}
