export type Folder = {
    name: string;
    id: string;
    subFolder: SubFolder[];
    collapse?: boolean;
}

export type SubFolder = {
    name: string;
    sid: string;
    children: SubFolderChild[];
    collapse?: boolean;
}

export type SubFolderChild = {
    displayName: string;
    cid: string;
}

export interface GroupMap {
    [key: string]: SubFolderChild[];
 } 