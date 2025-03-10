import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    product: "Coca-Cola",
    company: "Coca-Cola Company",
    country: "🇺🇸",
    alternatives: [
      { product: "Fritz-Kola", company: "fritz-kola GmbH", country: "🇩🇪" },
      {
        product: "Afri-Cola",
        company: "Mineralbrunnen Überkingen",
        country: "🇩🇪",
      },
    ],
  },
  {
    id: 2,
    product: "Pepsi",
    company: "PepsiCo",
    country: "🇺🇸",
    alternatives: [
      { product: "Spezi", company: "Brauhaus Riegele", country: "🇩🇪" },
      { product: "Vita Cola", company: "Thüringer Waldquell", country: "🇩🇪" },
    ],
  },
  {
    id: 3,
    product: "Hershey's Chocolate",
    company: "The Hershey Company",
    country: "🇺🇸",
    alternatives: [
      { product: "Ritter Sport", company: "Alfred Ritter GmbH", country: "🇩🇪" },
    ],
  },
  {
    id: 4,
    product: "Lay's Chips",
    company: "Frito-Lay",
    country: "🇺🇸",
    alternatives: [
      { product: "Chio Chips", company: "Intersnack", country: "🇩🇪" },
      { product: "Funny-Frisch", company: "Intersnack", country: "🇩🇪" },
    ],
  },
  {
    id: 5,
    product: "Budweiser",
    company: "Anheuser-Busch",
    country: "🇺🇸",
    alternatives: [
      { product: "Beck's", company: "Brauerei Beck & Co", country: "🇩🇪" },
      { product: "Pilsner Urquell", company: "SABMiller", country: "🇨🇿" },
    ],
  },
  {
    id: 6,
    product: "Kraft Mac & Cheese",
    company: "Kraft Heinz",
    country: "🇺🇸",
    alternatives: [
      { product: "Knorr Spaghetteria", company: "Unilever", country: "🇩🇪" },
      { product: "Maggi Fix & Frisch", company: "Nestlé", country: "🇩🇪" },
    ],
  },
  {
    id: 7,
    product: "Reese's Peanut Butter Cups",
    company: "The Hershey Company",
    country: "🇺🇸",
    alternatives: [
      {
        product: "Schogetten Peanut",
        company: "Ludwig Schokolade",
        country: "de",
      },
      { product: "Alto Peanut Caramel", company: "Mars", country: "🇬🇧" },
    ],
  },
  {
    id: 8,
    product: "Mountain Dew",
    company: "PepsiCo",
    country: "🇺🇸",
    alternatives: [
      { product: "Sprite", company: "Coca-Cola Company", country: "🇩🇪" },
      { product: "Fanta", company: "Coca-Cola Company", country: "🇩🇪" },
    ],
  },
  {
    id: 9,
    product: "Colgate Toothpaste",
    company: "Colgate-Palmolive",
    country: "🇺🇸",
    alternatives: [
      { product: "Elmex", company: "GABA", country: "ch" },
      { product: "Blend-a-Med", company: "Procter & Gamble", country: "🇩🇪" },
    ],
  },
  {
    id: 10,
    product: "Cheetos",
    company: "Frito-Lay",
    country: "🇺🇸",
    alternatives: [
      { product: "Pombären", company: "Intersnack", country: "🇩🇪" },
      { product: "Curly", company: "Lorenz Snack-World", country: "🇩🇪" },
    ],
  },
];
