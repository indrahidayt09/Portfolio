import { useEffect, useState } from "react";
import AnimatedCursor from "./AnimatedCursor";
import CursorImagePreview from "./CursorImagePreview";
import ProjectItem from "./ProjectItem";
import ProjectHeader from "./ProjectHeader";
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
    <div className="relative z-50 ">
      <AnimatedCursor mousePos={mousePos} />
      <CursorImagePreview
        mousePos={mousePos}
        hoveredIndex={hoveredIndex}
        projects={projects}
      />

      <section className="min-h-screen  text-white py-20 px-4 sm:px-8">
        <ProjectHeader />

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
