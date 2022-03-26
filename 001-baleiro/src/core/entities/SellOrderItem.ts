import { SellValidator } from "../validators/SellValidator";
import { Candy } from "./Candy";


export class SellOrderItem {
  public candy: Candy;
  public quantity: number;
  public totalPrice: number;

  constructor(candy: Candy, quantity: number) {
    this.candy = candy;
    this.quantity = quantity;
    this.totalPrice = this.getTotal();
    SellValidator.validate(this);
    candy.availability -= this.quantity;
  }

  private getTotal(): number {
    return this.candy.price * this.quantity;
  }
}
