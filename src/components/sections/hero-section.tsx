import { MdOutlineSlowMotionVideo } from "react-icons/md";
import CustomButton from "../ui/custom-button";

const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center bg-white">
      <div className="flex flex-col gap-6 absolute left-0 top-0 w-1/2 h-full  px-30">
        <h1 className="text-7xl font-semibold mt-40">Spend smarter. Move faster.</h1>
        <p className="text-lg font-light">
          Gain control and speed with modern cards, banking, expenses, accounting, and more — in 120+ countries.
        </p>
        <CustomButton />
        <p className="flex justify-start items-center gap-1 text-[#F46934]">
          <MdOutlineSlowMotionVideo size={18} />
          See brex in action
        </p>
        <p className="text-[0.7rem] text-gray-500 absolute bottom-0 mb-5">
          Brex is a financial technology company, not a bank. Checking and banking services <br /> provided by Column
          N.A., Member FDIC.
        </p>
      </div>

      <div>
        <img src="/hero.webp" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
