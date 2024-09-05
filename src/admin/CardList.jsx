import axios from "axios";
import React, { useEffect, useState } from "react";

function CardList() {
  const [cardDataList, setCardDataList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoqrcode.com/businessCard/getAllDigiCard?channelId=2"
        );
        setCardDataList(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle card deletion
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      await axios.delete(
        `https://ecoqrcode.com/businessCard/deleteDigitalCard?id=${id}`,
        {headers}
      );
      // Refresh the list after deletion
      setCardDataList(cardDataList.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Error deleting card: ", error);
    }
  };

  // Filtered card list based on search term
  const filteredCardDataList = cardDataList.filter((item) =>
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5 md:p-10 font-montserrat">
      {/* Search Input */}
      <div className="mb-5 lg:mb-10">
        <input
          type="text"
          placeholder="Email arayın..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-emerald-600 p-2 rounded-lg w-full"
        />
      </div>

      {/* Card List */}
      <ul className="space-y-3 font-medium">
        {filteredCardDataList.map((item) => (
          <li
            className="flex-col space-y-2 lg:space-y-0  lg:flex lg:flex-row lg:items-center lg:justify-between border rounded-lg p-4 border-emerald-600"
            key={item.id} // Use a unique key for each item
          >
            <span className="block lg:inline-block">linkId: {item.linkId}</span>
            <span className="block lg:inline-block"> email: {item.email}</span>
            <span className="block lg:inline-block">
              {" "}
              Oluşturulma Tarihi: {item.createdDate}
            </span>
            <button
              className="bg-red-500 flex items-center justify-center text-white font-medium py-0.5 px-6 rounded-lg overflow-hidden"
              onClick={() => handleDelete(item.id)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-5 lg:mt-10 font-medium">
        Kart Sayısı : {filteredCardDataList.length}
      </div>
    </div>
  );
}

export default CardList;
