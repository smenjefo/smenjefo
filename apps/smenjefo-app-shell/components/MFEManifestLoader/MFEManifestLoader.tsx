import { useEffect } from "react";
import { useDispatch } from "react-redux";

import MFEManifestLoaderFactory from "./MFEManifestLoaderFactory";
import { setManifests } from "../../slices/mfeManifestSlice";

interface IMFEManifestLoaderProps {}

const MFEManifestLoader = (props: IMFEManifestLoaderProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const manifestLoaderFactory = new MFEManifestLoaderFactory();
    const manifestLoader = manifestLoaderFactory.create();

    manifestLoader.load().then((manifests) => {
      // load data to store
      dispatch(setManifests(manifests));
    });
  }, [dispatch]);

  return null;
};

export default MFEManifestLoader;