import { IOrderDetail } from "./IOrder";
import { IShoppingCartItem } from "./IShop";

export interface IUser{
    firstName: string;
    lastName: string;
    email: string;
    pw: string;
    cart: IShoppingCartItem[];
    orders: IOrderDetail[];
    address: IUserAddress;
}

export interface IUserNew{
    firstName: string;
    lastName: string;
    email: string;
    pw: string;
    cart: IShoppingCartItem[];
    orders: IOrderDetail[];
    address: IUserAddress;
}

export interface IUserAddress{
    city: string;
    address1: string;
    address2: string;
    zip: string;
}

export interface ILoginUser{
    email: string;
    pw: string;
}
