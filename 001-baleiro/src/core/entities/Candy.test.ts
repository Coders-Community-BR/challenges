import { Candy } from "./Candy";

describe('Candy entity tests', () => {
  test('Given producer A, candy producer is A', () => {
    // Arrange
    const producer = 'A';

    // Act
    const candy = new Candy(producer, 'NaN', 0, 0);

    // Assert
    expect(candy.producer).toBe(producer);
  });

  test('Given name A, candy name is A', () => {
    // Arrange
    const name = 'A';

    // Act
    const candy = new Candy('NaN', name, 0, 0);

    // Assert
    expect(candy.name).toBe(name);
  });

  test('Given price 1, candy price is 1', () => {
    // Arrange
    const price = 1;

    // Act
    const candy = new Candy('NaN', 'NaN', price, 0);

    // Assert
    expect(candy.price).toBe(price);
  });

  test('Given availability 1, candy availability is 1', () => {
    // Arrange
    const availability = 1;

    // Act
    const candy = new Candy('NaN', 'NaN', 0, 1);

    // Assert
    expect(candy.availability).toBe(availability);
  });
});
