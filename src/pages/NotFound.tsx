import HelmetWrapper from "../components/HelmetWrapper";

const NotFound = () => {
  return (
    <>
      <HelmetWrapper title="Not Found" />
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-6xl text-red-600">404 - Page Not Found</h1>
        <p className="mt-4 text-2xl">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/" className="mt-6 text-xl text-blue-500 hover:underline">
          Go to Home
        </a>
      </div>
    </>
  );
};

export default NotFound;
