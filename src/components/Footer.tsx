import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a href="https://github.com/Pankaj-Shinde-07" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-6 h-6" />
          </a>
          <a href="http://www.linkedin.com/in/pankaj-shinde28" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:shindepankaj428@gmail.com" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-slate-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Pankaj Shinde. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
