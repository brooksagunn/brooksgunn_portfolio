const Navbar = () => {
  return (
    <nav className="py-2 font-roboto text-xl text-white absolute w-screen">
      <div className="flex flex-row justify-between max-w-7xl mx-auto px-3">
        <div className="py-1 flex justify-center content-center">
          <img
            src="src\assets\bg_logo_blue-cropped.svg"
            alt=""
            srcset=""
            className="min-w-32"
          />
        </div>
        <ul className="flex justify-between py-6 [&_li]:px-6">
          <li>
            <a href="#">
              <span className="text-surf">/</span>about
            </a>
          </li>
          <li>
            <a href="#">
              <span className="text-surf">/</span>projects
            </a>
          </li>
          <li>
            <a href="#">
              <span className="text-surf">/</span>contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
