const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">RegexCraft 🛠️</h1>
      <div className="prose prose-lg">
        <p className="text-lg text-gray-600">
          A powerful utility class for building and managing regular expressions
          with a fluent, chainable API.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Easy to Use</h2>
            <p className="text-gray-600">
              Build complex regex patterns with a simple, chainable API.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Powerful Features</h2>
            <p className="text-gray-600">
              Validation presets, phone numbers, passwords, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
