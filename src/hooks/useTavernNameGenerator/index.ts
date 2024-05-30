import { useState } from 'react';
import {
  TavernNameOptions,
  TavernNameData,
  generateTavernName,
} from '../../helpers/generateTavernName/generateTavernName';

export const useTavernNameGenerator = (data: TavernNameData) => {
  const [name, setName] = useState(() => generateTavernName(data));

  const regenerateTavernName = (options: TavernNameOptions) =>
    setName(generateTavernName(data, options));

  return {
    name,
    regenerateTavernName,
  };
};
