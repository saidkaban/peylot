
export class Item {
  id: string;
  categoryIds: string[];
  title: string;
  currentPrice: number;
  description: string;
  imageUrl: string;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    currentPrice: number,
    description: string,
    imageUrl: string
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.currentPrice = currentPrice;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

export default Item;
