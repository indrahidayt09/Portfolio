const ProjectItem = ({ project, index, onHover, onLeave }) => {
  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      onClick={() => window.open(project.link, "_blank")}
      className="group relative p-6 md:p-7  border-b-[1px] border-gray-400  transition-colors duration-100 cursor-pointer"
    >
      <div className="flex justify-between items-center px-5 lg:px-20">
        <span
          style={{ fontFamily: "Roslindale", fontWeight: 100 }}
          className="group-hover:text-black/70 group-hover:-translate-x-3 text-black  duration-200 transition-all text-6xl md:text-8xl"
        >
          {project.title}
        </span>
        <span style={{ fontFamily: "Outfit", fontWeight: 300 }} className="opacity-0 group-hover:-translate-x-3 group-hover:opacity-100 text-black/50  duration-200 transition-all group-hover:text-slate-500 text-[1.2rem] text-xs md:text-xl">
          {project.category}...
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
