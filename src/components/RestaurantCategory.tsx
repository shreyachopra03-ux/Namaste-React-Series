import ListItem from "./ListItem";

type Props = {
    data: any;
};

const RestaurantCategory= ({ data }:Props) => {
    console.log(data);
    return (
         <div>
            {/* Header */}
        <div className="m-auto w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between">
            <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
            <span>⬇️</span>
        </div>
            
            {/* Accordion Body */}
            <ListItem items={data?.itemCards || []} />
        </div>
         </div>

    );
};
export default RestaurantCategory;