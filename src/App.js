import "./styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        open simple modal
      </motion.button>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} text="testeeeee" />
        )}
      </AnimatePresence>
    </div>
  );
}
