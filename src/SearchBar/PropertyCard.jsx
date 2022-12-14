import { Link } from "react-router-dom";

const PropertyCard = (props) => {

  return (
    <div className="bg-black-gradient rounded-[30px] rounded-tr-none hover:scale-105  cursor-pointer duration-300 pb-2 max-w-[330px]">
      <div className="w-full h-60 rounded-[30px] rounded-tr-none  overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={props.house}
          alt="property-img"
        />
      </div>
      <div className="px-6 pb-4 pt-2">
        <div className="flex justify-between">
          <p className="">{props.price}</p>
          <div className="flex ">
            
            {props.addToWishList}
            {props.editButton}
            {props.deleteButton}
            <div className="flex gap-2">
                <Link
              to=""
                className="rounded px-1 py-0 hover:bg-purple-700 transition-300"
              >
                View
              </Link>
              {props.edit}
              {props.delete}
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <p>{props.location}</p>
          <p>{props.propertyType}</p>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
