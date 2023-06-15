import React from 'react';
import {Route, Switch} from "react-router-dom";
import UserList from "./UserList";
import UserEdit from "./UserEdit";

const UserListMenu = ({match}) => {
    return (
        <Switch>
			<Route exact path={match.url}>
				<UserList match={match}/>
			</Route>
			<Route exact path={`${match.url}/:id`}>
				<UserEdit match={match}/>
			</Route>
        </Switch>
    );
};

export default UserListMenu;