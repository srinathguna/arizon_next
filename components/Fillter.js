export default function Filter() {
  const filters = [
    {
      name: "Type Category",
      options: [
        { name: "Rod Mounted Fans", count: 859, selected: true },
        { name: "Hugger", count: 101, selected: false },
        { name: "Fandelier", count: 44, selected: false },
        { name: "Fan Motors", count: 3, selected: false },
        { name: "Dual Ceiling Fans", count: 2, selected: false }
      ]
    },
    {
      name: "Product Style",
      options: [
        { name: "Traditional", count: 141, selected: false },
        { name: "Modern", count: 138, selected: false },
        { name: "Contemporary", count: 118, selected: false },
        { name: "Transitional", count: 72, selected: false },
        { name: "Industrial", count: 25, selected: false },
        { name: "Modern Farmhouse", count: 24, selected: false },
        { name: "More", count: 13, selected: false }
      ]
    },
    {
      name: "Product Design",
      options: [
        { name: "Propeller", count: 64, selected: false },
        { name: "Shaded", count: 12, selected: false },
        { name: "Windmill", count: 12, selected: false },
        { name: "Hidden Bulb", count: 7, selected: false },
        { name: "Caged", count: 1, selected: false }
      ]
    },
    {
      name: "Light Kit Type",
      options: [
        { name: "Included", count: 859, selected: true },
        { name: "Integrated", count: 340, selected: false },
        { name: "Optional", count: 286, selected: false },
        { name: "Not Compatible", count: 204, selected: false },
        { name: "Integrated Uplight", count: 1, selected: false },
        { name: "Light Kit Not Included", count: 1, selected: false }
      ]
    }
  ];

  return (
    <div className="w-full md:w-1/4">
      <h1 className="text-black text-center border p-4 text-lg font-semibold">Filter Your Results</h1>
      {filters.map((filter, index) => (
        <div key={index} className="mb-4">
          <h3 className="border p-2 text-black font-semibold">{filter.name}</h3>
          <ul className="border px-3">
            {filter.options.map((option, id) => (
              <li key={id} className="flex items-center mb-2">
                <input
                    type="checkbox"
                    id={`filter-${index}-option-${id}`}
                    className="mr-2 text-black"
                    defaultChecked={option.selected}
                />
                <label htmlFor={`filter-${index}-option-${id}`} className="ms-2 text-sm font-medium text-gray-900">
                  <a href="#" className="text-black">{option.name} ({option.count})</a>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
      
  );
}
