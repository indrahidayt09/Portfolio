const ProjectItem = ({ project, index, onHover, onLeave }) => {
  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      onClick={() => window.open(project.link, "_blank")}
      className="group relative p-6 md:p-8 text-2xl md:text-3xl  border-b border-[#1c1d20]  transition-colors duration-100 cursor-pointer"
    >
      <div className="flex justify-between items-center ">
        <span
          style={{ fontFamily: "Outfit", fontWeight: 400 }}
          className="group-hover:text-slate-400 group-hover:-translate-x-3 text-[#1c1d20]  duration-200 transition-all "
        >
          {project.title}
        </span>
        <span className="group-hover:-translate-x-3 text-[#1c1d20]  duration-200 transition-all group-hover:text-slate-500 text-[1.2rem]">
          {project.category}
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
