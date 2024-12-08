import Bookmark from '../../assets/food/Bookmark.svg';

const FoodItems = ({ data }) => {
  // Extract meal details for easier readability
  const meal = data?.meals?.[0];
  const mealName = meal?.strMeal || "Unknown Meal";
  const mealThumb = meal?.strMealThumb || "https://via.placeholder.com/150";

  return (
    <div className="w-full rounded-xl p-2 space-y-2 relative group overflow-hidden">
      {/* Image Container */}
      <div className="rounded-xl overflow-hidden h-96 relative">
        {/* Bookmark Icon */}
        <div className="absolute right-5 top-5 z-20">
          <img
            className="w-8 h-8 ring-1 rounded-full cursor-pointer transition-transform transform hover:scale-110"
            src={Bookmark}
            alt="Bookmark"
          />
        </div>
        {/* Meal Image */}
        <img
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
          src={mealThumb}
          alt={mealName}
        />
      </div>

      {/* Meal Name Overlay */}
      <div className="absolute z-10 w-full min-h-[25%] bottom-0 left-0 p-2 rounded-xl backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-all duration-500 shadow-inner shadow-slate-400 text-slate-100">
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">{mealName}</h2>
      </div>
    </div>
  );
};

export default FoodItems;
