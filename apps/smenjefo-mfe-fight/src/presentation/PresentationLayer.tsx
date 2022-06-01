import App from './components/App';
import ApplicationProvider from './components/Application/ApplicationProvider';
import ApplicationLayer from '../application/ApplicationLayer';
import LocalizationProvider from './components/Localization/LocalizationProvider';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default class PresentationLayer {
  constructor(
    private readonly applicationLayer: ApplicationLayer,
  ) {}

  public render = () => {
    return (
      <ErrorBoundary>
        <LocalizationProvider>
          <ApplicationProvider applicationLayer={this.applicationLayer}>
            <App />
          </ApplicationProvider>
        </LocalizationProvider>
      </ErrorBoundary>
    );
  };
}