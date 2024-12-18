import { IMenu } from "./IMenu";

export interface IMenuList {
    category_name: string | null,
    items: IMenu[];
}