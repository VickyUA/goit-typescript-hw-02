import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../App/App";

Modal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

export default function ImageModal({ image, isOpen, onClose }: Props) {
  if (!image) return;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div>
          <img src={image.urls.regular} alt={image.description} />
        </div>
      </Modal>
    </div>
  );
}
