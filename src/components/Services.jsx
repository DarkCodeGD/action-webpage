import {
  BsCamera,
  BsBoxSeam,
  BsCartDash,
  BsClipboardCheck
} from "react-icons/bs";
import About from "./About";

const Services = () => {
  return (
    <div className="py-32 pb-0 bg-stone-100">
      <div className="text-zinc-800 px-4 mx-auto w-full responsive-margin">
        <div>
          <h2 className="small-header">Services</h2>
          <h3 className="big-header">Our Services</h3>
        </div>

        <div className="text-zinc-800 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-20">
          <div className="p-8 py-10 rounded-lg relative overflow-hidden z-[1] group hover:text-white hover:shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full gradient-primary z-[-1] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
              <div>
                <BsCamera className="size-12 text-violet-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl mt-8 font-bold">Photography</h3>
              <p className="mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat delectus facilis rerum? Repellat, at excepturi sed
                molestiae asperiores repudiandae deleniti?
              </p>
            </div>
          </div>

          <div className="p-8 py-10 rounded-lg relative overflow-hidden z-[1] group hover:text-white hover:shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full gradient-primary z-[-1] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
              <div>
                <BsBoxSeam className="size-12 text-violet-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl mt-8 font-bold">Fast Shipping</h3>
              <p className="mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat delectus facilis rerum? Repellat, at excepturi sed
                molestiae asperiores repudiandae deleniti?
              </p>
            </div>
          </div>

          <div className="p-8 py-10 rounded-lg relative overflow-hidden z-[1] group hover:text-white hover:shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full gradient-primary z-[-1] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
              <div>
                <BsCartDash className="size-12 text-violet-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl mt-8 font-bold">Buy Cheap</h3>
              <p className="mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat delectus facilis rerum? Repellat, at excepturi sed
                molestiae asperiores repudiandae deleniti?
              </p>
            </div>
          </div>

          <div className="p-8 py-10 rounded-lg relative overflow-hidden z-[1] group hover:text-white hover:shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full gradient-primary z-[-1] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
              <div>
                <BsClipboardCheck className="size-12 text-violet-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl mt-8 font-bold">Everything Listed</h3>
              <p className="mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat delectus facilis rerum? Repellat, at excepturi sed
                molestiae asperiores repudiandae deleniti?
              </p>
            </div>
          </div>
        </div>
      </div>

      <About />
    </div>
  );
};

export default Services;
