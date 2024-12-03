import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import BottomNavigation from "../components/BottomNavigation";

const Home = () => {
  return (
    <div className="px-5 lg:px-0">
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-4xl font-bold">Welcome to RegexCraft 🛠️</h1>
        <p className="mb-6 text-lg text-gray-700">
          RegexCraft is a powerful utility class for building and managing
          regular expressions with a fluent, chainable API.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Features</h2>
        <ul className="mb-6 list-inside list-disc">
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

        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <p className="mb-4">
          To install RegexCraft, you can use npm or yarn. Run one of the
          following commands in your project directory:
        </p>
        <CodeBlock code={`npm install regexcraft`} language="bash" />
        <p className="py-2">or if you use yarn:</p>
        <CodeBlock code={`yarn add regexcraft`} language="bash" />

        <h2 className="mb-4 py-4 text-2xl font-semibold">Getting Started</h2>
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

        <h2 className="mb-4 py-4 text-2xl font-semibold">
          Building Your Regex
        </h2>
        <p className="mb-4">
          You can use the .build() method to generate your custom regex. Here's
          a quick example:
        </p>

        <CodeBlock
          code={`
import RegexCraft from 'regexcraft';

const customRegex = new RegexCraft()
  .hasMinLength(8)
  .hasUpperCase(1)
  .hasNumber(1)
  .build();

console.log(customRegex); 
// /^(?=^.{8,}$)(?=(?=(?:.*[A-Z]){1}))(?=(?=(?:.*\\d){1})).+$/
`}
          language="typescript"
        />
        <h2 className="mb-4 py-2 text-2xl font-semibold">Learn More</h2>
        <p>
          Explore the{" "}
          <Link to="/examples" className="text-blue-500 underline">
            Examples
          </Link>{" "}
          page to see RegexCraft in action!
        </p>
      </div>
      <BottomNavigation frontLink="examples" />
    </div>
  );
};

export default Home;
