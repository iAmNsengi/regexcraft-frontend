import { Helmet } from "react-helmet";

const HelmetWrapper = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <title>RegexCraft | {title}</title>
      <meta property="og:title" content="Regex Craft" />
      <meta
        property="og:description"
        content="A powerful utility class for building and managing regular
        expressions with a fluent, chainable API."
      />
      <meta property="og:url" content="https://regexcraft.onrender.com/" />
      <meta property="og:site_name" content="RegexCraft" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default HelmetWrapper;
