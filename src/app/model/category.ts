export type Category = {
    parenFolder: string;
    name: string;
    grandParentFolder: string;
    items: CategoryItem[];
}

export type CategoryItem = {
    type: string;
    count: number;
    selected?: boolean;
}