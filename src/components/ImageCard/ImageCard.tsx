import css from "./ImageCard.module.css";
import { Image } from "../App/App";

interface Props {
  image: Image;
}

export default function ImageCard({ image }: Props) {
  return (
    <div className={css.wrapper}>
      <img src={image.urls.small} alt={image.description} className={css.img} />
    </div>
  );
}
