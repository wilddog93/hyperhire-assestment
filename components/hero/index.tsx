"use client"

import { FaCheckSquare } from "react-icons/fa";
import { BubbleText } from "../common/bubble-text";
import { IconBox, IconCall, IconImage, IconMarketing, IconTarget } from "../icons";
import ProfileCarousel from "../profile-carousel";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section
      className="relative h-full md:max-h-[929px] z-10 overflow-hidden bg-gradient-to-r from-[#26C2B9] to-[#288BE7] pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      id="hero"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-9">
            <div className="w-full flex flex-col gap-4 px-4 text-white font-[900]">
              <div className="flex flex-col gap-4">
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full flex flex-col"
                  exit={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ type: "spring", bounce: 0.25, delay: 0.3, duration: 0.3 }}
                >
                  <BubbleText className="w-full max-w-max mb-4 text-white md:text-[#00B8B8] bg-white/20 md:bg-white">
                    풀타임, 파트타임
                  </BubbleText>
                </motion.div>

                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col"
                  exit={{ opacity: 0, y: 10 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl">최고의 실력을 가진</h1>
                  <h2 className="text-4xl md:text-5xl">외국인 인재를 찾고 계신가요?</h2>
                </motion.div>
              </div>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col"
                exit={{ opacity: 0, y: 10 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              >
                <h2 className="hidden md:flex text-lg md:text-2xl">법률 및 인사관리 부담없이</h2>
                <h2 className="hidden md:flex text-lg md:text-2xl">1주일 이내에 원격으로 채용해보세요.</h2>
                <h2 className="md:hidden text-lg md:text-2xl">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</h2>
                <h3 className="hidden md:flex text-lg mt-2">개발자가 필요하신가요?</h3>
              </motion.div>
            </div>

            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="hidden w-full md:grid grid-cols-1 md:grid-cols-3 gap-4 px-4 text-white font-[900]"
              exit={{ opacity: 0, x: 10 }}
              initial={{ opacity: 0, x: 10 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            >
              <div className="flex flex-col gap-4 py-4">
                <div className="w-[129px] h-0.5 bg-white"></div>
                <h3 className="text-lg">평균 월 120만원</h3>
                <p className="text-base">임금을 해당 국가를 기준으로 계산합니다.</p>
              </div>

              <div className="flex flex-col gap-4 py-4">
                <div className="w-[129px] h-0.5 bg-white"></div>
                <h3 className="text-lg">최대 3회 인력교체</h3>
                <p className="text-base">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
              </div>

              <div className="flex flex-col gap-4 py-4">
                <div className="w-[129px] h-0.5 bg-white"></div>
                <h3 className="text-lg">평균 3일, 최대 10일</h3>
                <p className="text-base">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-full flex py-10"
            exit={{ opacity: 0, y: 10 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ 
              type: "spring", 
              bounce: 0.25, 
              duration: 0.5, 
              delay: 0.5
            }}
          >
            <ProfileCarousel />
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex overflow-x-auto space-x-8 w-full py-4 scrollbar-hide"
          exit={{ opacity: 0, x: 10 }}
          initial={{ opacity: 0, x: 10 }}
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        >
          <div className="w-full max-w-xs p-4 flex-shrink-0 rounded-lg bg-white/20 text-white font-bold">
            <div className="w-full flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center">
                <IconMarketing className="text-white" />
              </div>
              <span>해외 마케팅</span>
            </div>
          </div>

          <div className="w-full max-w-xs p-4 flex-shrink-0 rounded-lg bg-white/20 text-white font-bold">
            <div className="w-full flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center">
                <IconImage className="text-white" />
              </div>
              <span>해외 마케팅</span>
            </div>
          </div>

          <div className="w-full max-w-xs p-4 flex-shrink-0 rounded-lg bg-white/20 text-white font-bold">
            <div className="w-full flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center">
                <IconBox className="text-white" />
              </div>
              <span>해외 마케팅</span>
            </div>
          </div>

          <div className="w-full max-w-xs p-4 flex-shrink-0 rounded-lg bg-white/20 text-white font-bold">
            <div className="w-full flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center">
                <IconTarget className="text-white" />
              </div>
              <span>해외 마케팅</span>
            </div>
          </div>

          <div className="w-full max-w-xs p-4 flex-shrink-0 rounded-lg bg-white/20 text-white font-bold">
            <div className="w-full flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center">
                <IconCall className="text-white" />
              </div>
              <span>해외 마케팅</span>
            </div>
          </div>
        </motion.div>

        <div className="md:hidden grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mt-5">
          <div className="flex items-center gap-2 text-white">
            <FaCheckSquare className="text-[#E8ECFF] size-6" />
            <span className="text-lg font-bold">해외 마케팅</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <FaCheckSquare className="text-[#E8ECFF] size-6" />
            <span className="text-lg font-bold">업무 수행 능력</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <FaCheckSquare className="text-[#E8ECFF] size-6" />
            <span className="text-lg font-bold">겸업 여부</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <FaCheckSquare className="text-[#E8ECFF] size-6" />
            <span className="text-lg font-bold">업무 수행 능력</span>
          </div>
        </div>

        <div className="flex md:hidden flex-col gap-4 px-4 mt-5">
          <span className="font-extrabold underline text-[#FBFF23]">개발자가 필요하신가요?</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
