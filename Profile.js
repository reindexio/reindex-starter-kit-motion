import Relay from 'react-relay'

Motion.decorateView('Profile', (Profile) =>
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
  prop onLogout = () => {}
  prop viewer

  const getActive = () => {
    const credentials = viewer.user.credentials
    const providers = ['google', 'facebook','twitter', 'github']
    const active = providers
      .filter(x => credentials[x])
      .map(x => ({ type: x, displayName: credentials[x].displayName }))

    return active.length > 0 ? active[0] : null
  }

  <h1>Welcome to Reindex!</h1>
  <User if={viewer} id={viewer.user.id} info={getActive()} />
  <button onClick={onLogout}>Logout</button>
}

view User {
  prop id
  prop info = {}

  <status>
    You are user {info.displayName}
  </status>
  <id>Your Reindex ID is {id}</id>
  <div>You are logged in with {info.type}</div>
}
