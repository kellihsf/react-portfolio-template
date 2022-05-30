import React from "react";
import logo from '../../public/jslogo.png';

const WorkCard = ({
  img,
  name,
  description,
  team,
  features,
  icons,
  onClick,
  openGithub,
  
}) => {
  console.log('logo', logo)
  return (
    <div className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0">
      <div
        className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
        style={{ height: "600px" }}
      >
        <img alt={name} className="h-full w-full object-cover" src={img.src} />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <h3 className="text-l opacity-50 my-2"><strong>Team:</strong> {team}</h3>
      <h3 className="text-l opacity-50 my-2"><strong>Features:</strong> {features}</h3>
      {/* <h3 className="text-l opacity-50"><strong>Technologies:</strong> {technologies}
      </h3> */}
     <div className="inline-container">
      {icons.map(icon => {
        return (
          <img className="h-10" src={icon.src}/>
        )
      })}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 mx-2 rounded"
        onClick={onClick}
      >
        Project URL
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openGithub}
      >
        GitHub
      </button>
    </div>
  );
};

export default WorkCard;
