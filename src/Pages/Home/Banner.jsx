import React from "react";
import { motion, easeOut } from "framer-motion";
import team_1 from "../../assets/teams/team_1.jpg";
import team_2 from "../../assets/teams/team_2.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 8, repeat: Infinity }}
              src={team_1}
              className="w-44 md:w-72 lg:w-60 rounded-[35px] border-l-8 border-b-8 border-blue-600  rounded-bl-none shadow-2xl"
            />
            <motion.img
              animate={{ x: [150, 200, 150] }}
              transition={{ duration: 8, delay: 4, repeat: Infinity }}
              src={team_2}
              className="w-2 md:w-72 lg:w-60 rounded-[35px] border-l-8 border-b-8 border-blue-600  rounded-bl-none shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 50 }}
              transition={{ duration: 2, delay: 1, ease: easeOut }}
              className="text-5xl font-bold"
            >
              Start your{" "}
              <motion.span
                animate={{ color: ["#33ff96", "#a2ff33", "#ffa233"] }}
                transition={{ duration: 2 }}
              >
                Career
              </motion.span>
              Now
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <motion.button
              animate={{ x: 60 }}
              transition={{ duration: 2, delay: 1, ease: easeOut }}
              className="btn btn-primary"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
