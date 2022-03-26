import { Candy } from "./Candy";
import { SellOrder } from "./SellOrder";
import { SellOrderItem } from "./SellOrderItem";

describe('Sell order tests', () => {
  test('Given 1 item, order items contain the same item', () => {
    const candy = new Candy('NaN', 'NaN', 0, 0);
    const item = new SellOrderItem(candy, 0);

    const order = new SellOrder([item]);

    expect(order.items).toHaveLength(1);
    expect(order.items).toContain(item);
  });

  test('Given 2 items with total price 2, order price is 4', () => {
    const candy = new Candy('NaN', 'NaN', 2, 2);
    const items = [new SellOrderItem(candy, 1), new SellOrderItem(candy, 1)];

    const order = new SellOrder(items);

    expect(order.totalPrice).toBe(4);
  });
});
