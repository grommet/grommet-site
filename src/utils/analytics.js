import ReactGA from 'react-ga';

const config = {
  trackerId: 'UA-99690204-1',
  debug: false,
};

export default (history) => {
  const { trackerId, ...configObject } = config;
  ReactGA.initialize(trackerId, {
    ...configObject,
  });

  history.listen((location) => {
    if (typeof window !== 'undefined') {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    }
  });
};
