import { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Hotels = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("../../public/hotel.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data)
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="flex justify-center gap-7 items-center">
      <div className="w-1/2 my-5">
        {rooms.map((room) => (
          <div
            className="mb-4 flex gap-6 items-center hover:border-2"
            key={room.id}
          >
            <img
              className="w-[300px] h-[200px] rounded-lg"
              src={room.pictures}
              alt=""
            />
            <div>
              <h1 className="text-2xl font-bold mb-3">{room.name}</h1>
              <p className="text-base text-gray-500 mb-3">
                Available Rooms: {room.rooms}
              </p>
              <p className="me-8 mb-3">{room.roomFacility}</p>
              <div className="flex items-center mb-3">
              <Rating style={{ maxWidth: 120 }} value={room.rating} readOnly />
                <p className="ms-10 font-bold text-xl">{room.price}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2 rounded-md">
        <Map height={750} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
    </div>
  );
};

export default Hotels;
