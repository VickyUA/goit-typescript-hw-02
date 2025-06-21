import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, isOpen }) {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {images.map((image) => (
          <li key={image.id} onClick={() => isOpen(image)}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
}
