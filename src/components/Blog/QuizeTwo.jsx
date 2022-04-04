import React from "react";

const QuizeTwo = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Question-2: What is semantic tag?</h1>
      <h1 className="text-2xl mt-4">Answer:</h1>
      <h2 className="text-2xl py-2">Semantic Tags</h2>
      <p>
        The semantic HTML tags help the search engines and other user devices to
        determine the importance and context of web pages. The pages made with
        semantic elements are much easier to read. It has greater accessibility.
        It offers a better user experience.
      </p>
      <h4 className="text-xl py-2">Example:</h4>
      <p>header tag: to defines a header for a web page.</p>
      <p>nav tag: It defines a container for navigation links.</p>
      <p>
        article tag: This element contains the main part, containing information
        about the web page.
      </p>
      <p>
        aside tag: The aside tag content is often placed as a sidebar in a
        document.
      </p>
    </div>
  );
};

export default QuizeTwo;
