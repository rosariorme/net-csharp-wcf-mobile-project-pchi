import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserList from './Pages/UserList'
import Home from './Pages/Home'
import Base from './Pages/Base'

function App() {
  return (
    <Router>
		<Switch>
		<Route exact path="/users" component = { UserList }/>
		<Route exact path="/home" component={ Home } />
		<Route component={Base} />
		</Switch>
    </Router>
  );
}

export default App;
