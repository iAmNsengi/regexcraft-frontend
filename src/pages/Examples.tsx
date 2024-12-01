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
    log: `{
  value: 'MyStr0ng@Pass',
  isValid: true,
  failedRequirements: []
}`,
  },
  {
    title: "Username Validation",
    description: "Ensure usernames meet specific criteria.",
    code: `
const usernameValidator = new RegexCraft()
  .usePreset('username', 'standard')
  .testOne('user_name123');
    `,
    log: `{
  value: 'user_name123',
  isValid: true,
  failedRequirements: []
}`,
  },
  {
    title: "Email Validation",
    description: "Check if an email address is valid.",
    code: `
const emailValidator = new RegexCraft()
  .isEmail()
  .testOne('user@example.com');
    `,
    log: `{
  value: 'user@example.com',
  isValid: true,
  failedRequirements: []
}`,
  },
  {
    title: "Phone Number Validation",
    description: "Validate phone numbers for different countries.",
    code: `
const phoneValidator = new RegexCraft()
  .isPhone('US')
  .testOne('+1234567890');
    `,
    log: `{
  value: '+1234567890',
  isValid: true,
  failedRequirements: []
}`,
  },
  {
    title: "Minimum Length Validation",
    description: "Ensure input meets minimum length requirements.",
    code: `
const minLengthValidator = new RegexCraft()
  .hasMinLength(8)
  .testOne('Short');
    `,
    log: `{
  value: 'Short',
  isValid: false,
  failedRequirements: ['Minimum length of 8 characters']
}`,
  },
  {
    title: "Maximum Length Validation",
    description: "Ensure input does not exceed maximum length.",
    code: `
const maxLengthValidator = new RegexCraft()
  .hasMaxLength(10)
  .testOne('This is a long string');
    `,
    log: `{
  value: 'This is a long string',
  isValid: false,
  failedRequirements: ['Maximum length of 10 characters']
}`,
  },
  {
    title: "Exact Length Validation",
    description: "Ensure input has an exact length.",
    code: `
const exactLengthValidator = new RegexCraft()
  .hasExactLength(5)
  .testOne('Hello');
    `,
    log: `{
  value: 'Hello',
  isValid: true,
  failedRequirements: []
}`,
  },
  {
    title: "Character Requirements",
    description: "Ensure input contains specific characters.",
    code: `
const characterValidator = new RegexCraft()
  .hasUpperCase(1)
  .hasLowerCase(1)
  .hasNumber(1)
  .hasSpecialCharacter(1)
  .testOne('Password1!');
    `,
    log: `{
  value: 'Password1!',
  isValid: true,
  failedRequirements: []
}`,
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
            <h3 className="text-lg font-semibold mt-4">Log Output:</h3>
            <CodeBlock code={example.log} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples;
