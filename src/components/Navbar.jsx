const Navbar = () => {
  return (
    <nav className="border-b-2 content-center py-2 font-roboto text-xl text-white bg-sky-950">
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
            <a href="#">/about</a>
          </li>
          <li>
            <a href="#">/projects</a>
          </li>
          <li>
            <a href="#">/contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
