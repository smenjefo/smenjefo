import { IMicroFrontend } from '@smenjefo/smenjefo-mfe';

import PresentationLayer from "./presentation/PresentationLayer";
import ApplicationLayer from "./application/ApplicationLayer";
import DomainLayer from "./domain/DomainLayer";
import DataLayer from "./data/DataLayer";

export default function FightMFE(props: IMicroFrontend) {
  const dataLayer = new DataLayer();

  const domainLayer = new DomainLayer();

  const applicationLayer = new ApplicationLayer(
    domainLayer,
    dataLayer,
    props.websocket,
    props.messageBus.createSubscriber('fight-mfe'),
    { fightId: props.additionalProps['fightId'] },
  );

  const presentationLayer = new PresentationLayer(
    applicationLayer,
  );

  return presentationLayer.render();
}
