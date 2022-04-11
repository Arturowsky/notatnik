import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Main = () => {
  // State
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || "yyyy"; // nie jestem pewien czy tak powinno byc
  });
  const [inputValue, setInputValue] = useState("");
  const [isActive, setActive] = useState([]);
  const [notification, setNotification] = useState(true);
  const [title, setTitle] = useState("Notatnik - Artur Lewandowicz");

  // Dynamically set page title
  useEffect(() => {
    document.title = title;
    if (inputValue !== "") {
      document.title = inputValue
    }
  })
  // Send array to localStorage
  useEffect(() => {
    // storing input name
    localStorage.setItem("tasks", JSON.stringify(list));
    console.log(list)
  }, [list]);

  // Add to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setNotification(!notification);
    } else {
      setList((list) => [
        ...list,
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      ]);
      setInputValue("");
    }
  };

  const handleInputClick = () => {
    setNotification(true);
  };

  // Remove from the list
  const handleRemove = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  // Toggle items on the list
  // const toggle = (index) => {
  //   if (isActive.indexOf(index) === -1) {
  //     setActive([...isActive, index]);
  //   }
  //   console.log(`kliknieto ${index}`);
  //   console.log(isActive)
  // };

  // Reset entire list
  const handleReset = () => {
    setList([]);
  };
  return (
    <main>
      <div className="container mt-1">
        <div className="row row-cols-1">
          <div className="col">
            <form>
              <label className="form-label"></label>
              <div
                className="alert alert-warning"
                role="alert"
                style={{ opacity: `${notification ? "0" : "1"}` }}
              >
                <span>
                  <strong>Uwaga</strong> Musisz dodać treść zanim klikniesz{" "}
                  <i className="fas fa-plus ms-2"></i> Dodaj
                </span>
              </div>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-list"></i>
                </span>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  onClick={handleInputClick}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSubmit}
                >
                  <i className="fas fa-plus me-2"></i>Dodaj
                </button>
              </div>
            </form>
          </div>
          <div className="col mt-5">
            <h4 className="mb-5">
              <span className="bg-primary py-1 px-2 text-white">
                {list.length}
              </span>{" "}
              zadań znajduje się na Twojej liście
            </h4>
            <ul className="m-0 p-0">
              {list.map((element, index) => (
                <li key={index}>
                  <div className="card custom-hover">
                    <div className="card-body d-flex shadow-sm">
                      <div>
                        <span className="badge bg-custom-primary me-2">
                          {index + 1}
                        </span>
                      </div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center w-75">
                        <p
                          className={`m-0 text-start ${
                            isActive.indexOf(index) !== -1 ? "completed" : ""
                          }`}
                        >
                          {element}
                        </p>
                      </div>
                      <div className="text-end d-xxl-flex justify-content-xxl-end align-items-xxl-center w-25">
                        <button
                          className="btn btn-outline-primary btn-sm"
                          type="button"
                          key={index}
                          onClick={() => handleRemove(index)}
                        >
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <button
              className="btn btn-outline-primary ms-2 mb-5"
              type="button"
              onClick={handleReset}
            >
              <i className="fas fa-redo-alt me-2"></i>Zresetuj listę
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
