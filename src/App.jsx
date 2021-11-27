import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './pages/Login';
import Home from './pages/Home';
import InterceptorService from './services/InterceptorService';

const history = createBrowserHistory();
InterceptorService.createAuthInterceptor(history);
InterceptorService.includeCredentials();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
