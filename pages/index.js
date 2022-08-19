// Static Data Import--------
import socialMedia from "@content/socialMedia";
// Static Data END--------

// Page Components START----------
import BlogsSection from "@components/Home/BlogsSection";
import SkillSection from "@components/Home/SkillSection";
import PMSkillSection from "@components/Home/PMSkillSection";
// Page Components END------------

import Image from "next/image";
import Metadata from "@components/MetaData";
import Contact from "@components/Contact";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "@content/FramerMotionVariants";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import { homeProfileImage } from "@utils/utils";
import { getPinnedSkills } from "@lib/dataFetch";
import getRSS from "@lib/generateRSS";
import generateSitemap from "@lib/sitemap";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Ripples from "react-ripples";
import MDXContent from "@lib/MDXContent";
import pageMeta from "@content/meta";

export default function Home({ blogs, skills }) {
  return (
    <>
      <Metadata
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />
      <div className="relative max-w-4xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid min-h-screen py-20 place-content-center"
        >
          <div className="relative flex flex-col items-center w-full gap-10 mx-auto">
            <motion.div
              variants={popUp}
              className="relative flex items-center justify-center p-3 rounded-full w-44 h-44 xs:w-52 xs:h-52 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
            >
              <Image
                src={homeProfileImage}
                className="rounded-full shadow filter saturate-0"
                width={400}
                height={400}
                alt="cover Profile Image"
                quality={75}
                priority={true}
              />
            </motion.div>

            <div className="flex flex-col w-full gap-3 p-5 text-center select-none ">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl font-bold lg:text-6xl font-sarina"
                >
                  Hayssem Vazquez-Elsayed
                </motion.h1>
                <motion.p
                  variants={opacityVariant}
                  className="text-xs font-medium text-gray-500 md:text-sm lg:text-lg"
                >
                  Product Manager
                </motion.p>
              </div>

              <motion.p
                variants={opacityVariant}
                className="text-sm font-medium text-center text-slate-500 dark:text-gray-300 md:text-base"
              >
                Professional Technical Product Manager with a passion for Web
                development, Data Analysis and Design. I love to build ( and
                occasionally develop ) astounding digital experiences with
                excitement for helping and aligning requirements to deliver
                meaningful results. Currently, I'm working at Société Générale
                Investment Banking focused on building internal and innovative
                web products. Additionally, I’m the Co-Founder of Confsquare, a
                new way to organize your event and gather with your community!
              </motion.p>
            </div>

            <motion.div className="overflow-hidden rounded-md" variants={popUp}>
              <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
                <button
                  className="flex items-center gap-2 px-5 py-2 border border-gray-500 rounded-md outline-none select-none dark:border-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  onClick={() => window.open("/resume")}
                >
                  <FiDownload />
                  <p>Resume</p>
                </button>
              </Ripples>
            </motion.div>
          </div>
        </motion.section>

        <div>
          <PMSkillSection skills={skills} />
          <SkillSection skills={skills} />
          <BlogsSection blogs={blogs} />
          <br />
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }) {
  return (
    <AnimatedHeading
      className="w-full my-2 text-3xl font-bold text-left font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  const blogs = new MDXContent("posts").getAllPosts().slice(0, 3);
  const skills = getPinnedSkills();
  await getRSS();
  await generateSitemap();

  return {
    props: { blogs, skills },
  };
}
