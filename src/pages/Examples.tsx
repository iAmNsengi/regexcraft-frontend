import { useEffect, useState } from "react";
import BottomNavigation from "../components/BottomNavigation";
import CodeBlock from "../components/CodeBlock";
import HelmetWrapper from "../components/HelmetWrapper";
import { examples } from "../utils/examplesData";

const Examples = () => {
  // const [currentSection, setCurrentSection] = useState("");
  const sections = examples.map(example => example.title.toLowerCase().replace(/\s+/g, "-"));

  // const handleSectionClick = (section: string) => {
  //   setCurrentSection(section);
  //   const sectionElement = document.getElementById(section);
  //   if (sectionElement) {
  //     sectionElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setCurrentSection(`#${section}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

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
      {/* <aside className="hidden right-8 top-0 py-10 xl:block lg:w-[18%]">
        <ul className="hide-scrollbar h-[100vh] overflow-y-scroll">
          <h1 className="mb-5 text-2xl font-semibold">Quick nav</h1>
          {examples.map((example) => {
            const sectionHeading = example.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <li key={example.title} className="mb-4">
                <a
                  href={`#${sectionHeading}`}
                  onClick={() => handleSectionClick(sectionHeading)}
                  className={`hover:text-blue-500 hover:underline ${currentSection === `#${sectionHeading}` ? "text-blue-500 underline" : ""}`}
                >
                  {example.title}
                </a>
              </li>
            );
          })}
        </ul>
      </aside> */}
      <BottomNavigation backLink="home" frontLink="playground" />
    </div>
  );
};

export default Examples;
