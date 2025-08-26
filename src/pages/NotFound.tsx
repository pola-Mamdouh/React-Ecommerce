import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-white bg-foreground">
      <div className="flex flex-col gap-4 justify-center ">
        <h1 className="text-4xl">
          {errorStatus} Error <br /> {errorStatusText}
        </h1>

        <Link
          to="/"
          replace={true}
          className="text-blue-500 underline text-center"
        >
          How about going back to safety?
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
