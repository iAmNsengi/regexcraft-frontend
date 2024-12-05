// src/pages/Examples/Examples.tsx
import { useLocation } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";
import CodeBlock from "../components/CodeBlock";
import HelmetWrapper from "../components/HelmetWrapper";

const examples = [
  {
    title: "Password Validation in React",
    description: "Validate password strength in a React component.",
    code: `
import { useState } from "react";
import RegexCraft from "regexcraft";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");

  // Initialize RegexCraft with the "high" password preset
  const validator = new RegexCraft().usePreset("password", "high");
 
  // Use testOne for individual password strings
  const isValid = validator.testOne(password);

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      {!isValid.isValid && (
        <ul>
          {isValid.failedRequirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
   `,
  },
  {
    title: "Email Validation in React",
    description: "Check if an email address is valid in a React component.",
    code: `
import React, { useState } from 'react';
import RegexCraft from 'regexcraft';

const EmailValidator = () => {
  const [email, setEmail] = useState('');
  const validator = new RegexCraft().isEmail();

  const isValid = validator.testOne(email).isValid;

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <p>{isValid ? 'Valid Email' : 'Invalid Email'}</p>
    </div>
  );
};
    `,
  },
  {
    title: "Phone Number Validation in React",
    description:
      "Validate phone numbers for different countries in a React component.",
    code: `
import React, { useState } from 'react';
import RegexCraft from 'regexcraft';

const PhoneValidator = () => {
  const [phone, setPhone] = useState('');
  const validator = new RegexCraft().isPhone('US');

  const isValid = validator.testOne(phone).isValid;

  return (
    <div>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
      />
      <p>{isValid ? 'Valid Phone Number' : 'Invalid Phone Number'}</p>
    </div>
  );
};
    `,
  },
  {
    title: "Username Validation in React",
    description:
      "Ensure usernames meet specific criteria in a React component.",
    code: `
import React, { useState } from 'react';
import RegexCraft from 'regexcraft';

const UsernameValidator = () => {
  const [username, setUsername] = useState('');
  const validator = new RegexCraft().usePreset('username', 'standard');

  const isValid = validator.testOne(username).isValid;

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <p>{isValid ? 'Valid Username' : 'Invalid Username'}</p>
    </div>
  );
};
    `,
  },
  {
    title: "Form Validation in React",
    description:
      "Apply multiple validation rules to a form field in a React component.",
    code: `
import React, { useState } from 'react';
import RegexCraft from 'regexcraft';

const FormValidator = () => {
  const [input, setInput] = useState('');
  const validator = new RegexCraft()
    .hasMinLength(8)
    .hasUpperCase(1)
    .hasNumber(1)
    .hasSpecialCharacter(1);

  const isValid = validator.testOne(input).isValid;

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter input"
      />
      <p>{isValid ? 'Valid Input' : 'Invalid Input'}</p>
    </div>
  );
};
    `,
  },
  {
    title: "Date Validation in React",
    description: "Validate date format in a React component.",
    code: `
import React, { useState } from 'react';
import RegexCraft from 'regexcraft';

const DateValidator = () => {
  const [date, setDate] = useState('');
  const validator = new RegexCraft().isDate('YYYY-MM-DD');

  const isValid = validator.testOne(date).isValid;

  return (
    <div>
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter date (YYYY-MM-DD)"
      />
      <p>{isValid ? 'Valid Date' : 'Invalid Date'}</p>
    </div>
  );
};
    `,
  },
  {
    title: "URL Validation in React",
    description: "Validate URL format in a React component.",
    code: `
import React, { useState } from 'react';
import RegexCraft from 'regexcraft';

const URLValidator = () => {
  const [url, setUrl] = useState('');
  const validator = new RegexCraft().isURL();

  const isValid = validator.testOne(url).isValid;

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <p>{isValid ? 'Valid URL' : 'Invalid URL'}</p>
    </div>
  );
};
    `,
  },
  {
    title: "React Form with Multiple Validations",
    description: "A complete form with multiple validations in React.",
    code: `
import React, { useState } from 'react';
import RegexCraft from 'regexcraft';

const MultiValidatorForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const usernameValidator = new RegexCraft().usePreset('username', 'standard');
    const emailValidator = new RegexCraft().isEmail();
    const passwordValidator = new RegexCraft().usePreset('password', 'high');

    const usernameValid = usernameValidator.testOne(formData.username).isValid;
    const emailValid = emailValidator.testOne(formData.email).isValid;
    const passwordValid = passwordValidator.testOne(formData.password).isValid;

    return usernameValid && emailValid && passwordValid;
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={validateForm}>Submit</button>
    </div>
  );
};
    `,
  },
  {
    title: "Vanilla JavaScript: Password Validation",
    description:
      "Validate password strength using RegexCraft in vanilla JavaScript.",
    code: `
const validator = new RegexCraft()
  .usePreset('password', 'high');

const result = validator.testOne('MyStr0ng@Pass');
console.log(result); // { value: 'MyStr0ng@Pass', isValid: true, failedRequirements: [] }
    `,
  },
  {
    title: "Vanilla JavaScript: Email Validation",
    description:
      "Check if an email address is valid using RegexCraft in vanilla JavaScript.",
    code: `
const validator = new RegexCraft().isEmail();
const result = validator.testOne('user@example.com');
console.log(result); // { value: 'user@example.com', isValid: true, failedRequirements: [] }
    `,
  },
  {
    title: "Vanilla JavaScript: URL Validation",
    description: "Validate URL format using RegexCraft in vanilla JavaScript.",
    code: `
const validator = new RegexCraft().isURL();
const result = validator.testOne('https://example.com');
console.log(result); // { value: 'https://example.com', isValid: true, failedRequirements: [] }
    `,
  },
  {
    title: "Vanilla JavaScript: Phone Number Validation",
    description:
      "Validate phone numbers using RegexCraft in vanilla JavaScript.",
    code: `
const validator = new RegexCraft().isPhone('US');
const result = validator.testOne('+1234567890');
console.log(result); // { value: '+1234567890', isValid: true, failedRequirements: [] }
    `,
  },
  {
    title: "Vanilla JavaScript: Date Validation",
    description: "Validate date format using RegexCraft in vanilla JavaScript.",
    code: `
const validator = new RegexCraft().isDate('YYYY-MM-DD');
const result = validator.testOne('2023-01-01');
console.log(result); // { value: '2023-01-01', isValid: true, failedRequirements: [] }
    `,
  },
  {
    title: "Vanilla JavaScript: Form Validation",
    description:
      "Apply multiple validation rules to a form field using RegexCraft in vanilla JavaScript.",
    code: `
const validator = new RegexCraft()
  .hasMinLength(8)
  .hasUpperCase(1)
  .hasNumber(1)
  .hasSpecialCharacter(1);

const result = validator.testOne('Password1!');
console.log(result); // { value: 'Password1!', isValid: true, failedRequirements: [] }
    `,
  },
];

