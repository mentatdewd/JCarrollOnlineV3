import { Injectable } from '@angular/core';
import { ThreadData } from './thread-data.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadTreeFunctionService {

  flatJsonArray(flattenedAray: Array<ThreadData>, node: ThreadData[]) {
    const array: Array<ThreadData> = flattenedAray;
    node.forEach(element => {
      if (element.children) {
        array.push(element);
        this.flatJsonArray(array, element.children);
      }
    });
    return array;
  }

  findNodeMaxId(node: ThreadData[]) {
    const flatArray = this.flatJsonArray([], node);
    const flatArrayWithoutChildren = [];
    flatArray.forEach(element => {
      flatArrayWithoutChildren.push(element.id);
    });
    return Math.max(...flatArrayWithoutChildren);
  }

  findPosition(id: number, data: ThreadData[]) {
    for (let i = 0; i < data.length; i += 1) {
      if (id === data[i].id) {
        return i;
      }
    }
  }

  findFatherNode(id: number, data: ThreadData[]) {
    for (let i = 0; i < data.length; i += 1) {
      const currentFather = data[i];
      for (let z = 0; z < currentFather.children.length; z += 1) {
        if (id === currentFather.children[z]['id']) {
          return [currentFather, z];
        }
      }
      for (let z = 0; z < currentFather.children.length; z += 1) {
        if (id !== currentFather.children[z]['id']) {
          const result = this.findFatherNode(id, currentFather.children);
          if (result !== false) {
            return result;
          }
        }
      }
    }
    return false;
  }

}
