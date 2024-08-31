import { useEffect, useState, FC } from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import { searchPhotos, Photo } from "../../photos-api";
import ImageModal from "../ImageModal/ImageModal";

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleImageClick = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage: number) => prevPage + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getPhotos = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await searchPhotos(query, page);
        setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPhotos();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery items={photos} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        imageUrl={selectedImageUrl}
      />
    </>
  );
};

export default App;
