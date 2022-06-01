import React from 'react';
import { useTranslation } from "react-i18next";
import i18n from '@smenjefo/smenjefo-localization';

import LocalizationContext from './LocalizationContext';

interface ILocalizationProviderProps {
  children: JSX.Element | JSX.Element[];
}

// initialize
i18n.createInstance();

const LocalizationProvider = (props: ILocalizationProviderProps) => {
  const { t } = useTranslation();

  return (
    <LocalizationContext.Provider value={{
      t,
    }}>
      {props.children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;