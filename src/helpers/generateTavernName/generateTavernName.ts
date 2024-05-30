import { randomNumberBetween } from '../randomNumberBetween';

export type TavernNameData = {
  adjectives: string[];
  nouns: string[];
  suffixes: string[];
};

export type TavernNameOptions = {
  includeSuffix?: boolean;
};

const DEFAULT_OPTIONS: TavernNameOptions = {
  includeSuffix: true,
};

export const generateTavernName = (
  { adjectives, nouns, suffixes }: TavernNameData,
  options: TavernNameOptions = DEFAULT_OPTIONS
) => {
  const adjective = adjectives[randomNumberBetween(0, adjectives.length - 1)];
  const noun = nouns[randomNumberBetween(0, nouns.length - 1)];
  const suffix = suffixes[randomNumberBetween(0, suffixes.length - 1)];

  if (options.includeSuffix) {
    return `The ${adjective} ${noun} ${suffix}`;
  }

  return `The ${adjective} ${noun}`;
};
