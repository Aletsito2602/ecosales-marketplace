export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CoffeeOrigin {
  name: string;
  description: string;
}

export interface BrewingMethod {
  name: string;
  description: string;
}
