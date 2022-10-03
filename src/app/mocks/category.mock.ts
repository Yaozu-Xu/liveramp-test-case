import { Category } from '../model/category'

export const categoryMockData: { [_: string]: Category } = {
  education: {
    parenFolder: 'DeviceReach-ppid',
    displayName: 'Education',
    cid: 'education',
    grandParentFolder: 'My Data',
    items: [
      {
        type: 'Colleage',
        count: 362,
      },
      {
        type: 'Graduate',
        count: 352,
      },
      {
        type: 'High School',
        count: 260,
      },
      {
        type: 'Others',
        count: 280,
      },
      {
        type: 'PHD',
        count: 270,
      },
      {
        type: 'University',
        count: 469,
      },
    ],
  },
  gender: {
    displayName: 'Gender',
    cid: 'gender',
    parenFolder: 'DeviceReach-ppid',
    grandParentFolder: 'My Data',
    items: [
      {
        type: 'male',
        count: 150,
      },
      {
        type: 'female',
        count: 150,
      },
    ],
  },
  age: {
    parenFolder: 'DeviceReach-ppid',
    grandParentFolder: 'My Data',
    displayName: 'Age',
    cid: 'age',
    items: [
      {
        type: '0-20',
        count: 150,
      },
      {
        type: '20-40',
        count: 400,
      },
      {
        type: '40-60',
        count: 329,
      },
      {
        type: 'above 60',
        count: 213,
      },
    ],
  },
}
