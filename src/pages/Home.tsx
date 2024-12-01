import CodeBlock from "../components/CodeBlock";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to RegexCraft 🛠️</h1>
      <p className="text-lg text-gray-700 mb-6">
        RegexCraft is a powerful utility class for building and managing regular
        expressions with a fluent, chainable API.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="list-disc list-inside mb-6">
        <li>🔗 Chainable API for building complex patterns</li>
        <li>📝 Built-in validation presets for common use cases</li>
        <li>🎯 Custom error messages for each validation rule</li>
        <li>📱 Phone number validation for multiple countries</li>
        <li>🔒 Password strength validation</li>
        <li>👤 Username format validation</li>
        <li>🌐 URL and email validation</li>
        <li>📅 Date validation</li>
        <li>🔍 Visualization of regex patterns and requirements</li>
        <li>🛠️ Easy integration with forms and validation libraries</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Installation</h2>
      <p className="mb-4">
        To install RegexCraft, you can use npm or yarn. Run one of the following
        commands in your project directory:
      </p>
      <CodeBlock code={`npm install regexcraft`} language="bash" />
      <p className="py-2">or if you use yarn:</p>
      <CodeBlock code={`yarn add regexcraft`} language="bash" />

      <h2 className="text-2xl font-semibold mb-4 py-4">Getting Started</h2>
      <p className="mb-4">
        After installation, you can start using RegexCraft in your project.
        Here’s a quick example:
      </p>
      <CodeBlock
        code={`
import RegexCraft from 'regexcraft';

const validator = new RegexCraft()
  .hasMinLength(8)
  .hasUpperCase(1)
  .hasNumber(1)
  .testOne('MyPassword1!');

console.log(validator); // { value: 'MyPassword1!', isValid: true, failedRequirements: [] }
`}
        language="typescript"
      />

      <h2 className="text-2xl font-semibold mb-4 py-2">Learn More</h2>
      <p>
        Explore the{" "}
        <a href="/examples" className="text-blue-500 underline">
          Examples
        </a>{" "}
        page to see RegexCraft in action!
      </p>
    </div>
  );
};

export default Home;
