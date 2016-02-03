import Relay from 'react-relay';

import Reindex from 'reindex-js';

const reindex = new Reindex('http://localhost:5000');
Relay.injectNetworkLayer(reindex.getRelayNetworkLayer());

view Main {
  let isLoggedIn = reindex.isLoggedIn();

  const handleTokenChange = () => {
    isLoggedIn = reindex.isLoggedIn();
  };

  const handleLogin = (type) => {
    reindex.login(type).catch((error) => {
      alert(error.message);
    });
  };

  const handleLogout = () => {
    reindex.logout();
  };

  on.mount(() => {
    reindex.addListener('tokenChange', handleTokenChange);
  });

  on.unmount(() => {
    reindex.removeListener('tokenChange', handleTokenChange);
  });

  view.render(() => {
    let subview;
    if (isLoggedIn) {
      subview = <App onLogout={handleLogout} />
    } else {
      subview = <Login onLogin={handleLogin} />
    }

    return (
      <wrapper>
        <h1>Welcome to Reindex and Flint!</h1>
        <div>
          {subview}
        </div>
      </wrapper>
    );
  });

  $wrapper = {
    width: '50%',
    textAlign: 'center',
    margin: '0 auto',
  };
}
