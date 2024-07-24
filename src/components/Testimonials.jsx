import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import pfp1 from "../assets/person_sq_1.jpg";
import pfp2 from "../assets/person_sq_2.jpg";

const Testimonial = ({ img, name, job }) => {
  return (
    <div>
      <p className="text-zinc-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam,
        praesentium consectetur nihil perspiciatis voluptatum excepturi quae
        repellat dolore explicabo quas earum a ipsum in fugit quis fuga enim
        culpa mollitia cumque architecto?
      </p>
      <div>
        <img src={img} alt="/" className="!size-20 rounded-full m-auto my-6" />
        <div>
          <p className="font-bold text-xl">{name}</p>
          <p className="mt-1">{job}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-white py-14 -mt-20 relative">
      <div className="text-zinc-800 text-center">
        <h2 className="small-header">Testimonials</h2>
        <h3 className="big-header">People Says...</h3>
      </div>
      <div className="text-zinc-800 p-10 pb-0 text-center md:max-w-[550px] lg:max-w-[600px] xl:max-w-[800px] mx-auto">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showArrows={true}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
        >
          <Testimonial
            img={pfp1}
            name="Jessica Smith"
            job="Product Marketer @Google"
          />
          <Testimonial
            img={pfp2}
            name="Craig Norton"
            job="Web Developer @Google"
          />
          <Testimonial
            img={pfp1}
            name="Jessica Smith"
            job="Product Marketer @Google"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
