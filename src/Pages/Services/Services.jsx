import { useContext, useState } from "react";
import "./Services.css";
import ServicesTab from "../../Components/ServicesTab/ServicesTab";
import Service from "../../Components/Service/Service";
import { Context } from "../../Providers/PamperContext";
import { IoMdClose } from "react-icons/io";

const parlors = ["Reflextion Beauty Parlour"];

const Services = () => {
  const { services } = useContext(Context);
  const [selectedParlor, setSelectedParlor] = useState(parlors[0]);
  const [selectedTab, setSelectedTab] = useState(null);
  const [images, setImages] = useState({ images: [], selectedImage: "" });

  // const filteredServices = services?.filter(
  //   (service) =>
  //     (!selectedTab || service?.category === selectedTab) &&
  //     (service?.provider || "Reflextion") === selectedParlor
  // );
  const filteredServices = services?.filter(
    (service) => !selectedTab || service?.category === selectedTab
  );
  // Pagination setup
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="services">
      <div className="servicesBanner"></div>

      <ServicesTab
        services={services}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        name="services"
      />

      <div className="services-header">
        <h2>Explore Our Exclusive Beauty Services</h2>
        <div className="parlor-dropdown">
          <label htmlFor="parlor">Choose Your Parlor</label>
          <select
            id="parlor"
            value={selectedParlor}
            onChange={(e) => setSelectedParlor(e.target.value)}
          >
            {parlors.map((parlor) => (
              <option key={parlor} value={parlor}>
                {parlor}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="service-container">
        {paginatedServices.map((service) => (
          <Service key={service.name} service={service} setImages={setImages} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-btn nav"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>

        {Array.from({ length: totalPages }, (_, idx) => idx + 1)
          .filter(
            (page) =>
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
          )
          .map((page, i, arr) => {
            const isSkipped = i > 0 && page - arr[i - 1] > 1;
            return (
              <>
                {isSkipped && <span className="pagination-ellipsis">...</span>}
                <button
                  key={page}
                  className={`pagination-btn ${
                    currentPage === page ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              </>
            );
          })}

        <button
          className="pagination-btn nav"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>

      {/* Image Modal */}
      {images.images?.length > 0 && (
        <div
          className="service-images"
          onClick={() => setImages({ ...images, images: [] })}
        >
          <button className="close-button">
            <IoMdClose />
          </button>
          <div
            className="service-images-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="image-fullSize">
              <img src={images?.selectedImage} alt="" />
            </div>
            <div className="images">
              {images?.images?.slice(1, 5)?.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt=""
                  onClick={() =>
                    setImages({ ...images, selectedImage: image.src })
                  }
                  className={
                    image.src === images.selectedImage ? "selected-image" : ""
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
