import { folderMocksData } from '../mocks/folder.mock';
import { categoryMockData } from '../mocks/category.mock';
import { SubFolderChild } from '../model/folder';

export const fetchFolders = () => 
    Promise.resolve(folderMocksData)

export const fetchCategories = (parmas: SubFolderChild[]) => 
    Promise.resolve(parmas.map((_) => categoryMockData[_.cid]))