"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-background bg-[#FBFBFB] relative z-10 pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="w-full grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-3 items-start">
            <div className="w-full px-4">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-5 inline-block">
                  <Image
                    src="/logo/hyperhire-logo.svg"
                    alt="logo"
                    className="w-full"
                    width={140}
                    height={30}
                  />
                </Link>

                <div className="w-full flex flex-col gap-3 mb-9">
                  <p className="text-xs leading-relaxed text-foreground font-bold">
                    우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
                  </p>
                  <p className="text-xs leading-relaxed text-foreground font-bold">
                    010-0000-0000
                  </p>
                  <p className="text-xs leading-relaxed text-foreground font-bold">
                    aaaaa@naver.com
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="w-full bg-white dark:bg-foreground/30 rounded-lg p-4 text-[14px] font-bold ">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/images/footer-1.png"
                    alt="logo"
                    className="size-10"
                    width={100}
                    height={100}
                  />
                  <h2 className="text-black dark:text-white">
                    해외 개발자 원격 채용
                  </h2>
                  <ul>
                    <li>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-base duration-300 hover:text-primary dark:hover:text-primary"
                      >
                        <span>바로가기</span>
                        <div className="border border-black rounded-lg p-1">
                          <FaArrowRight className="size-4" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full bg-white dark:bg-foreground/30 rounded-lg p-4 text-[14px] font-bold ">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/images/footer-2.png"
                    alt="logo"
                    className="size-10"
                    width={100}
                    height={100}
                  />
                  <h2 className="text-black dark:text-white">
                    외국인 원격 채용 (비개발)
                  </h2>
                  <ul>
                    <li>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                      >
                        <span>바로가기</span>
                        <div className="border border-black rounded-lg p-1">
                          <FaArrowRight className="size-4" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full bg-white dark:bg-foreground/30 rounded-lg p-4 text-[14px] font-bold ">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/images/footer-3.png"
                    alt="logo"
                    className="size-10"
                    width={100}
                    height={100}
                  />
                  <h2 className="text-black dark:text-white">
                    한국어 가능 외국인 채용
                  </h2>
                  <ul>
                    <li>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                      >
                        <span>바로가기</span>
                        <div className="border border-black rounded-lg p-1">
                          <FaArrowRight className="size-4" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full bg-white dark:bg-foreground/30 rounded-lg p-4 text-[14px] font-bold ">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/images/footer-4.png"
                    alt="logo"
                    className="size-10"
                    width={100}
                    height={100}
                  />
                  <h2 className="dark:text-white">
                    해외 개발자 활용 서비스
                  </h2>
                  <ul>
                    <li>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                      >
                        <span>바로가기</span>
                        <div className="border border-black rounded-lg p-1">
                          <FaArrowRight className="size-4" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 items-start">
            <div className="p-4">
              <div className="flex flex-col gap-4 text-xs font-bold">
                <h2 className="text-black dark:text-white">
                  상호명
                </h2>
                <ul>
                  <li>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                      >
                      <span>하이퍼하이어</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      <span>Hyperhire India Private Limited</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4">
              <div className="flex flex-col gap-4 text-xs font-bold">
                <h2 className="text-black dark:text-white">
                  대표 CEO
                </h2>
                <ul>
                  <li>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                      >
                      <span>김주현</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      <span>Juhyun Kim</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4">
              <div className="flex flex-col gap-4 text-xs font-bold">
                <h2 className="text-black dark:text-white">
                  사업자등록번호 CIN
                </h2>
                <ul>
                  <li>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                      >
                      <span>427-86-01187</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      <span>U74110DL2016PTC290812</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4">
              <div className="flex flex-col gap-4 text-xs font-bold">
                <h2 className="text-black dark:text-white">
                  주소 ADDRESS
                </h2>
                <ul>
                  <li>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                      >
                      <span>서울특별시 강남대로 479, 지하 1층 238호</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      <span>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-8 px-4">
            <p className="text-left text-xs dark:text-white">
              &copy;
              <Link
                className="hover:text-foreground font-bold"
                href="#"
                rel="noopener noreferrer"
              >
                2023 Hyperhire
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
