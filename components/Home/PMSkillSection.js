import MetaData from "@components/MetaData";
import { popUpFromBottomForText } from "@content/FramerMotionVariants";
import certificatesData from "@content/pmSkillsData";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeHeading } from "../../pages";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import PageTop from "@components/PageTop";
import pageMeta from "@content/meta";

export default function PMSkillSection() {
  return (
    <>
      <section className="mx-5">
        <HomeHeading title="Product Manager" />
        <br />
        <div className="flex flex-col gap-3 px-5 font-inter">
          {certificatesData.map((cer, index) => {
            return (
              <AnimatedDiv
                className="flex items-center justify-center gap-4 p-4 origin-center transform border border-gray-300 rounded-sm sm:justify-start bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary dark:border-neutral-700 md:origin-top group"
                variants={popUpFromBottomForText}
                key={index}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <Image
                      width={40}
                      height={40}
                      src={cer.issuedBy.orgLogo}
                      alt={cer.issuedBy.orgName}
                      quality={50}
                      objectFit="contain"
                      layout="fixed"
                      placeholder="blur"
                      blurDataURL={cer.issuedBy.orgLogo}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="text-sm font-semibold sm:text-base md:text-lg text-neutral-900 dark:text-neutral-200">
                      {cer.title}
                    </h3>
                  </div>
                </div>
              </AnimatedDiv>
            );
          })}
        </div>
        <br />
      </section>
    </>
  );
}
