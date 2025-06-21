import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App";

interface Props {
  images: Image[];
  isOpen: (image: Image) => void;
}

export default function ImageGallery({ images, isOpen }: Props) {
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
