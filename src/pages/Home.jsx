import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import '../components/search.jsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [smartphones, setSmartphones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [tvs, setTvs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('../../db.json');
        setSmartphones(response.data.smartphones);
        setLaptops(response.data.laptops);
        setTvs(response.data.tvs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBuyClick = () => {
    navigate('/purchase');
  };

  const renderTable = (items) => {
    return (
      <table className="item-table">
        <tbody>
          <tr>
            {items.slice(0, 2).map((item, index) => (
              <td key={index}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Description: {item.description}</p>
                <input
                  type="button"
                  value=" BUY "
                  onClick={handleBuyClick}
                />
              </td>
            ))}
          </tr>
          <tr>
            {items.slice(2, 4).map((item, index) => (
              <td key={index}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Description: {item.description}</p>
                <input
                  type="button"
                  value="BUY"
                  onClick={handleBuyClick}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div>
      {renderTable(smartphones)}
      {renderTable(laptops)}
      {renderTable(tvs)}
    </div>
  );
};

export default Home;