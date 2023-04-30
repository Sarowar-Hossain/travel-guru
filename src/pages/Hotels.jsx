import { useEffect, useState } from "react";

const Hotels = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("../../public/hotel.json")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex">
      <div className="w-1/2">
        {rooms.map((room) => (
          <div className="mb-4 flex gap-6 items-center" key={room.id}>
            <img className="w-[300px] h-[200px]" src={room.pictures} alt="" />
            <div>
              <h1>{room.name}</h1>
              <p>{room.rooms}</p>
              <p>{room.roomFacility}</p>
              <div className="flex justify-between items-center">
                <p>{room.rating}</p>
                <p>{room.price}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2">

      </div>
    </div>
  );
};

export default Hotels;