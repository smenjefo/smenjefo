import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "./MFEs/Header";
import RedirectionLogic from "./RedirectionLogic/RedirectionLogic";
import MFEManifestLoader from "./MFEManifestLoader/MFEManifestLoader";
import ControllersContext from "./ControllersProvider/ControllersContext";
import { selectProfile } from "../selectors/profileSelectors";

interface IAppProps {
  children: JSX.Element;
}

export default function App(props: IAppProps) {
  const { controllers } = useContext(ControllersContext);

  const profile = useSelector(selectProfile);

  // TODO: fake profile
  // remove this when authorization feature will be created
  useEffect(() => {
    if (controllers) {
      controllers.profileController.createProfile({
        id: profile.entityId,
        nickname: profile.nickname,
        avatarURL: profile.avatarURL,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controllers?.profileController]);

  return (
    <div>
      <MFEManifestLoader />

      <Header />
      <RedirectionLogic />

      {props.children}
    </div>
  );
}