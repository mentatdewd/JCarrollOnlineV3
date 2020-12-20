import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThreadData } from './thread-data.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadDataService {

  _dataChange = new BehaviorSubject<ThreadData[]>(
    [{
      id: 1,
      rootId: null,
      parent: null,
      parentPostNumber: null,
      Name: '',
      forum: { Id: 1, Description: '', ThreadCount: 1, Title: '', LastThread: '' },
      postCount: 1,
      author: {},
      content: '',
      title: 'John Heart 1',
      createdAt: '',
      updatedAt: '',
      postNumber: 1,
      locked: false,
      imageList: [],
      children: [
        {
          id: 1,
          rootId: 1,
          parent: null,
          parentPostNumber: 1,
          children: [],
          Name: 'Test Post 1',
          forum: { Id: 1, Description: '', ThreadCount: 1, Title: '', LastThread: '' },
          postCount: 1,
          author: {},
          content: 'Thread test 1 content string',
          title: 'Test Post 1',
          createdAt: '',
          updatedAt: '',
          postNumber: 1,
          locked: false,
          imageList: []
        },
        {
          id: 1,
          rootId: 1,
          parent: null,
          parentPostNumber: 1,
          children: [],
          Name: 'Test Post 1',
          forum: { Id: 1, Description: '', ThreadCount: 1, Title: '', LastThread: '' },
          postCount: 1,
          author: {},
          content: 'Thread test 1 content string',
          title: 'Test Post 1',
          createdAt: '',
          updatedAt: '',
          postNumber: 1,
          locked: false,
          imageList: []
        },
      ]
    },
    {
      id: 2,
      rootId: null,
      parent: null,
      parentPostNumber: null,
      Name: '',
      forum: { Id: 1, Description: '', ThreadCount: 1, Title: '', LastThread: '' },
      postCount: 1,
      author: {},
      content: '',
      title: 'John Heart 1',
      createdAt: '',
      updatedAt: '',
      postNumber: 1,
      locked: false,
      imageList: [],
      children: [
        {
          id: 3,
          rootId: 2,
          parent: null,
          parentPostNumber: 2,
          children: [],
          Name: 'Test Post 1',
          forum: { Id: 1, Description: '', ThreadCount: 1, Title: '', LastThread: '' },
          postCount: 1,
          author: {},
          content: 'Thread test 1 content string',
          title: 'Test Post 1',
          createdAt: '',
          updatedAt: '',
          postNumber: 1,
          locked: false,
          imageList: []
        },
        {
          id: 4,
          rootId: 2,
          parent: null,
          parentPostNumber: 2,
          children: [],
          Name: 'Test Post 1',
          forum: { Id: 1, Description: '', ThreadCount: 1, Title: '', LastThread: '' },
          postCount: 1,
          author: {},
          content: 'Thread test 1 content string',
          title: 'Test Post 1',
          createdAt: '',
          updatedAt: '',
          postNumber: 1,
          locked: false,
          imageList: []
        },
      ]
    }
    ]
  );
}
