import React from 'react';

interface ILocalizationContext {
  t(locale: string, interpolation?: Record<string, any>): string;
}

const LocalizationContext = React.createContext<ILocalizationContext>(null);

export default LocalizationContext;