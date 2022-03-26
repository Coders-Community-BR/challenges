import { Candy } from "./Candy";
import { SellOrderItem } from "./SellOrderItem";

describe('Sell Order Item tests', () => {
  test('Given a candy, item candy is the same', () => {
    // Arrange
    const candy = new Candy('NaN', 'NaN', 0, 0);

    // Act
    const item = new SellOrderItem(candy, 0);
    
    // Assert
    expect(item.candy).toBe(candy);
  });
  
  test('Given quantity 1, item quantity is 1', () => {
    // Arrange
    const quantity = 1;
    const candy = new Candy('NaN', 'NaN', 0, 1);
    
    // Act
    const item = new SellOrderItem(candy, quantity);

    // Assert
    expect(item.quantity).toBe(quantity);
  });

  test('Given a candy with price 2 and quantity 2, total price is 4',() => {
    // Arrange
    const candy = new Candy('NaN', 'NaN', 2, 2);

    // Act
    const item = new SellOrderItem(candy, 2);

    // Assert
    expect(item.totalPrice).toBe(4);
  });

  test('Given a candy with availability 0, item with quantity 1 throws error', () => {
    // Arrange
    const candy = new Candy('NaN', 'NaN', 0, 0);
    const itemCreation = () => new SellOrderItem(candy, 1);

    // Act
    // Assert
    expect(itemCreation).toThrowError();
  });

  test('Item creation decreases candy availability', () => {
    // Arrange
    const availability = 1;
    const candy = new Candy('NaN', 'NaN', 0, availability);

    // Act
    new SellOrderItem(candy, 1);

    // Assert
    expect(candy.availability).toBe(availability - 1);
  });
});
