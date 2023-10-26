import React from "react";
import { GiSettingsKnobs } from "react-icons/gi/";

export default function FilterButton({ open, openFilters }) {
  return (
    <>
      <button className="filter-icon button" onClick={openFilters}>
        <GiSettingsKnobs className="" />
      </button>
    </>
  );
}
