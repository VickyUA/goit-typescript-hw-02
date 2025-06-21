import { useState, useEffect } from "react";
import css from "./App.module.css";
import { Toaster } from "react-hot-toast";
import SearchBar from "../searchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { ScaleLoader } from "react-spinners";
import { fetchImages } from "../../images-api";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  function openModal(img) {
    setIsOpen(true);
    setModalImage(img);
  }

  function closeModal() {
    setIsOpen(false);
    setModalImage(null);
  }

  const handleSearch = (newTopic) => {
    setImages([]);
    setTopic(newTopic);
    setCurrentPage(1);
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }

    const fetchInfo = async (topic, currentPage) => {
      try {
        setLoading(true);

        const fetchedImages = await fetchImages(topic, currentPage);

        setTotalPages(fetchedImages.data.total_pages);

        setImages((prevState) => {
          return [...prevState, ...fetchedImages.data.results];
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchInfo(topic, currentPage);
  }, [topic, currentPage]);

  return (
    <div className={css.appWrapper}>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} isOpen={openModal} />}
      {loading && (
        <ScaleLoader
          barCount={10}
          color="#4244da"
          height={20}
          margin={5}
          radius={7}
          speedMultiplier={1.5}
          width={10}
        />
      )}
      {images.length > 0 && currentPage !== totalPages && (
        <LoadMoreBtn onLoad={incrementPage} />
      )}

      <ImageModal
        image={modalImage}
        isOpen={modalIsOpen}
        onClose={closeModal}
      />
    </div>
  );
}
