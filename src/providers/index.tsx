import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import store, { persistor } from '../store/configureStore';
import GlobalStyles from '../styles/GlobalStyles';

const queryClient = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => (
  <>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </PersistGate>
    </Provider>
  </>
);

export default AppProvider;
