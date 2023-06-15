import { Component } from '@angular/core';
import { IssueTicket } from 'src/app/models/issue-ticket-model';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-assignee-issues',
  templateUrl: './assignee-issues.component.html',
  styleUrls: ['./assignee-issues.component.css'],
})
export class AssigneeIssuesComponent {
  users: User[] = [];

  constructor(private UserService: UserService) {
    this.users = this.UserService.getAllUsers();
  }

  isFormOpen: boolean = false;

  isOpen(isFOpen: boolean) {
    this.isFormOpen = isFOpen;
  }
}
