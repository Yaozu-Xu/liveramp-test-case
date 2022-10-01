import { folderMocksData } from '../mocks/folder.mock';

export const fetchFolders = () => 
    Promise.resolve(folderMocksData)

export const fetchSubFolderChild = (cid: string) => 
    Promise.resolve()