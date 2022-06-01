
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const myErrorHandler = (error, info) => {
  // TODO: logging system
  console.warn('@@ MFE-FIGHT-REGISTRATION', error, info);
};

interface IErrorBoundaryProps {
  children: JSX.Element;
}

const ErrorBoundary = (props: IErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={myErrorHandler}
    >
      {props.children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;