const Navbar = () => {
  return (
    <nav className="border-2 content-center px-40 py-2 font-roboto text-xl">
      <div className="flex flex-row justify-between max-w-7xl mx-auto">
        <div className="py-1 flex justify-center content-center">
          <img
            src="src\assets\bg_logo_blue-cropped.svg"
            alt=""
            srcset=""
            className="min-w-32"
          />
        </div>
        <ul className="flex justify-between py-6 [&_li]:px-6">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
