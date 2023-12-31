import { Link } from "react-router-dom";

// ** components
import { Button } from "@components";

// ** assets
import { GithubIcon, RightArrowIcon2 } from "@assets/icons";

// ** constants
import { APP_ROUTE, willo_github_url } from "@constants";

// ** locals
import Navbar from "./components/Navbar";
import GradientWrapper from "./components/GradiantSection";


const LandingPage = () => (
  <>
    <Navbar />
    <section className="px-4">
      <GradientWrapper
        parentClassName="inset-0"
        className="custom-screen text-gray-600"
      >
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <h1 className="mx-auto text-4xl font-extrabold text-gray-800 sm:text-6xl">
            The Fastest Way To Manage Your{" "}
            <span className=" bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text text-transparent">
              Temporary Tasks
            </span>
          </h1>
          <p className="mx-auto max-w-xl">
            The ultimate way to manage tasks efficiently and grow your
            productivity for free!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            <Link to={APP_ROUTE} replace>
              <Button
                variant="default"
                className="flex items-center gap-x-2 
             
              "
              >
                Start your journey
                <RightArrowIcon2 />
              </Button>
            </Link>
            <a href={willo_github_url} target="_blank">
              <Button variant="outline" className="flex items-center gap-2 ">
                Discover on github
                <GithubIcon />
              </Button>
            </a>
          </div>
        </div>
      </GradientWrapper>
    </section>
  </>
);

export default LandingPage;
