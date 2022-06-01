import { getServiceDiscoveryRegistry } from "../../api/consulApi";

import IMFEManifestLoader from "./IMFEManifestLoader";

// TODO:
// implement manifests fetching from a remove service discovery server
export default class ServiceDiscoveryMFEManifestLoader implements IMFEManifestLoader {
  public load = () => {
    return getServiceDiscoveryRegistry()
      .then((manifestsFromServer) => {
        return manifestsFromServer;
      })
      .catch(() => {
        return null;
      });
  };
}