import { Component } from '@angular/core';
import { People } from './model/people';
import { PeopleService } from './services/people.service';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flextock-task';
  people: People[];
  loading = false;
  err = false;
  found = true;

  constructor(private peopleService: PeopleService) {}

  // function that calling the searchpeople function witch comes from the people service
  search(name:string) {
    // to show spinner loading during requesting time
    this.loading = true;

    // call function from the service and subscripe to the observeble
    this.peopleService.searchPeople(name).subscribe(
      (res) => {
        // assign the incoming data to the people array
        let data:any;
        data = res;
        this.people = data.results;

        // to show a not found message if there is no name matches the enterd name
        if (this.people?.length == 0) {
          this.found = false;
          this.loading = false;
        } else {
          this.found = true;
        }
      },

      (err) => {
        // show an error message if ther an error
        this.loading = false;
        this.err = true;
      },
      (): void => {
        this.loading = false; // hide the loading spinner
      }
    );
  }
  // this is the function that making darag and drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.people, event.previousIndex, event.currentIndex);
  }
}
