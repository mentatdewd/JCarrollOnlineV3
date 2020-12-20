import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ThreadData } from '../thread-data.model';
import { ThreadTreeFunctionService } from '../thread-tree-function.service';
import { Observable, of as observableOf } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../../../../api-authorization/authorize.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<ThreadData>;
  nestedDataSource: MatTreeNestedDataSource<ThreadData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public forumTitle: string;
  public rootId: number;
  public threadParentId: number;

  constructor(private authorizeService: AuthorizeService, private route: ActivatedRoute, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private service: ThreadTreeFunctionService) {
    this.route.queryParams.subscribe(params => {
      this.rootId = params.rootId;
      this.threadParentId = params.threadParentId;
      this.forumTitle = params.forumTitle;
      console.log(params);
    });
}

  ngOnInit() {
    this.nestedTreeControl = new NestedTreeControl<ThreadData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.getThread(this.rootId).subscribe(result => {
      this.nestedDataSource.data = result;
      console.log("Received thread data");
    }, error => console.error(error));
  }

  public getThread(rootId: number): Observable<ThreadData[]> {
    return this.http.get<ThreadData[]>(this.baseUrl + 'api/forumthreads/' + rootId.toString());
  }

  private _getChildren = (node: ThreadData) => observableOf(node.children);
  hasNestedChild = (_: number, nodeData: ThreadData) => {
    console.log("Checking for nested children");
    return nodeData.children.length > 0;
  }

  refreshTreeData() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = null;
    this.nestedDataSource.data = data;
  }

  addNode(node: ThreadData) {
    node.id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    this.nestedDataSource.data.push(node);
    this.refreshTreeData();
  }

  addChildNode(childrenNodeData) {
    childrenNodeData.node.Id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    childrenNodeData.currentNode.Children.push(childrenNodeData.node);
    this.refreshTreeData();
  }

  editNode(nodeToBeEdited) {
    const fatherElement: ThreadData = this.service.findFatherNode(nodeToBeEdited.currentNode.Id, this.nestedDataSource.data);
    let elementPosition: number;
    nodeToBeEdited.node.Id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    if (fatherElement[0]) {
      fatherElement[0].Children[fatherElement[1]] = nodeToBeEdited.node;
    } else {
      elementPosition = this.service.findPosition(nodeToBeEdited.currentNode.Id, this.nestedDataSource.data);
      this.nestedDataSource.data[elementPosition] = nodeToBeEdited.node;
    }
    this.refreshTreeData();
  }

  //deleteNode(nodeToBeDeleted: ThreadData) {
  //  const deletedElement: ThreadData = this.service.findFatherNode(nodeToBeDeleted.Id, this.nestedDataSource.data);
  //  let elementPosition: number;
  //  if (window.confirm('Are you sure you want to delete ' + nodeToBeDeleted.Name + '?')) {
  //    if (deletedElement[0]) {
  //      deletedElement[0].Children.splice(deletedElement[1], 1);
  //    } else {
  //      elementPosition = this.service.findPosition(nodeToBeDeleted.Id, this.nestedDataSource.data);
  //      this.nestedDataSource.data.splice(elementPosition, 1);
  //    }
  //    this.refreshTreeData();
  //  }
  //}
}
