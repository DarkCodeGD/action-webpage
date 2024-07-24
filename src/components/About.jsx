import GradientBorder from "./GradientBorder";
import aboutImg from "../assets/image_big_2.jpg";

const About = () => {
  return (
    <div className="bg-white px-4 pt-16 pb-0 -mb-16 relative z-[2] mt-32 sm:px-14 md:py-16 md:mx-14">
      <div className="flex flex-col items-center lg:flex-row xl:w-[1050px] 2xl:w-[1300px] mx-auto">
        <div className="sm:px-4 basis-1/2">
          <div className="text-zinc-800 2xl:mr-[200px]">
            <div className="mb-8">
              <h2 className="small-header">Who We Are</h2>
              <h3 className="big-header">About us</h3>
            </div>
            <p className="mt-4 leading-relaxed">
              Lorem ipsum dolor sit, amet, consectetur adipisicing elit.
              Inventore velit dolores possimus, et aliquam aliquid quibusdam,
              magnam hic recusandae, voluptatibus nihil architecto quo optio
              fuga, doloribus soluta eius qui voluptatum?
            </p>
            <p className="mt-4 mb-14 leading-relaxed">
              Quibusdam, hic. Corporis nisi, non nam totam velit accusantium
              maxime, nulla tenetur iure quia ipsum ullam tempora, fugit culpa
              architecto, esse sequi! Cumque deserunt, delectus doloremque
              sapiente repellat non sunt.
            </p>
            <GradientBorder>
              <button className="btn-basic btn-gradient bg-white text-black hover:text-white duration-300">
                Read More
              </button>
            </GradientBorder>
          </div>
        </div>

        <div className="sm:px-4 lg:-mt-32 mt-14 basis-1/2 self-start">
          <img src={aboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
