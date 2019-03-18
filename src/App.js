import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Auth0WebClient } from '@8base/auth';
import { EightBaseAppProvider } from '@8base/app-provider';
import { EightBaseBoostProvider, AsyncContent, createTheme } from '@8base/boost';
import { ToastContainer, toast } from 'react-toastify';
import ProtectedRoute from './shared/components/ProtectedRoute';
import { TOAST_SUCCESS_MESSAGE } from './shared/constants';
import { MainPlate, ContentPlate } from './components';
import { Auth } from './routes/auth';
import Dashboard from './modules/dashboard/Dashboard';
import HomeView from './modules/home/HomeView';
import Menu from './components/Menu';

const { REACT_APP_8BASE_API_ENDPOINT } = process.env;

const AUTH_CLIENT_ID = 'qGHZVu5CxY5klivm28OPLjopvsYp0baD';
const AUTH_DOMAIN = 'auth.8base.com';

const auth0WebClient = new Auth0WebClient({
  domain: AUTH_DOMAIN,
  clientID: AUTH_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  // If I change this URL to '/' when the session expires everything just fucks up
  logoutRedirectUri: `${window.location.origin}/auth`,
});
const collabTheme = createTheme({
  /** Change the pallete of the color. */
  COLORS: {
    PRIMARY: '#e76c29',
  },
  /** Change the custom components styles if it needed. */
  components: {
    input: {
      root: {
        borderColor: 'gray',
      },
      modifiers: {
        hasError: {
          borderColor: 'red',
        },
      },
    },
  },
});

class App extends React.PureComponent {
  renderContent = ({ loading, ...rest }) => {
    return (
      <AsyncContent loading={loading} stretch>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/home" component={HomeView}/>
          <Route>
            <MainPlate>
              <Menu/>
              <ContentPlate>
                <Switch>
                  <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
                </Switch>
              </ContentPlate>
            </MainPlate>
          </Route>
        </Switch>
      </AsyncContent>
    );
  };

  onRequestSuccess = ({ operation }) => {
    const message = operation.getContext()[TOAST_SUCCESS_MESSAGE];

    if (message) {
      toast.success(message);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <EightBaseBoostProvider theme={collabTheme}>
          <EightBaseAppProvider
            uri={REACT_APP_8BASE_API_ENDPOINT}
            authClient={auth0WebClient}
            onRequestSuccess={this.onRequestSuccess}>
            {this.renderContent}
          </EightBaseAppProvider>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
        </EightBaseBoostProvider>
      </BrowserRouter>
    );
  }
}

export { App };
