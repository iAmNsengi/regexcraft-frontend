const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl text-red-600">404 - Page Not Found</h1>
      <p className="text-2xl mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="text-xl text-blue-500 mt-6 hover:underline">
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
