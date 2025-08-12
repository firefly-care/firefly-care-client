import { useState } from "react";

export function useFilter<T extends string>(initial: T) {
  const [selected, setSelected] = useState<T>(initial);

  const handleSelect = (value: T) => {
    setSelected(value);
  };

  return {
    selected,
    setSelected: handleSelect,
  };
}
