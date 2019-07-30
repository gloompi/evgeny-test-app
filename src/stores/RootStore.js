import React, { createContext } from 'react';
import EventsStore from './EventsStore';

class RootStore {
  events = new EventsStore();
};

const rootStore = new RootStore();

const StoreContext = createContext({
  rootStore,
});

export const StoreProvider = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const rootStore = React.useContext(StoreContext);

  if (!rootStore) {
    throw new Error('You must render StoreProvider higher up in the tree');
  }

  return rootStore;
}
