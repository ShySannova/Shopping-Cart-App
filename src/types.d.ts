export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    details: string;
    quantity?: number;
};

export type Products = Product[];
