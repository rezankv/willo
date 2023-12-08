// ** components
import { Button } from "@components";

// ** locals
import Navbar from "../pages/components/Navbar";
import GradientWrapper from "../pages/components/GradiantSection";



const Landing = () => (
  <>
    <Navbar />
    <section>
      <GradientWrapper
        wrapperClassName="inset-0"
        className="custom-screen text-gray-600"
      >
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <h1 className="mx-auto text-4xl font-extrabold text-gray-800 sm:text-6xl">
            The fastest way to Increase your{" "}
            <span className=" bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text text-transparent">
              website traffic
            </span>
          </h1>
          <p className="mx-auto max-w-xl">
            The ultimate way to get more website traffic and grow your online
            business. Start your free trial now.
          </p>
          <div className="flex items-center justify-center gap-x-3 text-sm font-medium">
            <Button className="flex items-center gap-x-2 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 ">
              Get free trial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
            <Button
              className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900"
              // scroll={false}
            >
              Discover on github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </GradientWrapper>
    </section>
  </>
);

export default Landing;
