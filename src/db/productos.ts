import type { Productos } from "../types/productos.ts";

let products: Productos[] = [
  {
    name: "Escudo",
    id: 0,
    price: 3377,
    thumbnail:
      "https://thumbs.dreamstime.com/b/escudo-de-oro-del-metal-aislado-44256777.jpg",
  },
  {
    name: "Espada",
    id: 1,
    price: 4999,
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0478/9073/products/Excalibur_Full_Finished_455x455.jpg?v=1571269167",
  },
  {
    name: "Lanza",
    id: 2,
    price: 4650,
    thumbnail:
      "https://m.media-amazon.com/images/I/31JhTDklAeL._AC_SY1000_.jpg",
  },
];

export const getAll = (): Productos[] => {
  return products;
};

export const getById = (id: number): Productos | undefined => {
  return products.find((p) => p.id === id);
};

export const save = (product: Productos): Productos => {
  const lastId = products[products.length - 1].id! + 1;
  products.push({ ...product, id: lastId });
  return product;
};

export const updateById = (id: number, updatedProduct: Productos): string => {
  const product = products.find((p) => p.id === id);
  if (product != undefined) {
    const indexOfSearchedProduct = products.indexOf(product);
    products[indexOfSearchedProduct] = { ...updatedProduct, id };
    return "Update successful";
  }
  return "Error while updating the product";
};

export const deleteById = (id: number): string => {
  try {
    products = products.filter((p) => p.id !== id);
    return "Delete successful";
  } catch (err) {
    return `Error deleting the desired product:${err}`;
  }
};
