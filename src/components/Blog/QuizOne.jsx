import React from "react";

const QuizOne = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Question 1: What is ContexAPI?</h1>
      <h1 className="text-2xl mt-4">Answer:</h1>
      <h1 className="text-2xl py-2">Context API</h1>
      <p>
        Context is an API that is built into React. Context API provides us to
        pass data without pass data manually at every level. Now we discous
        details about Context API.
      </p>
      <p>
        Normaly we pass data in react parent to child via props. If you want to
        avoid passing some props through many levels, than solution is context
        api.
      </p>
      <h1 className="text-2xl py-2">How it works?</h1>
      <p>
        first of all you create a contex with React.createContext(). this
        methood return a consumer and a provider. Provider is a component that
        as it's names suggests provides the state to its children. It will hold
        the "store" and be the parent of all the components that might need that
        store. Consumer as it so happens is a component that consumes and uses
        the state. More information can be found on React's
      </p>
    </div>
  );
};

export default QuizOne;
