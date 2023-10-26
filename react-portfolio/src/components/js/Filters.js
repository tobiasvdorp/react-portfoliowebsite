import React from "react";

function Filters({ setActiveFilters, activeFilters, open }) {
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

    const allButAllSelected = filterOptions
      .filter((opt) => opt !== "all")
      .every((opt) => newFilters.includes(opt));
    if (allButAllSelected) {
      newFilters = ["all"];
    }
    setActiveFilters(newFilters);
  };

  const filterOptions = ["all", "work", "school", "hobby"];

  return (
    <div className="filters-container">
      {filterOptions.map((filterType) => (
        <React.Fragment key={filterType} className="filters">
          <label
            className={
              activeFilters.includes(filterType)
                ? "button-selected"
                : "button-deselected"
            }
          >
            <input
              type="checkbox"
              value={filterType}
              checked={activeFilters.includes(filterType)}
              onChange={handleCheckboxChange}
              className="button "
            />
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}{" "}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Filters;
