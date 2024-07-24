import GradientBorder from "./GradientBorder";
import Countdown, { zeroPad } from "react-countdown";

const CountdownSec = () => {
  const dateCountdown = new Date("2027 03 13").valueOf();

  return (
    <div className="py-32 bg-zinc-950">
      <div className="text-white text-center px-4 mx-auto w-full responsive-margin">
        <div>
          <h2 className="small-header">Don't Wait</h2>
          <h3 className="big-header">Event Countdown</h3>
        </div>
        <Countdown
          date={dateCountdown}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return (
                <p className="my-20 text-2xl">We are sorry, Event ended!</p>
              );
            } else {
              return (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-20 mt-20 mb-20">
                  <div>
                    <h3 className="text-8xl font-bold">{zeroPad(days)}</h3>
                    <span className="text-zinc-600 uppercase tracking-widest font-bold mt-6 block">
                      Days
                    </span>
                  </div>
                  <div>
                    <h3 className="text-8xl font-bold">{zeroPad(hours)}</h3>
                    <span className="text-zinc-600 uppercase tracking-widest font-bold mt-6 block">
                      Hours
                    </span>
                  </div>
                  <div>
                    <h3 className="text-8xl font-bold">{zeroPad(minutes)}</h3>
                    <span className="text-zinc-600 uppercase tracking-widest font-bold mt-6 block">
                      Minutes
                    </span>
                  </div>
                  <div>
                    <h3 className="text-8xl font-bold">{zeroPad(seconds)}</h3>
                    <span className="text-zinc-600 uppercase tracking-widest font-bold mt-6 block">
                      Seconds
                    </span>
                  </div>
                </div>
              );
            }
          }}
        />

        <GradientBorder>
          <button className="btn-basic btn-gradient">Get Started</button>
        </GradientBorder>
      </div>
    </div>
  );
};

export default CountdownSec;
