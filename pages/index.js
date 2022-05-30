import { useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Image from 'next/image'


// Local Data
import data from "../yourData";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto mb-10">
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="laptop:mt-20 mob:mt-10">
        <div className="inline-container">
        <h3 className="mt-5 mob:text-3xl laptop:text-5xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
          {data.headerTaglineOne} <br />
          {data.headerTaglineTwo}
        </h3>
        <Image className="headshot" src="/kellipic.jpeg" width={250} height={250} class="rounded-full" alt="head" />
      </div>
      </div>
      <div
        className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={workRef}>
        <h1 className="text-2xl text-bold">Recent Projects:</h1>
        <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4">
          {data.projects.map((project, index) => (
            <WorkCard
              key={index}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              team={project.team}
              features={project.features}
              technologies={project.technologies}
              onClick={() => window.open(project.url)}
              openGithub={() => window.open(project.githubLink)}
              icons={project.icons}
            />
          ))}
   
        </div>
        <div>
        </div>
      </div>
      {/* <div className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Services.</h1>
        <div className="mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6">
          {data.services.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.title}
              // description={service.description}
              team={service.team}
              features={service.features}
            />
          ))}
        </div>
      </div> */}
      <div
        className="mt-40 mob:mt-2 laptop:mt-40"
        ref={aboutRef}>
        <h1 className="text-lg text-bold">About Me:</h1>
        <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-1xl mob:text-xl laptop:text-2xl w-3/5 mob:w-full laptop:w-3/5">
          {data.aboutpara}
        </p>
      </div>
      <div className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Contact Me 👩🏻‍💻</h1>
        <div className="mt-5">
          <Socials />
          
        </div>
      </div>
      <h1 className="text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0">
       

      </h1>
    </div>
  );
}
