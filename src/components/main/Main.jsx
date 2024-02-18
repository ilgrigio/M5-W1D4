import Welcome from "../welcome/Welcome";
// import Cards from "../cards/AllTheBooks";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Searchbar from "../searchbar/Searchbar";
import AllTheBooks from "../cards/AllTheBooks";
import axios from 'axios';

const Main = () => {
  const [data, setData] = useState([]);
  const[filteredData, setFilteredData] = useState([])

  const url = "https://epibooks.onrender.com/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data)
          setFilteredData(response.data)
      } else {
        console.error(response.status);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }
    fetchData();
  }, []);

const handleSearch = (searchTerm) => {
  const filtered = data.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);
setFilteredData(filtered);
};

  return (
    <Container>
      <Welcome />
      <Searchbar handleSearch={handleSearch}/>
      <AllTheBooks bookData={filteredData} />
    </Container>
  );
};
export default Main;
