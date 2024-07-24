import GradientBorder from "./GradientBorder";

const Card = ({
  header = "Basic",
  info = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam hic nisi consequuntur ex totam dignissimos",
  price = 10,
  isBtnActive = false
}) => {
  return (
    <div className="p-10 py-14 bg-gradient-to-b from-violet-500 to-violet-800 rounded-lg lg:max-w-[350px]">
      <h3 className="text-3xl">{header}</h3>
      <p className="opacity-60 mt-8">{info}</p>
      <div className="border-b border-white opacity-30 my-14"></div>
      <p className="font-bold flex justify-center mb-10">
        <span className="mt-2 mr-2 text-xl opacity-60">$</span>
        <span className="text-6xl">{price}</span>
        <span className="self-end ml-2 opacity-60">.99</span>
      </p>
      {isBtnActive ? (
        <button className="btn-basic bg-white text-black border border-white/30 px-12 font-bold hover:bg-transparent hover:text-white transition-all duration-300">
          Buy
        </button>
      ) : (
        <button className="btn-basic bg-transparent border border-white/30 px-12 font-bold hover:bg-white hover:text-black transition-all duration-300">
          Buy
        </button>
      )}
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="py-32 bg-zinc-950">
      <div>
        <div className="text-white text-center">
          <h2 className="small-header">Prices for everyone</h2>
          <h3 className="big-header">Pricing</h3>
        </div>

        <div className="text-white text-center px-4 lg:px-8 mt-20 max-w-[500px] lg:max-w-full gap-8 flex flex-col lg:flex-row mx-auto justify-center">
          <Card header="Starter" price={49} />
          <Card header="Basic" price={199} isBtnActive={true} />
          <Card header="Premium" price={975} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
