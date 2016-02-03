import Relay from 'react-relay';

Flint.decorateView('Profile', (Profile) =>
  Relay.createContainer(Profile, {
    fragments: {
      viewer: () => Relay.QL`
        fragment on ReindexViewer {
          user {
            id,
            credentials {
              google {
                displayName
              },
              twitter {
                displayName
              },
              github {
                displayName
              },
              facebook {
                displayName
              }
            }
          }
        }
      `,
    },
  }),
);

view Profile {
  const handleLogout = () => {
    if (view.props.onLogout) {
      view.props.onLogout();
    }
  }

  const getActiveCredential = () => {
    const credentials = view.props.viewer.user.credentials;
    for (const provider of ['google', 'facebook', 'twitter', 'github']) {
      if (credentials[provider]) {
        return {
          type: provider,
          displayName: credentials[provider].displayName
        };
      }
    }
  }

  const credentials = getActiveCredential();

  <div>
    <h1>Welcome to Reindex!</h1>
    <div>
      You are user {credentials.displayName}
    </div>
    <div>
      Your Reindex ID is {view.props.viewer.user.id}
    </div>
    <div>You are logged in with {credentials.type}</div>
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  </div>
}
