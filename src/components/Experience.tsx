import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors">Experience</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
            Professional journey and internships.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 sm:pl-0"
          >
            {/* Timeline line */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2 transition-colors"></div>
            <div className="sm:hidden absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 transition-colors"></div>

            {/* Experience Item */}
            <div className="relative mb-12 sm:w-1/2 sm:pr-12 sm:ml-0">
              <div className="absolute left-[-32px] sm:left-auto sm:-right-[20px] top-1 w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center z-10 shadow-sm transition-colors">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 transition-colors">
                <div className="flex flex-col mb-4">
                  <span className="text-sm font-mono text-blue-600 dark:text-blue-400 font-medium tracking-wide mb-1 transition-colors">June 2025 – August 2025</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Cybersecurity Virtual Internship</h3>
                  <h4 className="text-lg text-slate-700 dark:text-slate-300 font-medium transition-colors">Cisco Networking Academy</h4>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 transition-colors">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full flex-shrink-0"></span>
                    Completed a structured virtual internship focused on cybersecurity fundamentals.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                    Gained exposure to core security concepts, threat awareness, and secure system practices.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                    Developed understanding of security considerations relevant to software development.
                  </li>
                </ul>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
