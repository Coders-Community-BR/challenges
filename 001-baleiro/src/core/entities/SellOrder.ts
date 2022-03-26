import { SellOrderItem } from "./SellOrderItem";

export class SellOrder {
  public items: SellOrderItem[];
  public totalPrice: number;

  constructor(items: SellOrderItem[]) {
    this.items = items;
    this.totalPrice = this.getTotalPrice();
  }

  private getTotalPrice(): number {
    return this.items.reduce((sum, current) => sum + current.totalPrice, 0);
  }
}
