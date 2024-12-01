// src/pages/Examples/Examples.tsx

import CodeBlock from "../components/CodeBlock";

const examples = [
  {
    title: "Password Validation",
    description: "Validate password strength with different presets.",
    code: `
import RegexCraft from 'regexcraft';

const validator = new RegexCraft()
  .usePreset('password', 'high')
  .testOne('MyStr0ng@Pass');
    `,
  },
  {
    title: "Username Validation",
    description: "Ensure usernames meet specific criteria.",
    code: `
const usernameValidator = new RegexCraft()
  .usePreset('username', 'standard')
  .testOne('user_name123');
    `,
  },
  {
    title: "Email Validation",
    description: "Check if an email address is valid.",
    code: `
const emailValidator = new RegexCraft()
  .isEmail()
  .testOne('user@example.com');
    `,
  },
  {
    title: "Phone Number Validation",
    description: "Validate phone numbers for different countries.",
    code: `
const phoneValidator = new RegexCraft()
  .isPhone('US')
  .testOne('+1234567890');
    `,
  },
];

const Examples = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Usage Examples</h1>
      <div className="space-y-12">
        {examples.map((example, index) => (
          <div key={index} className="border rounded-lg p-6 bg-white shadow-md">
            <h2 className="text-xl font-semibold mb-2">{example.title}</h2>
            <p className="text-gray-600 mb-4">{example.description}</p>
            <CodeBlock code={example.code} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples;
