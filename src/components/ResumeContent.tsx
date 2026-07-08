import React from "react";

export const ResumeContent = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div
      ref={ref}
      id="resume-content"
      className="bg-white text-black p-8 sm:p-12 mx-auto shadow-sm"
      style={{
        maxWidth: "210mm",
        minHeight: "297mm",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-2 border-slate-800 pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Pankaj Shinde</h1>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 mt-2">
            <a href="mailto:shindepankaj428@gmail.com" className="hover:text-blue-600 transition-colors">shindepankaj428@gmail.com</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a>
            <span>|</span>
            <a href="https://github.com/Pankaj-Shinde-07" className="hover:text-blue-600 transition-colors">GitHub</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Leetcode</a>
            <span>|</span>
            <a href="http://www.linkedin.com/in/pankaj-shinde28" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="text-right mt-2 sm:mt-0 text-sm font-medium text-slate-700">
          Contact: +91- 8788364740
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-blue-700 uppercase mb-2">Summary</h2>
        <p className="text-sm text-slate-800 leading-relaxed text-justify">
          Computer Science undergraduate with hands-on experience in <strong>Java Full Stack Development</strong>, including <strong>Core Java, Advanced Java, Spring Boot, Spring MVC, Spring Data JPA (Hibernate), Servlets, RESTful APIs, and MySQL</strong>. Proficient in building scalable, secure, and maintainable full-stack web applications using <strong>HTML, CSS, JavaScript, Bootstrap, and Thymeleaf</strong>. Familiar with <strong>Git, GitHub, Linux, and Maven</strong>, with a strong understanding of MVC architecture and object-oriented programming principles. Possess a solid foundation in <strong>Data Structures & Algorithms</strong>, with consistent problem-solving practice on <strong>Leet Code</strong>, and passionate about developing high-quality software solutions.
        </p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-blue-700 uppercase mb-2">Education</h2>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Bachelor of Technology (B.Tech) – Computer Science Engineering</h3>
            <p className="text-sm text-slate-700 mt-0.5">MIT Academy of Engineering, Pune</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-700">2024 – 2028</p>
            <p className="text-sm font-medium text-slate-900 mt-0.5">CGPA: 8.86</p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-blue-700 uppercase mb-2">Technical Skills</h2>
        <ul className="text-sm text-slate-800 space-y-1.5 list-disc pl-5">
          <li><strong>Programming Languages:</strong> Java (Core & Advanced), C, C++, Python</li>
          <li><strong>Java Full Stack:</strong> Spring Boot, Spring MVC, Spring Security, Spring Data JPA (Hibernate), Servlets, JSP, JDBC, RESTful APIs, MVC Architecture</li>
          <li><strong>Web Development:</strong> HTML5, CSS3, JavaScript, Bootstrap, Thymeleaf</li>
          <li><strong>Database:</strong> MySQL, Oracle DB, MongoDB</li>
          <li><strong>Tools & Platforms:</strong> Git, GitHub, Maven, Apache Tomcat, Linux, VS Code, IntelliJ IDEA, Postman, AWS(basics)</li>
          <li><strong>DSA:</strong> Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, Hashing, Trie, DP, Sorting, Searching</li>
          <li><strong>Systems:</strong> Linux OS, Assembly Language, Computer Architecture</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-blue-700 uppercase mb-2">Experience</h2>
        <div className="mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Cisco Virtual Internship – Cybersecurity</h3>
              <p className="text-sm text-slate-700 font-medium">Cisco Networking Academy</p>
            </div>
            <p className="text-sm text-slate-700">June 2025 – August 2025</p>
          </div>
          <ul className="mt-2 text-sm text-slate-800 space-y-1 list-disc pl-5">
            <li>Completed a structured virtual internship focused on cybersecurity fundamentals.</li>
            <li>Gained exposure to core security concepts, threat awareness, and secure system practices.</li>
            <li>Developed understanding of security considerations relevant to software development.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-blue-700 uppercase mb-2">Projects</h2>
        
        <div className="mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            Prashikshan – Training & Skill Development Platform <span className="font-normal text-slate-600">| August 2025 – January 2026 | </span>
            <a href="#" className="text-blue-600 font-normal hover:underline">[Live Demo]</a>
          </h3>
          <ul className="mt-1.5 text-sm text-slate-800 space-y-1 list-disc pl-5">
            <li>Developed a full-stack web application using <strong>Java, Spring Boot, Spring MVC, Thymeleaf, Hibernate/JPA, and MySQL</strong>.</li>
            <li>Implemented user registration, login, course management, & training enrolment features with server-side validation.</li>
            <li>Designed a responsive UI using <strong>HTML, CSS, Bootstrap, and JavaScript</strong> following MVC architecture.</li>
            <li>Integrated MySQL database with Hibernate/JPA for efficient data persistence and CRUD operations.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            AgroConnect – Direct Farm-to-Market Platform <span className="font-normal text-slate-600">| November 2025 – December 2025 | </span>
            <a href="#" className="text-blue-600 font-normal hover:underline">[Live Demo]</a>
          </h3>
          <ul className="mt-1.5 text-sm text-slate-800 space-y-1 list-disc pl-5">
            <li>Built a role-based full-stack application using <strong>Spring Boot, Spring Security, Hibernate/JPA, Thymeleaf, and MySQL</strong>.</li>
            <li>Developed RESTful APIs and CRUD modules for product listing, order management, and user profiles.</li>
            <li>Applied Bean Validation, exception handling, and layered architecture (Controller–Service–Repository) for a secure and maintainable application.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            RenSell – Rent & Resell Marketplace <span className="font-normal text-slate-600">| November 2024 – March 2025 | </span>
            <a href="#" className="text-blue-600 font-normal hover:underline">[Live Demo]</a>
          </h3>
          <ul className="mt-1.5 text-sm text-slate-800 space-y-1 list-disc pl-5">
            <li>Developed a marketplace application using <strong>Java, Spring Boot, Hibernate/JPA, Thymeleaf, and MySQL</strong> for renting and reselling products.</li>
            <li>Implemented product management, user authentication, search, and category-based browsing.</li>
            <li>Designed scalable database schemas and optimized CRUD operations using Spring Data JPA.</li>
            <li>Built secure backend modules with validation and clean MVC architecture to support future features such as deposits, verification, and dispute management.</li>
          </ul>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-lg font-bold text-blue-700 uppercase mb-2">Achievements</h2>
        <ul className="text-sm text-slate-800 space-y-1 list-disc pl-5">
          <li>Solved 100+ DSA problems on Leet Code covering core data structures and algorithms.</li>
          <li>Completed Cisco AICTE Virtual Internship in Cybersecurity.</li>
          <li>Built and deployed full-stack web applications using Java-based backend technologies.</li>
          <li>Strong academic record with CGPA of <strong>8.86</strong> at MIT Academy of Engineering, Pune.</li>
        </ul>
      </section>

    </div>
  );
});
