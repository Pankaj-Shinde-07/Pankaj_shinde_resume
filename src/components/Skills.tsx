import { motion } from "motion/react";
import { Code2, Database, Layout, Terminal, Network } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      skills: ["Java (Core & Advanced)", "C", "C++", "Python"]
    },
    {
      title: "Data Structures & Algorithms",
      icon: <Network className="w-6 h-6 text-red-600" />,
      skills: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Trees & Graphs", "Hashing", "Trie", "Dynamic Programming", "Sorting & Searching"]
    },
    {
      title: "Java Full Stack",
      icon: <Database className="w-6 h-6 text-green-600" />,
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA (Hibernate)", "Servlets", "JSP", "JDBC", "RESTful APIs"]
    },
    {
      title: "Web Development",
      icon: <Layout className="w-6 h-6 text-purple-600" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Thymeleaf", "Responsive UI Design"]
    },
    {
      title: "Tools & Systems",
      icon: <Terminal className="w-6 h-6 text-slate-600" />,
      skills: ["Git & GitHub", "Linux OS", "MySQL & MongoDB", "Apache Tomcat", "Maven", "Postman", "AWS (Basics)"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors">Technical Skills</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
            A comprehensive toolkit for building robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-6 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center text-slate-600 dark:text-slate-300 transition-colors">
                    <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
