import React from "react";
import { GiSettingsKnobs } from "react-icons/gi/";

export default function FilterButton({ open, handleClick }) {
  return (
    <>
      <button className="filter-icon button" onClick={handleClick}>
        <GiSettingsKnobs className="" />
      </button>
    </>
  );
}
