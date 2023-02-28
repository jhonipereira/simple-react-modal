import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      damping: 30,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
};
const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="modal green-gradient"
      >
        <button onClick={handleClose}>X</button>
        <p>{text}</p>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
