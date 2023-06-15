import React, {Suspense, lazy} from 'react'
import Loading from "../../../components/shared-components/Loading";
import {Redirect, Route, Switch} from "react-router-dom";

const Home = ({match}) => {
	return (
		<Suspense fallback={<Loading cover='content'/>}>
			<Switch>
				<Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
				<Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
				<Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
			</Switch>
		</Suspense>
	)
}

export default Home
