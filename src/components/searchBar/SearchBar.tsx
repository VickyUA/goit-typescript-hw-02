import React from "react";
import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      searchQuery: HTMLInputElement;
    };

    const value = formElements.searchQuery.value.trim();

    if (value === "") {
      toast.error("Please enter search value");
      return;
    }
    onSearch(value);
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.btn}>
            <IoSearch className={css.reactIcons} size="20" />
          </button>
        </form>
      </header>
    </div>
  );
}
