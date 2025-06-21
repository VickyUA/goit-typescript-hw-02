import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoad }) {
  return (
    <div>
      <button type="button" className={css.btn} onClick={() => onLoad()}>
        Load more
      </button>
    </div>
  );
}
