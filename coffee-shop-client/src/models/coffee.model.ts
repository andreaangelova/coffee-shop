export interface Coffee {
  id: string;
  name: string;
  image: string;
  coffee: number;
  milk: number;
  sugar: number;
  flavor: Flavor;
}

export enum Flavor {
  None = "none",
  Chocolate = "chocolate",
  Caramel = "caramel",
  Oreo = "oreo",
  Orange = "orange",
}