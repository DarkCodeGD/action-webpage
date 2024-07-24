import GradientBorder from "./GradientBorder";
import Testimonials from "./Testimonials";

import img1 from "../assets/person_1.jpg";
import img2 from "../assets/person_2.jpg";

const Teams = () => {
  return (
    <div className="py-0 bg-zinc-950">
      <div className="text-white px-4 mx-auto w-full responsive-margin">
        <Testimonials />
        <div>
          <h2 className="small-header">Team</h2>
          <h3 className="big-header">Meet our team</h3>
        </div>
      </div>
      <div className="w-full pt-0 pb-32 bg-zinc-900 mt-[300px]">
        <div className="flex flex-col justify-center gap-8 gap-y-20 lg:flex-row px-4 responsive-margin mx-auto">
          <div className="relative -mt-40 lg:max-w-[500px]">
            <img src={img1} alt="/" className="w-full" />
            <div className="text-white my-10">
              <h3 className="text-4xl">Jessica Green</h3>
              <p className="opacity-40 mt-1">CEO, Co-Founder</p>
              <p className="opacity-70 mt-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptatibus numquam delectus ab, error ratione, tempore, illum
                architecto nam odit repellat ut sit consequatur, libero fuga
                laudantium quis unde! Aspernatur blanditiis odio hic magnam
                totam, laborum et quas laudantium, recusandae perferendis saepe
                eum porro ipsam omnis vel sunt aperiam, accusamus!
              </p>
            </div>
            <GradientBorder>
              <button className="btn-basic btn-gradient">Read Bio</button>
            </GradientBorder>
          </div>

          <div className="relative lg:-mt-40 lg:max-w-[500px]">
            <img src={img2} alt="/" className="w-full" />
            <div className="text-white my-10">
              <h3 className="text-4xl">Jon Gold</h3>
              <p className="opacity-40 mt-1">CTO, Co-Founder</p>
              <p className="opacity-70 mt-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptatibus numquam delectus ab, error ratione, tempore, illum
                architecto nam odit repellat ut sit consequatur, libero fuga
                laudantium quis unde! Aspernatur blanditiis odio hic magnam
                totam, laborum et quas laudantium, recusandae perferendis saepe
                eum porro ipsam omnis vel sunt aperiam, accusamus!
              </p>
            </div>
            <GradientBorder>
              <button className="btn-basic btn-gradient">Read Bio</button>
            </GradientBorder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
