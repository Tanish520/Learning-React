import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="Footer-container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-4 border-top">
        <div className="col-md-3 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0">© 2024 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="#" className="mx-2">
              <BsTwitter size={30} color="#1DA1F2" />{" "}
              {/* Twitter brand color */}
            </a>
          </li>
          <li className="ms-3">
            <a href="#" className="mx-2">
              <BsInstagram size={30} color="#E1306C" />{" "}
              {/* Instagram brand color */}
            </a>
          </li>
          <li className="ms-3">
          <a href="#" className="mx-2">
              <BsFacebook size={30} color="#1877F2" />{" "}
              
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
