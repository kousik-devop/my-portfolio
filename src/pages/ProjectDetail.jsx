import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../assets/projects.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center mt-20">❌ Project not found</p>;

  return (
    <motion.div
      className="px-4 py-10 sm:px-8 lg:px-5 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {project.description}
      </motion.p>

      {/* Project Image */}
      <motion.img
        src={project.img}
        alt={project.title}
        className="w-full rounded-lg shadow-lg mb-10 border border-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />

      {/* Skills / Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mb-8"
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-3">Skills Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.skill.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-200 rounded-md text-sm sm:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        {project.gitHub && (
          <motion.a
            href={project.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F97316] hover:bg-[#ff6a00] text-white px-6 py-3 rounded-md text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View GitHub Repo →
          </motion.a>
        )}

        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo 🚀
          </motion.a>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <Link
          to="/"
          className="text-blue-600 hover:underline text-sm sm:text-base"
        >
          ← Back to Projects
        </Link>
      </div>
    </motion.div>
  );
}
