import Category from "../models/category";
import Categories from "../constants/Categories";
import Item from "../models/item";

const colors = [
  "#f5428d",
  "#f54242",
  "#f5a442",
  "#f5d142",
  "#368dff",
  "#41d95d",
  "#9eecff",
  "#b9ffb0",
  "#ffc7ff",
  "#47fced",
];

export const CATEGORIES = Object.keys(Categories).map((ctgKey, idx) => {
  return new Category(
    "c" + (idx + 1),
    Categories[ctgKey as keyof typeof Categories],
    colors[idx]
  );
});

export const ITEMS: Item[] = [
  new Item(
    "i1",
    ["c1", "c4"],
    "14 kt. Yellow gold - Ring",
    200,
    "Ring made of 14 kt. yellow gold, Width: 7.7 mm, Hallmark 585,Shipping Track and Trace.",
    "https://assets.catawiki.nl/assets/2021/9/1/8/d/e/8de163c9-ea11-47ef-bd35-408aa44b3755.jpg"
  ),
  new Item(
    "i2",
    ["c1", "c4"],
    "14 kt. Yellow gold - Ring",
    200,
    "Ring made of 14 kt. yellow gold, Width: 7.7 mm, Hallmark 585,Shipping Track and Trace.",
    "https://assets.catawiki.nl/assets/2021/9/1/8/d/e/8de163c9-ea11-47ef-bd35-408aa44b3755.jpg"
  ),
  new Item(
    "i3",
    ["c7", "c10"],
    "Portugal. República. 10 Escudos 1937 - Escassa",
    60,
    "Portugal. República - 10 Escudos 1937. Silver 0.835. Regular condition with expected oxidation - no significant wear.",
    "https://assets.catawiki.nl/assets/2021/10/16/7/c/c/7cc63412-e90b-414c-a9e9-c1b6ba13d60e.jpg"
  ),
];
