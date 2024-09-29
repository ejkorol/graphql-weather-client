import * as motion from "framer-motion/client";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.25, duration: 1.5, ease: "easeInOut" }}
      className="fixed bottom-0 w-full flex justify-center items-center pb-8"
    >
      <p className="text-lg tracking-normal font-medium text-grayLight dark:text-gray">
        Currently only supporting cities in Canada.
      </p>
    </motion.footer>
  );
};

export { Footer };
