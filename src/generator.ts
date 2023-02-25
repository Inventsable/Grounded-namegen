import prefix from "./generator/prefix.json";
import suffix from "./generator/suffix.json";
import flavors from "./generator/flavors.json";

export const generateName = (useCrayola: boolean): string => {
  return capitalize(
    `${getRandom(prefix)} ${getRandom(flavors)} ${getRandom(suffix)}`
  );
};

function capitalize(string: string): string {
  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

function getRandom(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}
