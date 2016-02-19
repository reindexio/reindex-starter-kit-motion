import Relay from 'react-relay'
import Reindex from 'reindex-js';

const reindex = new Reindex('http://localhost:5000')
Relay.injectNetworkLayer(reindex.getRelayNetworkLayer())

view Main {
  let loggedIn = reindex.isLoggedIn()
  const checkToken = () => {
    loggedIn = reindex.isLoggedIn()
  }

  const handleLogin = (type) => {
    reindex.login(type).catch(({ message }) => alert(message))
  }

  reindex.addListener('tokenChange', checkToken)

  on.unmount(() => {
    reindex.removeListener('tokenChange', checkToken)
  })

  <h1>Welcome to Reindex and Motion!</h1>
  <container>
    <App if={loggedIn} onLogout={() => reindex.logout()} />
    <Login if={!loggedIn} onLogin={handleLogin} />
  </container>

  $ = {
    width: '50%',
    textAlign: 'center',
    margin: '0 auto',
  }
}
