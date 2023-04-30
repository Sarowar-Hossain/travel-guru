import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header";

const PlaceCard = () => {
  const data = useLoaderData();
  console.log(data);
  const { name, image_url, description } = data;
  return (
    <div
      style={{ backgroundImage: `url(${image_url})` }}
      className={"w-screen h-screen bg-no-repeat bg-cover bg-center"}
    >
      <div className="container mx-auto">
        <Header></Header>

        <div className="grid grid-flow-col gap-12 items-center mx-auto mt-[10%]">
          <div className="text-white font-extrabold text-6xl">
            <h1 className="text-white font-extrabold text-6xl">{name}</h1>
            <p className="text-white text-xl font-normal mt-10">
              {description}
            </p>
          </div>
          <div className="w-[500px] h-[400px] bg-white rounded-md">
            <form className="px-8 py-10">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Origin
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F2F2F2] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="from"
                  id=""
                  placeholder="New York"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Destination
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F2F2F2] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="to"
                  id=""
                  placeholder="London"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    From
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F2F2F2] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="date"
                    name="date1"
                    id=""
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    To
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#F2F2F2] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="date"
                    name="date1"
                    id=""
                    placeholder="London"
                    required
                  />
                </div>
              </div>
              <button className="w-full bg-orange-500 font-bold text-2xl rounded-md mt-5 py-4 text-white">
                Start Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
