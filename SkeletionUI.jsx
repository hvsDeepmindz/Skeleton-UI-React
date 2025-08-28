import { motion } from "framer-motion";
import { Skeleton } from "antd";

<motion.div
            className="w-full grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-[3rem] max-h-[800px] overflow-y-auto no-scrollbar py-[4rem] px-[6rem] max-xl:px-[5rem] max-md:px-[4rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="rounded-xl w-[100%] h-[300px] flex-shrink-0 flex-grow-0 px-[1rem] py-[0.5rem] shadow-md bg-[#bdbdbd]"
              >
                <Skeleton
                  active
                  paragraph={{ rows: 2, width: ["60%", "80%"] }}
                  title={{ width: "40%" }}
                  className="bg-[#c4c4c4]"
                />
              </div>
            ))}
          </motion.div>

