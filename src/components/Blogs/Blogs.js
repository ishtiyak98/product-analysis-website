import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <h2 className="text-center text-success  mt-3 mb-5">My Blog Page</h2>

      <div className="blog-card p-4">
        <h4>What is Context-API?</h4>
        <p>
          Context API is used to pass data from one component to another.
          Usually we pass data from one component to another by using props. It
          is a painful work and also needs to destructure the props data again
          and again. The Context API makes our work more easier by directly
          sending the data to the desired component. The main purpose of Context
          API is to remove the difficulties of props and use a specific data as
          a global value for the components. We can declare the Context by using
          createContext() method and the provider of the context is used to set
          the value. If we want to use or access the context value then we have
          to use useContext() hook which take the name of the context as a
          parameter.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
