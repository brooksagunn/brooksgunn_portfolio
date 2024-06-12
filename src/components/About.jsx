const About = () => {
  return (
    <div className="h-svh flex flex-row justify-around items-center bg-sea">
      <div className="w-1/2 flex flex-col items-center">
        <span className="bg-gradient-to-r from-wave via-wave to-surf text-transparent bg-clip-text inline-block whitespace-nowrap text-5xl font-extrabold py-4">
          Technologies
        </span>
        <div className="skills skills-1 w-2/3 bg-white-200 flex flex-row rounded-lg items-center px-5 my-2 backdrop-blur-sm backdrop-grayscale border-surf border-4">
          <h3 className="font-bold font-roboto w-16 min-w-16 text-lg bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block">
            FRONT
          </h3>
          <img src="src\assets\js_logo.svg" alt="Javascript Logo" />
          <img src="src\assets\tailwind_logo.svg" alt="Tailwind Logo" />
          <img src="src\assets\react_logo.svg" alt="React Logo" />
          <img src="src\assets\vite_logo.svg" alt="Vite Logo" />
          <img src="src\assets\wordpress.svg" alt="Wordpress Logo" />
        </div>
        <div className="skills skills-1 w-2/3 bg-white-200 flex flex-row rounded-lg items-center px-5 my-2 backdrop-blur-sm backdrop-grayscale border-surf border-4">
          <h3 className="font-bold font-roboto w-16 min-w-16 text-lg bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block">
            BACK
          </h3>
          <img src="src\assets\nodejs_logo.svg" alt="Node JS Logo" />
          <img src="src\assets\npm_logo.svg" alt="npm Logo" />
          <img src="src\assets\mongo_db_logo.svg" alt="Mongo DB Logo" />
          <img src="src\assets\my_sql_logo.svg" alt="MySQL Logo" />
        </div>
        <div className="skills skills-1 w-2/3 bg-white-200 flex flex-row rounded-lg items-center px-5 my-2 backdrop-blur-sm backdrop-grayscale border-surf border-4">
          <h3 className="font-bold font-roboto w-16 min-w-16 text-lg bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block">
            TOOLS
          </h3>
          <img src="src\assets\vs_code.svg" alt="VS Code Logo" />
          <img src="src\assets\git_logo.svg" alt="Git Logo" />
          <img src="src\assets\insomnia.svg" alt="Insomnia" />
          <img src="src\assets\figma.svg" alt="Figma" />
        </div>
      </div>
      <div className="w-1/2 flex flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block">
          A little backstory...
        </h1>
        <p className="text-white text-xl w-2/3 px-px py-5">
          I develop sites with visual clarity, user experience, and
          accessibility at the forefront. I lock in to make sites launchworthy.
        </p>
      </div>
    </div>
  );
};

export default About;
