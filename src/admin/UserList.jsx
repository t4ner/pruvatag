import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const [userDataList, setUserDataList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoqrcode.com/api/auth/getAllUser?channelId=2"
        );
        setUserDataList(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  const filteredUserDataList = userDataList.filter((item) =>
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
        {filteredUserDataList.map((item) => (
          <li
            className="flex-col space-y-2 lg:space-y-0  lg:flex lg:flex-row lg:items-center lg:justify-between border rounded-lg p-4 border-emerald-600"
            key={item.id} // Use a unique key for each item
          >
            <span className="block lg:inline-block">Ad: {item.name}</span>
            <span className="block lg:inline-block">
              {" "}
              Soyad: {item.surname}
            </span>
            <span className="block lg:inline-block">
              {" "}
              Kullanıcı Adı: {item.username}
            </span>
            <span className="block lg:inline-block"> Email: {item.email}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 lg:mt-10 font-medium">
        Kullanıcı Sayısı : {userDataList.length}
      </div>
    </div>
  );
}

export default UserList;
