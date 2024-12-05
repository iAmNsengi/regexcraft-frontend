import BottomNavigation from "../components/BottomNavigation";
import HelmetWrapper from "../components/HelmetWrapper";
const About = () => {
  return (
    <div className="px-4 lg:px-0">
      <HelmetWrapper title="About" />
      <div className="max-w-4xl mx-auto ">
        <h1 className="mb-6 text-4xl font-bold">About RegexCraft</h1>
        <p className="mb-4 text-lg text-gray-600">
          RegexCraft is a powerful utility class designed to simplify the
          process of building and managing regular expressions. With its fluent,
          chainable API, developers can easily create complex regex patterns
          without the hassle of manual string manipulation.
        </p>
        <h2 className="mb-4 mt-8 text-2xl font-semibold">Meet the Developer</h2>
        <p className="mb-4 text-lg text-gray-600">
          Developed by{" "}
          <a
            href="https://nsengixp.onrender.com/"
            className="text-blue-500 underline"
          >
            Eliezer Nsengi
          </a>
          , RegexCraft aims to provide a user-friendly interface for regex
          validation and testing. Eliezer is passionate about creating tools
          that enhance developer productivity and streamline workflows.
        </p>
        <h2 className="mb-4 mt-8 text-2xl font-semibold">
          Why Use RegexCraft?
        </h2>
        <ul className="list-inside list-disc text-gray-600">
          <li>
            🔍 **Easy to Use**: Build complex regex patterns with a simple,
            chainable API.
          </li>
          <li>
            ⚡ **Powerful Features**: Includes validation presets for emails,
            phone numbers, passwords, and more.
          </li>
          <li>
            🛠️ **Interactive Playground**: Test your regex patterns in real-time
            with the integrated playground.
          </li>
          <li>
            📚 **Comprehensive Documentation**: Access detailed guides and
            examples to help you get started quickly.
          </li>
        </ul>
        <h2 className="mb-4 mt-8 text-2xl font-semibold">Get Started</h2>
        <p className="mb-4 text-lg text-gray-600">
          Whether you're a beginner or an experienced developer, RegexCraft is
          here to help you manage your regular expressions with ease. Check out
          the{" "}
          <a href="/examples" className="text-blue-500 underline">
            usage examples
          </a>{" "}
          to see RegexCraft in action!
        </p>
      </div>
      <BottomNavigation backLink="playground" />
    </div>
  );
};

export default About;
