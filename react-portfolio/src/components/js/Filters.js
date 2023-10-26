import React from "react";
import { useTranslation } from "react-i18next";

function Filters({ setActiveFilters, activeFilters, open }) {
  const { t } = useTranslation();
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
      .filter((opt) => opt.value !== "all")
      .every((opt) => newFilters.includes(opt.value));

    if (allButAllSelected) {
      newFilters = ["all"];
    }
    setActiveFilters(newFilters);
  };

  const filterOptions = [
    { label: t("all"), value: "all" },
    { label: t("work"), value: "work" },
    { label: t("school"), value: "school" },
    { label: t("hobby"), value: "hobby" },
  ];
  return (
    <div className="filters-container">
      {filterOptions.map((filterType) => (
        <React.Fragment key={filterType} className="filters">
          <label
            className={
              activeFilters.includes(filterType.value)
                ? "button-selected"
                : "button-deselected"
            }
          >
            <input
              type="checkbox"
              value={filterType.value}
              checked={activeFilters.includes(filterType.value)}
              onChange={handleCheckboxChange}
              className="button "
            />
            {filterType.label.charAt(0).toUpperCase() +
              filterType.label.slice(1)}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Filters;
