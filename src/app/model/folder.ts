export type Folder = {
    name: string;
    id: string;
    subFolder: SubFolder[];
    collapse?: boolean;
}

export type SubFolder = {
    name: string;
    sid: string;
    children: Conditions[];
    collapse?: boolean;
}

export type Conditions = {
    displayName: string;
    cid: string;
}