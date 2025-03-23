export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "pillows" | "beds" | "bedside-tables" | "sofas";
}

export interface ProductCategory {
  id: "pillows" | "beds" | "bedside-tables" | "sofas";
  name: string;
  description: string;
  products: Product[];
}
