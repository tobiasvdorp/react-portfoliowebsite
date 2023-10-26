import React from "react";

function Filters({ setActiveFilters, activeFilters }) {
  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    let newFilters = [...activeFilters];

    if (value === "all") {
      // If 'all' is checked, deselect all other filters
      newFilters = ["all"];
    } else {
      // Remove 'all' if another filter is selected
      newFilters = newFilters.filter((filter) => filter !== "all");
      if (e.target.checked) {
        // Add the selected filter
        newFilters.push(value);
      } else {
        // Remove the deselected filter
        newFilters = newFilters.filter((filter) => filter !== value);
      }
    }

    setActiveFilters(newFilters);
  };

  const filterOptions = ["all", "work", "school", "hobby"];

  return (
    <div>
      {filterOptions.map((filter) => (
        <React.Fragment key={filter}>
          <label className="button">
            <input
              type="checkbox"
              value={filter}
              checked={activeFilters.includes(filter)}
              onChange={handleCheckboxChange}
              className="button"
            />
            {filter.charAt(0).toUpperCase() + filter.slice(1)}{" "}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Filters;
