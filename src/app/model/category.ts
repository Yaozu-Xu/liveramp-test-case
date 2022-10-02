export type Category = {
    parenFolder: string;
    displayName: string;
    cid: string;
    grandParentFolder: string;
    items: CategoryItem[];
}

export type CategoryItem = {
    type: string;
    count: number;
    selected?: boolean;
}