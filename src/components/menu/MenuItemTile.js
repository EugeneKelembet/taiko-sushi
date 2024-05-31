import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="p-4 rounded-lg text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/45 transition-all">
      <div className="text-center">
        <img src={image} className="max-h-auto max-h-24 block mx-auto" alt="sushi" />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">
        {description}
      </p>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}