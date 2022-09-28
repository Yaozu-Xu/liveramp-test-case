export type Folder = {
    name: string;
    id: string;
    subFolder: SubFolder[];
}

export type SubFolder = {
    name: string;
    sid: string;
    children: Conditions[]
}

export type Conditions = {
    displayName: string;
    cid: string;
}