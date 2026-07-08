import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useState, useMemo } from "react";

export function Projects() {
  const projects = [
    {
      title: "Prashikshan",
      subtitle: "Training & Skill Development Platform",
      period: "August 2025 – January 2026",
      description: "A full-stack web application for structured training and skill development.",
      achievements: [
        "Developed using Java, Spring Boot, Spring MVC, Thymeleaf, Hibernate/JPA, and MySQL.",
        "Implemented user registration, login, course management, & training enrolment features with server-side validation.",
        "Designed a responsive UI using HTML, CSS, Bootstrap, and JavaScript following MVC architecture.",
        "Integrated MySQL database with Hibernate/JPA for efficient data persistence and CRUD operations."
      ],
      tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Hibernate"]
    },
    {
      title: "AgroConnect",
      subtitle: "Direct Farm-to-Market Platform",
      period: "November 2025 – December 2025",
      description: "A role-based full-stack platform enabling direct transactions between farmers, consumers, and industries.",
      achievements: [
        "Built using Spring Boot, Spring Security, Hibernate/JPA, Thymeleaf, and MySQL.",
        "Developed RESTful APIs and CRUD modules for product listing, order management, and user profiles.",
        "Applied Bean Validation, exception handling, and layered architecture (Controller–Service–Repository)."
      ],
      tags: ["Spring Boot", "Spring Security", "REST API", "MVC"]
    },
    {
      title: "RenSell",
      subtitle: "Rent & Resell Marketplace",
      period: "November 2024 – March 2025",
      description: "A marketplace application for renting and reselling underused products.",
      achievements: [
        "Developed using Java, Spring Boot, Hibernate/JPA, Thymeleaf, and MySQL.",
        "Implemented product management, user authentication, search, and category-based browsing.",
        "Designed scalable database schemas and optimized CRUD operations using Spring Data JPA.",
        "Built secure backend modules to support features like deposits, verification, and dispute management."
      ],
      tags: ["Java", "Spring Boot", "JPA", "MySQL"]
    }
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => p.tags.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
            A selection of my recent full-stack development work.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg dark:hover:shadow-slate-800/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">{project.title}</h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 transition-colors">{project.subtitle}</p>
                    </div>
                    <a href="#" className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4 transition-colors">{project.period}</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow transition-colors">{project.description}</p>
                  
                  <div className="mb-6 space-y-2">
                    {project.achievements.slice(0, 2).map((achievement, i) => (
                      <div key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400 transition-colors">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                        <span className="line-clamp-2">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 transition-colors">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
