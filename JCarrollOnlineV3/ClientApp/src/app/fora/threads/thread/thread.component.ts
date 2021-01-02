import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
//import { ThreadTreeFunctionService } from '../thread-tree-function.service';
import { from, of as observableOf, of } from 'rxjs';
import { AuthorizeService } from '../../../../api-authorization/authorize.service';
import { ForumThreadService } from '../../services/forum-thread.service';
import { CurrentThreadService } from '../../services/current-thread.service';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<ThreadViewModel>;
  nestedDataSource: MatTreeNestedDataSource<ThreadViewModel>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  thread: ThreadViewModel;
  threadId: number;
  forumTitle: string;

  constructor(private authorizeService: AuthorizeService,
    private route: ActivatedRoute,
    private _currentThreadService: CurrentThreadService,
    private threadService: ForumThreadService) {
    this.route.queryParams.subscribe(params => {
      this.threadId = params.threadId;
      this.forumTitle = params.forumTitle;
      console.log(params);
    });
  }

  ngOnInit() {
    this.nestedTreeControl = new NestedTreeControl<ThreadViewModel>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.threadService.getForumThread(this.threadId.toString()).subscribe(result => {
      this.nestedDataSource.data = result;
      this._currentThreadService.sendMessage(new Map(this.nestedDataSource.data.map(i => [i.id, of(i)])));
      console.log("Received thread data");
    }, error => console.error(error));
  }

  private _getChildren = (threadItem: ThreadViewModel) => observableOf(threadItem.children);
  hasNestedChild = (_: number, nodeData: ThreadViewModel) => {
    console.log("Checking for nested children");
    return nodeData.children.length > 0;
  }

  refreshTreeData() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = null;
    this.nestedDataSource.data = data;
  }

  //addNode(node: ThreadData) {
  //  node.id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
  //  this.nestedDataSource.data.push(node);
  //  this.refreshTreeData();
  //}

  //addChildNode(childrenNodeData) {
  //  childrenNodeData.node.Id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
  //  childrenNodeData.currentNode.Children.push(childrenNodeData.node);
  //  this.refreshTreeData();
  //}

  //editNode(nodeToBeEdited) {
  //  const fatherElement: ThreadData = this.service.findFatherNode(nodeToBeEdited.currentNode.Id, this.nestedDataSource.data);
  //  let elementPosition: number;
  //  nodeToBeEdited.node.Id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
  //  if (fatherElement[0]) {
  //    fatherElement[0].Children[fatherElement[1]] = nodeToBeEdited.node;
  //  } else {
  //    elementPosition = this.service.findPosition(nodeToBeEdited.currentNode.Id, this.nestedDataSource.data);
  //    this.nestedDataSource.data[elementPosition] = nodeToBeEdited.node;
  //  }
  //  this.refreshTreeData();
  //}

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
