import LocalEnvMFEManifestLoader from "./LocalEnvMFEManifestLoader";
import ServiceDiscoveryMFEManifestLoader from "./ServiceDiscoveryMFEManifestLoader";

export default class MFEManifestLoaderFactory {
  public create = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (_DEVELOPMENT_) {
      return new LocalEnvMFEManifestLoader();
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (_PRODUCTION_) {
      return new ServiceDiscoveryMFEManifestLoader();
    }

    throw new Error('Manifest has not loaded');
  };
}