import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdPaid } from "react-icons/md";

//INTERNAL IMPORT
import { Form } from "./index";
import { useStateContext } from "../../Context/index";

const Chat = () => {
  //STATE VARIABLE
  const [active, setActive] = useState("Ask anything");
  const [hide, setHide] = useState(true);
  const [proMember, setProMember] = useState({});
  const [freeTrail, setFreeTrail] = useState();
  //STATE MANAGEMENT CONTEXT
  const { Free, address } = useStateContext();

  const close = (e) => {
    e.preventDefault();
    setHide(false);
  };

  const productList = [
    "Ask anything",
    "Content writer",
    "Code generator",
    "Translate anything",
    "Social media",
    "Email generator",
    "Personal Advice",
    "Password generator",
    "Travel/Hangout",
    "Essay writer",
  ];

  const loadData = () => {
    const UserDetail = localStorage.getItem("userDetail");
    console.log(UserDetail);
    const member = JSON.parse(UserDetail);
    setProMember(member);
    //FREE TRAIL
    console.log(localStorage.getItem("freeTrail"));
    const freeTrail = localStorage.getItem("freeTrail");
    setFreeTrail(freeTrail);

    console.log(freeTrail);
  };

  useEffect(() => {
    loadData();
  }, []);

  const display = Free?.replace(/['"]+/g, "");

  return (
    <div
      className="tab-pane fade show active"
      id="chat"
      role="tabpanel"
      aria-labelledby="chat"
      tabi ndex="0"
    >
      <div className="main-wrapper">
        {/* //NAVBAR START */}
        <nav className="navbar navbar-expand-lg bg-light p-0">
          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BiMenu className="mobil_custom_menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="inner-menu-panel">
              <button
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                className="inner-close d-block d-lg-none"
              >
                Back
              </button>

              <div className="search-box">
                <i className="iconsax" data-icon="search-normal-2"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here.."
                />
              </div>
              <ul className="inner-links-list" id="innerLink">
                {productList.map((product, i) => (
                  <li
                    key={i + 1}
                    onClick={() => setActive(product)}
                    className={product == active ? "active" : ""}
                  >
                    <a href="#!" data-title="Ask anything">
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        {/* //NAVBAR END */}
        <div className="class-header">
          <div className="d-flex align-items-center gap-3">
            <button
              className="navbar-toggler d-md-none d-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BiMenu className="mobil_custom_menu" />
            </button>
            <a href="/" className="logo-icon d-flex d-md-none">
              <img
                src="assets/svg/logo-icon.svg"
                className="img-fluid"
                alt=""
              />
            </a>
            <h3 id="targetDiv">{active}</h3>
          </div>
          <div className="header-option">
            {display == "Pro member" ? (
              <a href="#">{display}</a>
            ) : (
              <a className="del-btn" data-cursor="pointer" href="#">
                Free Left(<span id="freeTry">{Free || 0} / 5</span>)
              </a>
            )}
            <a
              href="#!"
              className="premium-btn"
              id="subscriptionBtn"
              data-cursor="pointer"
            >
              <MdPaid />
              Get <span>premium</span>
            </a>
          </div>
        </div>
        {/* HEADER END */}
        <div className="main-chat">
          <div className="no-chat">
            {hide ? (
              <div>
                <img
                  src="assets/svg/no-chat.svg"
                  className="img-fluid"
                  alt=""
                />
                <h3>
                  {active == "Ask anything" ? "" : "Ask"}
                  {active} chatbot
                </h3>
              </div>
            ) : (
              " "
            )}
          </div>
          <div className="" id="chat_container"></div>
          <Form
            close={close}
            proMember={proMember}
            address={address}
            freeTrail={freeTrail}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
