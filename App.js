import Relay from 'react-relay';

class ProfileRoute extends Relay.Route {}

ProfileRoute.routeName = 'ProfileRoute';
ProfileRoute.queries = {
  viewer: () => Relay.QL`
    query {
      viewer
    }
  `,
};

view App {
  prop onLogout

  <Relay.RootContainer
    {...{route: new ProfileRoute()}}
    Component={Motion.getView('Profile')}
    forceFetch={true}
    renderFetched={data => <Profile {...data} onLogout={onLogout} />}
   />
}
