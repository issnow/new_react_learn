import React from 'react';

const AppContext = React.createContext({});

export function withAppContext(Component) {
  return function AppContextInjectedComponent(props) {
    return (
      <AppContext.Consumer>
        {value => <Component {...props} appContext={value} />}
      </AppContext.Consumer>
    );
  };
}

export default AppContext;
