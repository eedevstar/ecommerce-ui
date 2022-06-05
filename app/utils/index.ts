export const camelize = (str: string | undefined) => {
  if (typeof str == undefined) return "";

  return str
    .replace(/(?:^\w|[A-Za-z]|\b\w)/g, (word: string, index: number) => {
      return index !== 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const humanFileSize = (
  bytes: number,
  si: boolean | (() => boolean) = false,
  dp: (any | number | bigint) | (() => any | number | bigint) = 1
) => {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
};

export const PhotosFilterCategories = [
  {
    value: "people",
    label: "People",
  },
  {
    value: "premium",
    label: "Premium",
  },
  {
    value: "pets",
    label: "Pets",
  },
  {
    value: "food",
    label: "Food",
  },
  {
    value: "landmarks",
    label: "Landmarks",
  },
  {
    value: "cities",
    label: "Cities",
  },
  {
    value: "nature",
    label: "Nature",
  },
];

export const PhotosFilterPriceRanges = [
  {
    value: "0",
    min: 0,
    max: 19,
    label: "Lower than $20",
  },
  {
    value: "1",
    min: 20,
    max: 100,
    label: "$20 - $100",
  },
  {
    value: "2",
    min: 100,
    max: 200,
    label: "$100 - $200",
  },
  {
    value: "3",
    min: 201,
    max: Number.MAX_VALUE,
    label: "More than $200",
  },
];
