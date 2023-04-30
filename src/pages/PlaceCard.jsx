import { useLoaderData } from "react-router-dom";

const PlaceCard = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            this is place card
        </div>
    );
};

export default PlaceCard;