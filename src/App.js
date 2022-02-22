import React, { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  const [updated, setUpdated] = useState("notUpdated");
  return (
    <div>
      <div className="container-fluid p-0">
        <h1 className="bg-dark text-light text-center py-5">
          {" "}
          Crud with react and firebase
        </h1>
      </div>
      <div className="container-md">
        <div className="row py-5">
          <div className="col-lg-5 col-md-12 col-sm-12 mb-5">
            <AddBook status={updated} set={(value) => setUpdated(value)} />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <BookList status={updated} set={(value) => setUpdated(value)} />
          </div>
        </div>
      </div>
      <hr className="hr-text w-50 mx-auto" data-content="Thanks" />
    </div>
  );
};

export default App;
