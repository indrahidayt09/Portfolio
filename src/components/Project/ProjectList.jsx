const ProjectList = ({ projects, onHover, onLeave }) => {
  return (
    <div className="space-y-1">
      {projects.map((project, index) => (
        <div
          key={project.id}
          onMouseEnter={() => onHover(index)}
          onMouseLeave={onLeave}
          onClick={() => window.open(project.link, "_blank")}
          className="group relative p-6 md:p-8 text-2xl md:text-3xl font-medium border-b border-gray-800 hover:bg-gray-900/20 transition-colors duration-300 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <span className="group-hover:text-cyan-400 transition-colors duration-500">
              {project.title}
            </span>
            <span className="text-slate-600 group-hover:text-white transition-colors">
              →
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
