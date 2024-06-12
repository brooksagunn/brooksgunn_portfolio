const About = () => {
  return (
    <div
      className="h-svh flex flex-row justify-around items-center bg-sea"
      id="about"
    >
      <div className="w-1/2 flex flex-col items-center">
        <span className="bg-gradient-to-r from-wave via-wave to-surf text-transparent bg-clip-text inline-block whitespace-nowrap text-5xl font-extrabold pb-4">
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
        <div className="skills skills-1 w-2/3 bg-white-200 flex flex-row rounded-lg items-center px-5 my-4 backdrop-blur-sm backdrop-grayscale border-surf border-4">
          <h3 className="font-bold font-roboto w-16 min-w-16 text-lg bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block">
            TOOLS
          </h3>
          <div class="group relative w-max">
            <img src="src\assets\vs_code.svg" alt="VS Code Logo" />
            <span class="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white font-roboto">
              VS Code
            </span>
          </div>
          <div class="group relative w-max">
            <img
              src="src\assets\git_logo.svg"
              alt="Git Logo"
              className="cursor-pointer"
            />
            <span class="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 w-max opacity-0 transition-opacity group-hover:opacity-100 text-white font-roboto">
              Git
            </span>
          </div>

          <img src="src\assets\insomnia.svg" alt="Insomnia" />
          <img src="src\assets\figma.svg" alt="Figma" />
        </div>
      </div>
      <div className="w-1/2 flex flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block">
          A little backstory...
        </h1>
        <p className="text-white text-xl w-2/3 pt-5">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block font-bold">
            Brooks Gunn
          </span>
          , a web developer based in{" "}
          <a
            href="https://maps.app.goo.gl/r6yZWBc8hz7TJAYd8"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-wave"
          >
            Kennesaw, Georgia
          </a>
          . I have over{" "}
          <span className="bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block font-bold">
            three years
          </span>{" "}
          of experience developing engaging applications and interpersonal
          relationships with clients and coworkers alike. <br />
          <br />
          Although I am{" "}
          <span className="bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block font-bold">
            passionate
          </span>{" "}
          about what I do, I believe{" "}
          <span className="bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block font-bold">
            drive
          </span>{" "}
          plays an important part in making greatness happen. That's why I
          thrive in environments where{" "}
          <span className="bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block font-bold">
            learning
          </span>{" "}
          is constant and{" "}
          <span className="bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block font-bold">
            innovation
          </span>{" "}
          is encouraged.
          <br />
          <br />
          Let's connect and bring your digital visions to life with{" "}
          <span className="bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block font-bold">
            quality code
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-surf via-wave to-wave text-transparent bg-clip-text inline-block font-bold">
            quality care
          </span>{" "}
          to stand out in today's competitive landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
