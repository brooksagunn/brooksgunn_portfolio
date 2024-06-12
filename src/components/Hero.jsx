const Hero = () => {
  return (
    <div className="h-svh flex flex-row justify-around items-center w-auto bg-sea">
      <div className="w-1/2 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-extrabold w-2/3 min-w-48">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-wave via-wave to-surf text-transparent bg-clip-text inline-block whitespace-nowrap">
            Brooks Gunn
          </span>
        </h1>
        <p className="text-xl w-2/3 px-px py-5">
          I develop sites with visual clarity, user experience, and
          accessibility at the forefront. I lock in to make sites launchworthy.
        </p>
        <div className="text-xl w-2/3 px-px flex items-center">
          <button className="bg-gradient-to-r from-surf via-surf to-wave px-3 py-2 mr-5 rounded font-bold whitespace-nowrap">
            Learn More
          </button>
          <a
            href="https://github.com/brooksagunn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-github mx-1.5 text-4xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brooks-gunn-a0bb32171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-linkedin mx-1.5 text-4xl"></i>
          </a>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        {/* <img
          src="src\assets\bg_headshot_border_blue.png"
          alt=""
          className="w-2/3"
        /> */}
        <img
          src="src\assets\bg_professional_headshot.jpg"
          alt=""
          className="w-2/3 rounded-3xl border-surf border-4"
        />
      </div>
    </div>
  );
};

export default Hero;
