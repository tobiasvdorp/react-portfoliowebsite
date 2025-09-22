import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";

export default function FilterButton({ openFilters }) {
  return (
    <>
      <button className="filter-icon button" onClick={openFilters}>
        <GiSettingsKnobs className="" />
      </button>
    </>
  );
}
