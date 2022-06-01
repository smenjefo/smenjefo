import { useEffect, useContext } from "react";
import { selectStatus } from "../selectors/statusSelectors";

import dataContext from "./Application/ApplicationDataContext";
import FightCompletedPage from "./FightCompletedPage/FightCompletedPage";
import FightPage from "./FightPage/FightPage";

export default function App() {
  const data = useContext(dataContext);

  useEffect(() => {
    // TODO:
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  if (!data) {
    return null;
  }

  const status = selectStatus(data);

  if (status === 'completed') {
    return (
      <FightCompletedPage />
    );
  } else {
    return (
      <FightPage />
    );
  }
}

