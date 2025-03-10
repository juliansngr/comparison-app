export interface Product {
  id: number;
  product: string;
  company: string;
  country: string;
  alternatives: {
    product: string;
    company: string;
    country: string;
  }[];
}
