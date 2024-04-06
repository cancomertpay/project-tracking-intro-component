// description: This is the main page of the website

import Typography from "@/lib/fonts";

export default function Home() {
  return (
    <div className="p-10 lg:p-0 flex flex-col gap-5 md:gap-10 md:text-center lg:text-start">
      <div
        className={`flex items-center gap-5 md:justify-center lg:justify-start ${Typography.heading.className}`}
      >
        <span className="px-3 rounded-2xl bg-secondary-tealish-blue font-extrabold text-white tracking-wider">
          NEW
        </span>
        <h2 className="tracking-[0.3rem] text-neutral-grayish-blue">
          MONOGRAPH DASHBOARD
        </h2>
      </div>
      <h1
        className={`font-bold text-4xl md:text-6xl text-secondary-tealish-blue ${Typography.heading.className}`}
      >
        POWERFUL INSIGHTS INTO YOUR TEAM
      </h1>
      <p className="text-neutral-dark-grayish-blue text-lg md:text-xl">
        Project planning and time tracking for agile teams.
      </p>
      <div
        className={"flex items-center gap-5 md:justify-center lg:justify-start " + Typography.heading.className}
      >
        <button className="bg-primary-red text-white font-bold rounded-lg py-3 px-5 uppercase hover:bg-primary-red/50 transition-colors tracking-wider">
          Schedule a Demo
        </button>
        <button className="text-neutral-grayish-blue hover:text-neutral-dark-grayish-blue tracking-wider transition-colors lg:tracking-widest">
          TO SEE A PREVIEW
        </button>
      </div>
    </div>
  );
}
