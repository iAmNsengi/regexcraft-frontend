/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/Playground/Playground.tsx
import { useState } from "react";
import RegexCraft from "regexcraft";

const Playground = () => {
  const [input, setInput] = useState("");
  const [validationRules, setValidationRules] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);

  const validateInput = () => {
    const validator = new RegexCraft();

    // Apply selected validation rules
    validationRules.forEach((rule) => {
      switch (rule) {
        case "email":
          validator.isEmail();
          break;
        case "phone":
          validator.isPhone("US");
          break;
        case "password":
          validator.usePreset("password", "medium");
          break;
        case "minLength":
          validator.hasMinLength(8);
          break;
        case "maxLength":
          validator.hasMaxLength(10);
          break;
        case "exactLength":
          validator.hasExactLength(5);
          break;
        case "upperCase":
          validator.hasUpperCase(1);
          break;
        case "lowerCase":
          validator.hasLowerCase(1);
          break;
        case "number":
          validator.hasNumber(1);
          break;
        case "specialCharacter":
          validator.hasSpecialCharacter(1);
          break;
        // Add more cases as needed
      }
    });

    const testResult = validator.testOne(input);
    setResult(testResult);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">RegexCraft Playground</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Validation Rules</h2>
          <div className="space-y-2">
            {[
              "email",
              "phone",
              "password",
              "minLength",
              "maxLength",
              "exactLength",
              "upperCase",
              "lowerCase",
              "number",
              "specialCharacter",
            ].map((rule) => (
              <label key={rule} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded text-primary"
                  checked={validationRules.includes(rule)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setValidationRules([...validationRules, rule]);
                    } else {
                      setValidationRules(
                        validationRules.filter((r) => r !== rule)
                      );
                    }
                  }}
                />
                <span className="capitalize">{rule}</span>
              </label>
            ))}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test Input
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <button
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
            onClick={validateInput}
          >
            Test
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          {result && (
            <div className="space-y-4">
              <div className="p-4 rounded-md bg-gray-50">
                <p className="font-medium">
                  Valid: {result.isValid ? "✅" : "❌"}
                </p>
                {result.failedRequirements.length > 0 && (
                  <div className="mt-2">
                    <p className="font-medium">Failed Requirements:</p>
                    <ul className="list-disc list-inside text-red-600">
                      {result.failedRequirements.map(
                        (req: string, i: number) => (
                          <li key={i}>{req}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playground;