const Examples = () => {
  const currentSection = useLocation().hash;
  return (
    <div className="px-4 lg:px-0">
      <HelmetWrapper title="How To Use" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl px-7 lg:px-0 font-bold mb-8">Usage Examples</h1>
        <div className="space-y-12">
          {examples.map((example, index) => (
            <div
              key={index}
              id={`${example.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
              className="border rounded-lg p-6 bg-white shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">{example.title}</h2>
              <p className="text-gray-600 mb-4">{example.description}</p>
              <CodeBlock code={example.code} />
            </div>
          ))}
        </div>
      </div>
      <aside className="fixed right-8 top-0 hidden py-10 lg:block lg:w-[18%]">
        <ul className="hide-scrollbar h-[100vh] overflow-y-scroll">
          <h1 className="mb-5 text-2xl font-semibold">Quick nav</h1>
          {examples.map((example) => {
            const sectionHeading = example.title
              .toLowerCase()
              .replace(/\s+/g, "-");
            return (
              <li key={example.title} className="mb-4">
                <a
                  href={`#${sectionHeading}`}
                  className={`hover:text-blue-500 hover:underline ${currentSection === `#${sectionHeading}` ? "text-blue-500 underline" : ""}`}
                >
                  {example.title}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
      <BottomNavigation backLink="home" frontLink="playground" />
    </div>
  );
};

export default Examples;
