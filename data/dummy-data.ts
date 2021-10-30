import Category from "../models/category";
import Item from "../models/item";

export const CATEGORIES = [
  new Category("c1", "Italian", "#f5428d"),
  new Category("c2", "Quick & Easy", "#f54242"),
  new Category("c3", "Hamburgers", "#f5a442"),
  new Category("c4", "German", "#f5d142"),
  new Category("c5", "Light & Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
  new Category("c7", "Breakfast", "#9eecff"),
  new Category("c8", "Asian", "#b9ffb0"),
  new Category("c9", "French", "#ffc7ff"),
  new Category("c10", "Summer", "#47fced"),
];

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
