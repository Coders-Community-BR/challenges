export class Candy {
  public producer: string;
  public name: string;
  public price: number;
  public availability: number;

  constructor(producer: string, name: string, price: number, availability: number) {
    this.producer = producer;
    this.name = name;
    this.price = price;
    this.availability = availability;
  }
}
