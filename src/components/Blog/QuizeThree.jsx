import React from "react";

const QuizeThree = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">
        Question-3: What is inline, block & inline Block Element?
      </h1>
      <h1 className="text-2xl mt-4">Answer:</h1>
      <h1 className="text-2xl">Block, Inline and Inline Block Elements</h1>
      <h2 className="text-xl mt-4">Block-level Elements</h2>
      <p>
        A Block-level elements starts a new line & Takes up the full width
        available of space. The browsers automatically add some space before and
        after they call margin padding.
      </p>
      <h2 className="text-xl mt-4">Inline elements</h2>
      <p>
        Inline does not starts a new line & she takes up as much width as
        necessary. Its have no margin and padding.
      </p>
      <h2 className="text-xl mt-4">Inline-block elements</h2>
      <p>
        Inline-block elements are similar to inline elements, they except
        padding and margins and the major difference is that display:
        inline-block does not add a line-break after the element.
      </p>
    </div>
  );
};

export default QuizeThree;
