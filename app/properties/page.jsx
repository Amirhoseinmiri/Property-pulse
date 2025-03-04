import PropertyCard from "@/components/PropertyCard";
import Properties from "@/properties.json";
const PropertiesPage = () => {
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        {Properties.length === 0 ? (
          <p>No Items Found</p>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Properties.map((item) => (
              <PropertyCard property={item} key={item._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
