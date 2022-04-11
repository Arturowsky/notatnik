import React, { useState, useEffect } from "react";
import headerImg from "../../assets/images/At3.svg";
import notes from "../../assets/images/sticky-notes.svg";
const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    // <header>
    //   <div className="container-fluid">
    //     <img
    //       src={notes}
    //       className="img-fluid mt-5"
    //       alt=""
    //       style={{ width: "200px" }}
    //     />
    //     <div className="container">
    //       <div className="row row-cols-1" style={{ background: headerImg }}>
    //         <div className="col text-center">
    //           <h1 className="display-1 mb-2 app-name">Notatnik</h1>
    //           <h4 className="timer">
    //             <i class="far fa-clock me-2"></i>
    //             {time.toLocaleTimeString()}
    //           </h4>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header>
    <div className="container">
        <nav className="navbar navbar-light navbar-expand-md">
            <div className="container-fluid">
              <a className="navbar-brand"><img className="img-fluid me-2" src={notes} width="48px" alt="logo"/>Notatnik {time.toLocaleTimeString()}</a>
              <button className="navbar-toggler d-none" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
        </nav>
    </div>
</header>
  );
};

export default Header;
