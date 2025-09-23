export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  tastingNotes?: {
    aroma: string[];
    flavor: string[];
    body: string;
    acidity: string;
    finish: string;
  };
  carbonFootprintSaved?: number; // kg de CO2 ahorrados
  shippingOptions?: ShippingOption[];
}

export interface ShippingOption {
  company: string;
  isBCorp: boolean;
  deliveryTime: string;
  cost: number;
  description: string;
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
