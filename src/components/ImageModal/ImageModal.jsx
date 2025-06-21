import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, isOpen, onClose }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        {image && (
          <div>
            <img src={image.urls.regular} alt={image.description} />
          </div>
        )}
      </Modal>
    </div>
  );
}
