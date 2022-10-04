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
  auditComposition: {
    parenFolder: 'DeviceReach-ppid',
    grandParentFolder: 'My Data',
    displayName: 'AuditComposition',
    cid: 'auditComposition',
    items: [
      {
        type: 'mock-1',
        count: 90,
      },
      {
        type: 'mock-2',
        count: 100,
      },
      {
        type: 'mock-3',
        count: 329,
      },
      {
        type: 'mock-4',
        count: 122,
      },
    ],
  },
  apple: {
    parenFolder: 'Category',
    grandParentFolder: 'My Fruits',
    displayName: 'Apple',
    cid: 'apple',
    items: [
      {
        type: 'Small',
        count: 40,
      },
      {
        type: 'Large',
        count: 60,
      },
      {
        type: 'Good',
        count: 109,
      },
      {
        type: 'Bad',
        count: 90,
      },
    ],
  },
  mango: {
    parenFolder: 'Category',
    grandParentFolder: 'My Fruits',
    displayName: 'Mango',
    cid: 'mango',
    items: [
      {
        type: 'Small',
        count: 40,
      },
      {
        type: 'Large',
        count: 60,
      },
      {
        type: 'Good',
        count: 109,
      },
      {
        type: 'Bad',
        count: 90,
      },
    ],
  },
  banana: {
    parenFolder: 'Category',
    grandParentFolder: 'My Fruits',
    displayName: 'Banana',
    cid: 'banana',
    items: [
      {
        type: 'Small',
        count: 40,
      },
      {
        type: 'Large',
        count: 60,
      },
      {
        type: 'Good',
        count: 109,
      },
      {
        type: 'Bad',
        count: 90,
      },
    ],
  },
  orange: {
    parenFolder: 'Category',
    grandParentFolder: 'My Fruits',
    displayName: 'Orange',
    cid: 'orange',
    items: [
      {
        type: 'Small',
        count: 40,
      },
      {
        type: 'Large',
        count: 60,
      },
      {
        type: 'Good',
        count: 109,
      },
      {
        type: 'Bad',
        count: 90,
      },
    ],
  },
}
