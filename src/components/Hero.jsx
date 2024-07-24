import GradientBorder from "./GradientBorder";
import heroImg from "../assets/bg_hero.jpg";

const Hero = () => {
  return (
    <div className="h-[500px] bg-zinc-900 relative flex items-end md:items-center md:h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={heroImg}
          alt="/"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-black/40"></div>
      </div>
      <div className="text-white mb-20 px-4 mx-auto w-full responsive-margin z-10 md:mb-0">
        <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl">
          New template
          <br className="hidden md:block" /> Tailwind{" "}
          <span className="text-nowrap">CSS 3</span>
        </h1>
        <p className="small-header mt-8 mb-16">A FREE TEMPLATE BY DARK CODE</p>
        <GradientBorder>
          <button className="btn-basic btn-gradient">Read More</button>
        </GradientBorder>
      </div>
    </div>
  );
};

export default Hero;
