import React, {useState} from "react";
interface Project {
  name: string;
  description: string;
  tech: string;
  image: string;
  link: string;
  github?: string;
}

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    { 
      name: "TravlnN (Travel In Nepal)", 
      description: "A modern travel guide to exploring Nepal’s stunning destinations and delicious, diverse cuisine. ",
      tech: "Php, Bootstrap,JS, MySQL",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      link: "#",
      github: "https://github.com/"
    },
    { 
      name: "OishiTrek", 
      description: "Food delivery mobile app with GPS tracking and real-time order updates",
      tech: "Php, Infinityfree, Js,Bootstrap etc",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      link: "https://chamba.com.np",
      github: "https://github.com/"
    },
    { 
      name: "OishiBite", 
      description: "A single-store food ordering system designed for efficient menu browsing, quick ordering, and smooth customer experience.",
      tech: "Asp.Net, MySQL, Bootstrap etc",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      link: "#",
      github: "https://github.com/"
    },
    { 
      name: "Strikes", 
      description: "Music streaming application with personalized playlists and social features",
      tech: "Ongoing",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      link: "#",
      github: "https://github.com/"
    },
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Here are some of my recent works that showcase my skills and passion for development
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-purple-600 font-medium">
                  {project.tech}
                </p>
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:scale-105 transition-all duration-300 font-medium shadow-lg">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;