import css from "./LoadMoreBtn.module.css";
import { JSX } from "react";

interface Props {
  onLoad: () => void;
}

export default function LoadMoreBtn({ onLoad }: Props): JSX.Element {
  return (
    <div>
      <button type="button" className={css.btn} onClick={() => onLoad()}>
        Load more
      </button>
    </div>
  );
}
