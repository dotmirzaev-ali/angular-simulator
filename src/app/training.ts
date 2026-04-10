let uploadStatus: "loading" | "success" | "error";

let textFormat: "uppercase" | "lowercase" | "capitalize";

interface IUser {
    name: string;
    surname: string;
    email: string;
    age?: number;
    isMarried: boolean;
}

interface IEmployee extends IUser {
    role: string;
    salary: number;
}

function sum(a: number, b: number): number {
    return a + b;
}

type FormatType = "uppercase" | "lowercase" | "capitalize";

function formatText(text: string, format: FormatType): string {
    if (format === "uppercase") {
        return text.toUpperCase();
    } else if (format === "lowercase") {
        return text.toLowerCase();
    } else if (format === "capitalize") {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    } else {
        return text;
    }
}

function removeSymbol(text: string, symbol: string): string {
    return text.replaceAll(symbol, "");
}

const users: IUser[] = [
    {
        name: "Ali",
        surname: "Dotmirzaev",
        email: "ddd@mail.com",
        age: 33,
        isMarried: true
    },
    {
        name: "Vlad",
        surname: "Babenko",
        email: "vvv@gmail.com",
        age: 21,
        isMarried: false
    },
    {
        name: "Farukh",
        surname: "Safarov",
        email: "sss@gmail.com",
        isMarried: true
    }
]

const happyUser: IUser[] = users.filter((user: IUser): boolean => !user.isMarried);

happyUser.forEach((user: IUser) => {
    console.log(`Самый довольный тут: ${user.name}`);
});


