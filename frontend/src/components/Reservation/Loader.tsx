import { Skeleton } from 'primereact/skeleton';

interface LoaderProps {
  isLoading: boolean;
  isError: boolean;
  error?: Error | null;
}

const Loader = ({ isLoading, isError, error }: LoaderProps) => {
  if (isLoading) {
    return (
      <div className="grid">
        <div className="col-12 md:col-4">
          <Skeleton width="100%" height="150px" />
        </div>
        <div className="col-12 md:col-4">
          <Skeleton width="100%" height="150px" />
        </div>
        <div className="col-12 md:col-4">
          <Skeleton width="100%" height="150px" />
        </div>
      </div>
    );
  }

  if (isError) {
    return <p>Error: {error?.message}</p>;
  }

  return null;
};

export default Loader;
