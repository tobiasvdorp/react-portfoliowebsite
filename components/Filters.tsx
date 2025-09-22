'use client';

import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export type ProjectCategory = 'all' | 'work' | 'school' | 'hobby';

type FiltersProps = {
  activeFilters: ProjectCategory[];
  setActiveFilters: (filters: ProjectCategory[]) => void;
};

const Filters = ({ activeFilters, setActiveFilters }: FiltersProps) => {
  const { t } = useTranslation();

  const filterOptions: Array<{ label: string; value: ProjectCategory }> = [
    { label: t('all'), value: 'all' },
    { label: t('work'), value: 'work' },
    { label: t('school'), value: 'school' },
    { label: t('hobby'), value: 'hobby' },
  ];

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let newFilters = [...activeFilters];

    if (value === 'all') {
      newFilters = ['all'];
    } else {
      newFilters = newFilters.filter((filter) => filter !== 'all');
      if (checked) {
        newFilters.push(value as ProjectCategory);
      } else {
        newFilters = newFilters.filter((filter) => filter !== value);
      }
    }

    const allButAllSelected = filterOptions
      .filter((option) => option.value !== 'all')
      .every((option) => newFilters.includes(option.value));

    if (allButAllSelected) {
      newFilters = ['all'];
    }

    setActiveFilters(newFilters);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {filterOptions.map(({ label, value }) => {
        const isActive = activeFilters.includes(value);
        return (
          <label
            key={value}
            className={`inline-flex cursor-pointer items-center gap-3 rounded-md border-2 px-4 py-2 font-heading text-lg transition-all duration-200 ${
              isActive
                ? 'border-transparent bg-accent text-black shadow-[0_0_10px_1px_var(--accent)]'
                : 'border-accent/60 bg-secondary text-white hover:border-accent hover:shadow-[0_0_10px_1px_var(--accent)]'
            } ${isActive ? 'scale-[1.05]' : ''}`}
          >
            <input
              type="checkbox"
              value={value}
              checked={isActive}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </label>
        );
      })}
    </div>
  );
};

export default Filters;
