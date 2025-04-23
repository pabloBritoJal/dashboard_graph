import React, { useRef, useState } from "react";
import { filters } from "../data/filters_clean";
import DropdownSelector from "../../../components/DropdownSelector";
import { FilterInput } from "../types/filterInputType";

const FilterPanel = ({
  setFilters,
}: {
  setFilters: (filters: FilterInput) => void;
}) => {
  const [formData, setFormData] = useState<FilterInput>({});

  const [errorBasics, setErrorBasics] = useState(false);

  const lastSubmittedDataRef = useRef<FilterInput>({});

  const handleChange = (field: keyof FilterInput, value: string | number) => {
    if (value === "" || value === 0) {
      setFormData((prev) => {
        const newForm = { ...prev };
        delete newForm[field];
        return newForm;
      });
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const keysArray = Object.keys(formData);
    const filtersArray = ["year"];
    const includeBasicFilters = filtersArray.every((item) =>
      keysArray.includes(item)
    );

    if (!includeBasicFilters) {
      setErrorBasics(true);
      return;
    } else {
      setErrorBasics(false);
    }

    const currentDataStr = JSON.stringify(formData);
    const lastDataStr = JSON.stringify(lastSubmittedDataRef.current);
    if (currentDataStr === lastDataStr) return;
    lastSubmittedDataRef.current = formData;
    if (keysArray.length === 0) return;
    setFilters(formData);
  };

  return (
    <div className="absolute top-0 right-0 z-40">
      <div className="relative">
        <form onSubmit={handleSubmit} className="p-1">
          <div className="flex flex-row space-x-1">
            <DropdownSelector
              optionName="Year"
              optionsList={filters.year}
              onSelect={(value) => handleChange("year", Number(value))}
              selectedOption={formData.year || 0}
              isOnError={errorBasics && !formData.year}
              isSmall
            />
            <DropdownSelector
              optionName="Make"
              optionsList={filters.make}
              onSelect={(value) => handleChange("make", value)}
              selectedOption={formData.make || ""}
              isOnError={errorBasics && !formData.make}
            />

            <DropdownSelector
              optionName="Model"
              optionsList={filters.model}
              onSelect={(value) => handleChange("model", value)}
              selectedOption={formData.model || ""}
              isOnError={errorBasics && !formData.model}
            />
            <div className="flex justify-center items-end">
              <button
                className="h-8 px-2 font-medium rounded-xl text-center text-xs shadow-xl inline-block text-cyan-700 bg-gray-200/75 active:bg-cyan-600 active:text-white cursor-pointer"
                onClick={handleSubmit}
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPanel;
