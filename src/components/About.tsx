import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors">About Me</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 transition-colors">
            Computer Science undergraduate with hands-on experience in Java Full Stack Development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-slate text-slate-600 dark:text-slate-300 transition-colors"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors">Background</h3>
            <p className="mb-4">
              I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science Engineering at the MIT Academy of Engineering, Pune (2024 – 2028), maintaining a strong academic record with a CGPA of 8.86.
            </p>
            <p>
              I possess a solid foundation in Data Structures & Algorithms, with consistent problem-solving practice on LeetCode. I'm passionate about developing high-quality software solutions and have built several full-stack web applications using MVC architecture and object-oriented programming principles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 transition-colors">Education</h3>
            
            <div className="border-l-2 border-slate-200 dark:border-slate-700 transition-colors">
              <div className="relative pl-6 pb-8 transition-colors">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2"></div>
                <h4 className="text-lg font-medium text-slate-900 dark:text-white transition-colors">MIT Academy of Engineering, Pune</h4>
                <p className="text-slate-500 dark:text-slate-400 font-mono text-sm mt-1 transition-colors">2024 – 2028</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors">
                  B.Tech. - Computer Engineering - Software Engineering
                </p>
                <div className="mt-3 inline-block px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
                  CGPA: 8.86 / 10
                </div>
              </div>

              <div className="relative pl-6 pb-8 transition-colors">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2"></div>
                <h4 className="text-lg font-medium text-slate-900 dark:text-white transition-colors">Enzo Chem Jr. College Yeola, Nashik</h4>
                <p className="text-slate-500 dark:text-slate-400 font-mono text-sm mt-1 transition-colors">2024</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors">
                  12th | MSBSHSE
                </p>
                <div className="mt-3 inline-block px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
                  Percentage: 81.50 / 100
                </div>
              </div>

              <div className="relative pl-6 transition-colors">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2"></div>
                <h4 className="text-lg font-medium text-slate-900 dark:text-white transition-colors">Madhyamic Vidhyalay Tandulwadi, Yeola, Nashik</h4>
                <p className="text-slate-500 dark:text-slate-400 font-mono text-sm mt-1 transition-colors">2022</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 transition-colors">
                  10th | MSBSHSE
                </p>
                <div className="mt-3 inline-block px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
                  Percentage: 87.40 / 100
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
