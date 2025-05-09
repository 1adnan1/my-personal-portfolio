import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Make sure you have these images in your `src/assets/` folder and imported correctly
import project1 from "./project1.jpg";
import project2 from "./project2.jpg";
import project3 from "./project3.jpg";
import project4 from "./project4.jpg";

const projects = [
  {
    title: "FrontTOBack Website",
    image: project1,
    description: "Developed the FrontToBack website in which user study and i bulit using React and Chakra UI with full responsiveness. Gained a strong grip on building modern, scalable UIs using Chakra's component-based design system",
    link: "https://front2back.netlify.app/",
  },
  {
    title: "Netflix Clone",
    image: project2,
    description: "A Netflix frontend clone built with React and Sass, featuring reusable components, clean SCSS styling, and dynamic UI behavior to strengthen core React concepts through real-world project experience.",
    link: "",
  },
  {
    title: "A Client based project",
    image: project3,
    description: "A client-assigned web project named Yadesakinabintulhussain, I built using HTML, CSS, and JavaScript, designed according to the client’s specifications to create a responsive & informative and deployed using firebase",
    link: "https://yadesakinabintulhusain.web.app/",
    
  },
  {
    title: "Daily Goals List",
    image: project4,
    description: "Daily Goals(TODOs List) List Website – A simple and interactive web app built with HTML, CSS, and JavaScript that helps users create, organize, and track their daily tasks.By building this daily goals list website, I improved my skills in HTML, CSS, and JavaScript through practical experience.",
    
    link: "https://1adnan1.github.io/Daily-goals-list",
  },
];

const directions = ["-100%", "100%", "-100%"]; // Left, right, top entry

const ProjectSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-[#0f172a] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-14">Recent Projects</h2>

      <div
        ref={ref}
        className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <div key={index}>
            <motion.div
              initial={{ x: directions[index % directions.length], opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              className="relative rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/5 group"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Project Title Sliding Under Image on Hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-3 px-4 text-lg font-semibold text-white transform translate-y-0 group-hover:translate-y-full transition-transform duration-500"
              >
                {project.title}
              </motion.div>

              {/* Overlay with Visit Button */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Visit Site
                </a>
              </div>
            </motion.div>

            {/* Description OUTSIDE the card */}
            <motion.div   initial={{ x: directions[index % directions.length], opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }} className="mt-3 text-sm text-gray-300 text-justify max-w-sm mx-auto">
              {project.description}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
