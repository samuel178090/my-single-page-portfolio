// components/SocialLinks.jsx
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

const socials = [
  { icon: FiGithub, link: "https://github.com/samuel178090/samuel178090" },
  { icon: FiTwitter, link: "https://twitter.com/@AjewoleJosephS1" },
  { icon: FiLinkedin, link: "https://linkedin.com/in/joseph-samuel-ajewole-4b549b312" },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socials.map(({ icon: Icon, link }, i) => (
        <motion.a
          key={i}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
          className="text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
        >
          <Icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
}




