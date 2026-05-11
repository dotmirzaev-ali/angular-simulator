export class Collection<T> {

    private items: T[] = [];

    constructor(items: T[]) {
        this.items = items;
    }

    getAll(): T[] {
        return this.items;
    }

    getItem(index: number): T {
        return this.items[index];
    }

    clear(): void {
        this.items = [];
    }

    deleteItem(index: number): void {
        this.items.splice(index, 1);
    }

    replaceItem(index: number, newItem: T): void {
        this.items[index] = newItem;
    }
}

interface IUser {
    id: number;
    name: string;
    city: string;
}

interface ITour {
    id: number;
    name: string;
    price: number;
}

const users = new Collection<IUser>([
    { id: 1, name: "Ali", city: "Kulmbach" },
    { id: 2, name: "Vlad", city: "Odessa" },
    { id: 3, name: "Farukh", city: "Tyumen" },
]);
const tours = new Collection<ITour>([
    { id: 1, name: "Тибет", price: 50000 },
    { id: 2, name: "Алтай", price: 30000 },
    { id: 3, name: "Кавказ", price: 40000 },
]);