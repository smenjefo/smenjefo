import React from "react";

const urlCache = new Set();
const componentCache = new Map();

function loadComponent(scope, module) {
  return async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await __webpack_init_sharing__('default');
    const container = window[scope];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicScript = (url) => {
  const [ready, setReady] = React.useState(false);
  const [errorLoading, setErrorLoading] = React.useState(false);

  React.useEffect(() => {
    if (!url) return;

    if (urlCache.has(url)) {
      setReady(true);
      setErrorLoading(false);
      return;
    }

    setReady(false);
    setErrorLoading(false);

    const element = document.createElement('script');

    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = () => {
      urlCache.add(url);
      setReady(true);
    };

    element.onerror = () => {
      setReady(false);
      setErrorLoading(true);
    };

    document.head.appendChild(element);

    return () => {
      urlCache.delete(url);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    errorLoading,
    ready,
  };
};

const useMFELoader = (remoteUrl, scope, module) => {
  const key = `${remoteUrl}-${scope}-${module}`;
  const [Component, setComponent] = React.useState(null);

  const { ready, errorLoading } = useDynamicScript(remoteUrl);

  React.useEffect(() => {
    if (Component) {
      setComponent(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  React.useEffect(() => {
    if (ready && !Component) {
      const Comp = React.lazy(loadComponent(scope, module));
      componentCache.set(key, Comp);
      setComponent(Comp);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component, ready, key]);

  return { errorLoading, Component };
};

export default useMFELoader;
