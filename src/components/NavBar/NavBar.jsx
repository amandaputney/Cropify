import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Hi {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/search/new">New Search</Link>
      &nbsp; | &nbsp;
      <Link to="/plan">Rotation Plans</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}