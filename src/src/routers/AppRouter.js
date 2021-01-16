import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';
import { NavBar } from '../shared/NavBar';

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path='/' component={ TodoList } />
          <Route exact path='/add-todo' component={ AddTodo } />
        </Switch>
      </div>
    </Router>
  );
}
