import { SellOrderItem } from "../entities/SellOrderItem";

export class SellValidator {
  public static validate(sellItem: SellOrderItem): void {
    if(sellItem.quantity > sellItem.candy.availability) {
      throw Error('Order quantity must be less or equal product availability.');
    }
  }
}
