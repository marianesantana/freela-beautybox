import { Switch, Route} from  'react-router-dom';
import React from 'react';
import UserList from './pages/UserList.js';
import Dashboard from './pages/Dashboard.js';
import EditUser from './pages/EditUser.js';
import CreateUser from './pages/CreateUser.js';



function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/list" exact component={UserList}/>
            <Route path="/edit" exact component={EditUser}/>
            <Route path="/new" exact component={CreateUser}/>


        </Switch>
    )
}
export default Routes