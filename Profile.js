import Relay from 'react-relay'

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

  let active = null
  on.change(() => {
    active = getActive()
  })

  <h1>Welcome to Reindex!</h1>
  <status if={active}>
    You are user {active.displayName}
  </status>
  <id>Your Reindex ID is {viewer.user.id}</id>
  <div>You are logged in with {active.type}</div>
  <button onClick={onLogout}>Logout</button>
}
