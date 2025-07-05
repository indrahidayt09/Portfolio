import { useEffect, useState } from "react";
import CursorImagePreview from "./CursorImagePreview";
import ProjectItem from "./ProjectItem";
import { projects } from "../../lib/data";

const ProjectList = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative z-50">
    
      <CursorImagePreview
        mousePos={mousePos}
        hoveredIndex={hoveredIndex}
        projects={projects}
      />

      <section className="py-25  text-white pt-6">
        <div className="max-w-full mx-auto">
          <div className="space-y-1">
            {projects.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
                onHover={setHoveredIndex}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectList;
