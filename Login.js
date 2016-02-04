view Login {
  prop onLogin = () => {}

  <button onClick={() => onLogin('google')}>Login with Google</button>
  <button onClick={() => onLogin('facebook')}>Login with Facebook</button>
  <button onClick={() => onLogin('github')}>Login with Github</button>
  <button onClick={() => onLogin('twitter')}>Login with Twitter</button>

  $ = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };

  $button = {
    flex: '0 0 auto',
  }
}
