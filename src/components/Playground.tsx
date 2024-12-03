/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import RegexCraft from "regexcraft";
import BottomNavigation from "./BottomNavigation";

const Playground = () => {
  const [input, setInput] = useState("");
  const [validationRules, setValidationRules] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);

  const validateInput = () => {
    const validator = new RegexCraft();

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
      }
    });

    const testResult = validator.testOne(input);
    setResult(testResult);
  };

  return (
    <div className="px-4 lg:px-0">
      <div className="max-w-2xl mx-auto ">
        <h1 className="mb-8 text-3xl font-bold">RegexCraft Playground</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Validation Rules</h2>
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
                          validationRules.filter((r) => r !== rule),
                        );
                      }
                    }}
                  />
                  <span className="capitalize">{rule}</span>
                </label>
              ))}
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Test Input
              </label>
              <input
                type="text"
                className="w-full rounded-md border px-4 py-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <button
              className="mt-4 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
              onClick={validateInput}
            >
              Test
            </button>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Results</h2>
            {result && (
              <div className="space-y-4">
                <div className="rounded-md bg-gray-50 p-4">
                  <p className="font-medium">
                    Valid: {result.isValid ? "✅" : "❌"}
                  </p>
                  {result.failedRequirements.length > 0 && (
                    <div className="mt-2">
                      <p className="font-medium">Failed Requirements:</p>
                      <ul className="list-inside list-disc text-red-600">
                        {result.failedRequirements.map(
                          (req: string, i: number) => (
                            <li key={i}>{req}</li>
                          ),
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
      <BottomNavigation backLink="examples" frontLink="about" />
    </div>
  );
};

export default Playground;
