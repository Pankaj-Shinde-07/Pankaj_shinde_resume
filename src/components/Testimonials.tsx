import { motion } from "motion/react";
import { MessageSquareQuote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      content: "Pankaj demonstrated excellent problem-solving skills and a solid understanding of cybersecurity fundamentals during the Cisco Networking Academy internship.",
      author: "Mentor",
      role: "Cisco Networking Academy"
    },
    {
      content: "A dedicated student with a strong grasp of data structures and algorithms. Consistently delivers well-structured, maintainable code for full-stack projects.",
      author: "Professor",
      role: "MIT Academy of Engineering"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors">Testimonials</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 relative transition-colors duration-300 shadow-sm"
            >
              <MessageSquareQuote className="absolute top-8 right-8 w-8 h-8 text-slate-200 dark:text-slate-700 transition-colors" />
              <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-6 relative z-10 transition-colors">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white transition-colors">{testimonial.author}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
