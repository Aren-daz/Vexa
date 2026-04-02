export interface Product {
    id: string;
    name: string;
    brand: string;
    category: 'sneakers' | 'fripe';
    size: string;
    price: number;
    condition: 'Neuf' | 'Très bon état' | 'Bon état';
    image: string;
    stock: number;
    sold?: boolean;
}

export const products: Product[] = [
    {
        id: '001',
        name: 'Air Jordan 1 High OG',
        brand: 'Nike',
        category: 'sneakers',
        size: 'EU 42',
        price: 280,
        condition: 'Très bon état',
        stock: 1,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '002',
        name: 'Yeezy 350 V2 Zebra',
        brand: 'Adidas',
        category: 'sneakers',
        size: 'EU 44',
        price: 320,
        condition: 'Neuf',
        stock: 2,
        image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '003',
        name: 'Veste Carhartt Detroit',
        brand: 'Carhartt',
        category: 'fripe',
        size: 'L',
        price: 95,
        condition: 'Bon état',
        stock: 1,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '004',
        name: 'New Balance 550',
        brand: 'New Balance',
        category: 'sneakers',
        size: 'EU 41',
        price: 160,
        condition: 'Très bon état',
        stock: 3,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '005',
        name: 'Hoodie Champion Vintage',
        brand: 'Champion',
        category: 'fripe',
        size: 'XL',
        price: 45,
        condition: 'Bon état',
        stock: 2,
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '006',
        name: 'Nike Dunk Low Panda',
        brand: 'Nike',
        category: 'sneakers',
        size: 'EU 43',
        price: 210,
        condition: 'Neuf',
        stock: 1,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '007',
        name: 'Bomber Schott NYC',
        brand: 'Schott',
        category: 'fripe',
        size: 'M',
        price: 130,
        condition: 'Très bon état',
        stock: 1,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '008',
        name: 'Salomon XT-6',
        brand: 'Salomon',
        category: 'sneakers',
        size: 'EU 42',
        price: 240,
        condition: 'Très bon état',
        stock: 0,
        sold: true,
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '009',
        name: "Jeans Levi's 501 Vintage",
        brand: "Levi's",
        category: 'fripe',
        size: 'W32 L30',
        price: 60,
        condition: 'Bon état',
        stock: 2,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: '010',
        name: 'Air Force 1 Low White',
        brand: 'Nike',
        category: 'sneakers',
        size: 'EU 44',
        price: 125,
        condition: 'Neuf',
        stock: 3,
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
    },
];
