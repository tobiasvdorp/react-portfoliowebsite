'use client';

import { GiSettingsKnobs } from 'react-icons/gi';
import { iconButtonClasses } from '@/lib/styles';

type FilterButtonProps = {
  onToggle: () => void;
};

const FilterButton = ({ onToggle }: FilterButtonProps) => (
  <button className={`${iconButtonClasses} text-3xl`} onClick={onToggle} type="button" aria-label="Toggle project filters">
    <GiSettingsKnobs />
  </button>
);

export default FilterButton;
