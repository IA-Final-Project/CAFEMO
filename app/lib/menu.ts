import menuData from "@/app/dashboard/kiosk/menu.json";

export type MenuItem = {
  name: string;
  price: number;
};

export type BeverageGroup = {
  category: string;
  items: MenuItem[];
};

type MenuShape = {
  menu: {
    beverages: BeverageGroup[];
    food: MenuItem[];
    add_ons: MenuItem[];
  };
};

type MatchCandidate = {
  start: number;
  end: number;
  item: MenuItem;
  termLength: number;
};

const AVAILABLE_MENU_IMAGE_FILES = [
  "Hot-chocolate.png",
  "breakfast-burrito.png",
  "butter-croasaint.png",
  "cafe-latte.png",
  "capuccino.png",
  "extra-shot.png",
  "flavored-syrup.png",
  "grilled-ham-cheese-panini.png",
  "hot-americano.png",
  "iced-americano.png",
  "iced-latte.png",
  "peach-smoothie.png",
  "plant-based-milk.png",
] as const;

const IMAGE_FILE_BY_LOWER_NAME = AVAILABLE_MENU_IMAGE_FILES.reduce<
  Record<string, string>
>((accumulator, fileName) => {
  accumulator[fileName.toLowerCase()] = fileName;
  return accumulator;
}, {});

const IMAGE_ALIASES: Record<string, string> = {
  americano: "hot-americano.png",
  "caffe latte": "cafe-latte.png",
  cappuccino: "capuccino.png",
  "hot chocolate": "Hot-chocolate.png",
  "butter croissant": "butter-croasaint.png",
  "ham and cheese panini": "grilled-ham-cheese-panini.png",
};

const MATCH_ALIASES_BY_NORMALIZED_ITEM_NAME: Record<string, string[]> = {
  americano: ["hot americano"],
  "caffe latte": ["cafe latte"],
  cappuccino: ["capuccino"],
  "butter croissant": ["butter croasaint"],
  "plant-based milk": ["plant based milk"],
};

const typedMenuData = menuData as MenuShape;

export const beverages = typedMenuData.menu.beverages;
export const food = typedMenuData.menu.food;
export const addOns = typedMenuData.menu.add_ons;

const flattenedMenuItems = [
  ...beverages.flatMap((group) => group.items),
  ...food,
  ...addOns,
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function normalizeLabel(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toSlug(value: string) {
  return normalizeLabel(value).replace(/\s+/g, "-");
}

function hasOverlap(candidate: MatchCandidate, keptMatches: MatchCandidate[]) {
  return keptMatches.some(
    (kept) => candidate.start < kept.end && candidate.end > kept.start,
  );
}

function getMatchTermsForItem(item: MenuItem) {
  const normalizedName = normalizeLabel(item.name);
  const aliases = MATCH_ALIASES_BY_NORMALIZED_ITEM_NAME[normalizedName] ?? [];

  return Array.from(
    new Set([normalizedName, ...aliases.map((alias) => normalizeLabel(alias))]),
  ).filter((term) => term.length > 0);
}

export function resolveMenuImagePath(itemName: string) {
  const normalized = normalizeLabel(itemName);
  const aliasFile = IMAGE_ALIASES[normalized];

  if (aliasFile) {
    return `/menu/${aliasFile}`;
  }

  const slugFileKey = `${toSlug(itemName)}.png`.toLowerCase();
  const matchingFile = IMAGE_FILE_BY_LOWER_NAME[slugFileKey];
  if (matchingFile) {
    return `/menu/${matchingFile}`;
  }

  return null;
}

export function formatPrice(price: number) {
  return `₱${price.toFixed(2)}`;
}

export function findTopMatchedMenuItemsByAppearance(text: string, limit = 3) {
  const normalizedText = normalizeLabel(text);
  if (!normalizedText) {
    return [];
  }

  const candidates: MatchCandidate[] = [];

  for (const item of flattenedMenuItems) {
    const terms = getMatchTermsForItem(item);

    for (const term of terms) {
      const pattern = new RegExp(`(^| )${escapeRegExp(term)}(?= |$)`, "g");
      let result = pattern.exec(normalizedText);

      while (result) {
        const leadingSpaceLength = result[1]?.length ?? 0;
        const start = result.index + leadingSpaceLength;
        const end = start + term.length;

        candidates.push({
          start,
          end,
          item,
          termLength: term.length,
        });

        result = pattern.exec(normalizedText);
      }
    }
  }

  if (candidates.length === 0) {
    return [];
  }

  const dedupedBySpanAndItem = Array.from(
    new Map(
      candidates.map((candidate) => [
        `${candidate.start}:${candidate.end}:${normalizeLabel(candidate.item.name)}`,
        candidate,
      ]),
    ).values(),
  );

  const sortedCandidates = dedupedBySpanAndItem.sort((first, second) => {
    if (first.start !== second.start) {
      return first.start - second.start;
    }

    if (first.termLength !== second.termLength) {
      return second.termLength - first.termLength;
    }

    return first.item.name.localeCompare(second.item.name);
  });

  const acceptedMatches: MatchCandidate[] = [];

  for (const candidate of sortedCandidates) {
    if (hasOverlap(candidate, acceptedMatches)) {
      continue;
    }

    acceptedMatches.push(candidate);

    if (acceptedMatches.length >= limit) {
      break;
    }
  }

  return acceptedMatches.map((match) => match.item);
}
