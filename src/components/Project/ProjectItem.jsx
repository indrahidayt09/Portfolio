const ProjectItem = ({ project, index, onHover, onLeave }) => {

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      onClick={() => window.open(project.link, "_blank")}
      className="group relative p-6 md:p-8 text-2xl md:text-4xl  border-b border-gray-800 hover:bg-gray-900/20 transition-colors duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <span className="group-hover:text-slate-400 text-slate-600 transition-colors duration-500">
          {project.title}
        </span>
        <span className="text-slate-700 group-hover:text-slate-500 transition-colors">
          →
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
