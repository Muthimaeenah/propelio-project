import React, { useEffect, useState } from "react";
import "./Listing.css";
import { BsSearch } from "react-icons/bs";
import Footer from "../FooterComponent/Footer";
import ListingProp from "./ListingProp";
import listingvlogo from "../assets/frame 31.png";
import listingvuesaxlogo from "../assets/Vuesax.png";
import { fetchProperties } from "../api";

const Listing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = properties.filter((property) =>
      property.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="listing_container">
      <section className="intro">
        <h2>Properties for sale</h2>
        <div className="intro-box">
          <input
            type="search"
            name="listing"
            id="listing"
            placeholder="Search by location here..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <BsSearch className="searchbtn" />
        </div>
      </section>
      <section className="listing">
        <h2>Available Properties</h2>
        <div className="listing-project">
          {filteredProperties.map((property) => (
            <ListingProp
              key={property.id}
              image={property.mainImage}
              vlogo={listingvlogo}
              title={property.property_name}
              location={property.location}
              logo={listingvuesaxlogo}
              desc={property.amenities}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Listing;
