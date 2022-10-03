import { Folder } from '../model/folder'

export const folderMocksData: Folder[] = [
  {
    name: 'My Data',
    id: '1',
    subFolder: [
      {
        name: 'DeviceReach-ppid',
        sid: '1',
        children: [
          {
            displayName: 'Age',
            cid: 'age',
          },
          {
            displayName: 'Education',
            cid: 'education',
          },
          {
            displayName: 'Gender',
            cid: 'gender',
          },
          {
            displayName: 'AuditComposition',
            cid: 'Audit Composition',
          },
        ],
      },
    ],
  },
  {
    name: 'My Fruits',
    id: 'a',
    subFolder: [
      {
        name: 'Category',
        sid: 'b',
        children: [
          {
            displayName: 'Apple',
            cid: 'apple',
          },
          {
            displayName: 'Orange',
            cid: 'orange',
          },
          {
            displayName: 'Mango',
            cid: 'mango',
          },
          {
            displayName: 'Banana',
            cid: 'banana',
          },
        ],
      },
    ],
  },
]
