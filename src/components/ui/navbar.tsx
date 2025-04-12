import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { navLinks } from "../../utils/constants";
import { motion } from "motion/react";

interface Sublink {
  name: string;
  description?: string;
  icon?: React.ElementType;
}

interface NavLink {
  name: string;
  href: string;
  sublinks?: Sublink[];
}

const Navbar = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [sublinkData, setSublinkData] = useState<NavLink>({ name: "", href: "" });

  function handleHover(link: NavLink) {
    if (link.sublinks) {
      setHover(true);
    } else {
      setHover(false);
    }
    setSublinkData(link);
  }

  return (
    <div className="bg-white flex justify-between px-10 py-3.5 border-b-[0.1px] border-gray-400">
      <div className="flex gap-8 justify-center items-center">
        <h1 className="text-2xl font-bold font-inter">Brex</h1>
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <>
              <div
                onMouseEnter={() => handleHover(link)}
                key={link.name}
                className="flex items-center gap-3 hover:border-1 border-gray-300 py-1 px-3 rounded-2xl duration-200"
              >
                <a className="text-[0.9rem]" href={link.href}>
                  {link.name}
                </a>
                <span>{link.sublinks && <IoIosArrowDown size={14} />}</span>
              </div>
              {hover && (
                <div
                  onMouseEnter={() => setHover(false)}
                  className="duration-300 absolute top-[6.8%] right-0 left-0 bg-black/10 h-screen z-10 w-full px-5"
                >
                  <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="bg-white h-4/12 p-4"
                  >
                    <motion.div
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.1 }}
                    >
                      <h1 className="border-b border-gray-200 mb-3">{sublinkData.name}</h1>
                      <div className="grid grid-cols-2  w-1/2">
                        {sublinkData?.sublinks?.map((slink) => (
                          <div className="flex gap-2 justify-start items-center p-3 hover:bg-gray-100 rounded-xl">
                            {slink?.icon && (
                              <span className="p-4 border-[1px] border-gray-300 rounded-xl">
                                {<slink.icon size={20} />}
                              </span>
                            )}
                            <div>
                              <h1 className="font-semibold text-sm">{slink.name}</h1>
                              <h3 className="text-gray-400 text-xs">{slink?.description}</h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        {["Sing In", "See a demo"].map((link, idx) => (
          <div className="" key={idx}>
            <a className="text-[0.9rem]" href={link}>
              {link}
            </a>
          </div>
        ))}
        <button className="bg-[#F46934] px-7 py-2 rounded-lg text-sm text-white">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
