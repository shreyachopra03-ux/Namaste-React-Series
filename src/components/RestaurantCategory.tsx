type Props = {
    data: any;
};

const RestaurantCategory= ({ data }:Props) => {
    console.log(data)
    return (
         <div>
            {/* Header */}
        <div className="m-auto w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
            <span>{data.title}</span>
            <span>⬇️</span>
        </div>
            {/* Accordion Body */}
         </div>

    );
};
export default RestaurantCategory;