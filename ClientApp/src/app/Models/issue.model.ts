import { IssueStatus } from '../Enums/issue-status.enum';

export class Issue {
    status: IssueStatus;
    ticketNumber: number;
    description: string;
    date: Date;

    constructor(status: IssueStatus, ticketNumber: number, description: string, date: Date) {
        this.status = status;
        this.ticketNumber = ticketNumber;
        this.description = description;
        this.date = date;
    }
}
