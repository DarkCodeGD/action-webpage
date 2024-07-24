import featureImg from "../assets/bg_hero_2.jpg";

const Feature = ({ header, info }) => {
  return (
    <div className="bg-zinc-900 p-8 py-10 pt-12 rounded-lg relative overflow-hidden z-[1] group hover:text-white hover:shadow-lg">
      <div className="absolute top-0 left-0 w-full h-full gradient-primary z-[-1] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="transition-transform duration-300 translate-y-0 group-hover:-translate-y-4">
        <h3 className="text-2xl">{header}</h3>
        <p className="mt-4 leading-relaxed opacity-60">{info}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="py-32 pb-56 bg-zinc-700 relative">
      <img
        src={featureImg}
        alt="/"
        className="absolute top-0 left-0 size-full"
      />
      <div className="absolute top-0 left-0 size-full bg-black/40"></div>
      <div className="text-white px-4 mx-auto w-full responsive-margin relative">
        <div>
          <h2 className="small-header">Features</h2>
          <h3 className="big-header">More Features</h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            iste?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <Feature
            header="Creative"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          delectus facilis rerum? Repellat, at excepturi sed."
          />
          <Feature
            header="Design"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          delectus facilis rerum? Repellat, at excepturi sed."
          />
          <Feature
            header="Development"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          delectus facilis rerum? Repellat, at excepturi sed."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
