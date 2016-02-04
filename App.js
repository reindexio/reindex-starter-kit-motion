import Relay from 'react-relay';

class ProfileRoute extends Relay.Route {}

ProfileRoute.routeName = 'ProfileRoute';
ProfileRoute.queries = {
  viewer: (Component) => Relay.QL`
    query {
      viewer {
        ${Component.getFragment('viewer')}
      }
    }
  `,
};

view App {
  prop onLogout

  <Relay.RootContainer
    {...{route: new ProfileRoute()}}
    Component={Flint.getView('Profile')}
    forceFetch={true}
    renderFetched={data => <Profile {...data} onLogout={onLogout} />}
   />
}
