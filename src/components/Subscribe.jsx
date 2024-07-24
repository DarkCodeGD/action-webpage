const Subscribe = () => {
  return (
    <div>
      <div className="py-32 px-4 md:px-10 lg:px-20 md:m-10 lg:m-14 bg-stone-100 shadow-xl">
        <div className="lg:max-w-[1000px] mx-auto">
          <h3 className="text-3xl">Subscribe to Newsletter</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            similique.
          </p>
          <form className="mt-10 lg:flex items-end gap-10">
            <input
              type="text"
              placeholder="Your name"
              className="placeholder-zinc-500 px-0 py-3 bg-transparent border-b-2 focus:border-zinc-400 border-zinc-300 w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your email"
              className="placeholder-zinc-500 px-0 py-3 bg-transparent border-b-2 border-zinc-300 focus:border-zinc-400 w-full mt-6 md:mt-0 focus:outline-none"
            />
            <button className="btn-basic border-2 border-transparent tracking-normal font-normal text-base normal-case hover:text-black hover:bg-transparent hover:border-black mt-6 transition-all duration-300 w-full lg:max-w-[200px] lg:mt-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
