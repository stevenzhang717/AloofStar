import jwtDecode from 'jwt-decode';

function createSession(token) {
  const session = jwtDecode(token);
  const exp = new Date(session.exp * 1000);

  return {
    id: session.id,
    user: session.name,
    isAuthenticated: () => exp > new Date(),
    error: ''
  };
}

export default createSession;
