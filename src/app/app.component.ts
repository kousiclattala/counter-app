import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  handleIncrease = () => {
    this.count = this.count + 1;

    if (this.count === 11) {
      alert(`You have reached the counter limit ${this.count}`);
      this.count = 0;
    }
  }

  handleDecrease = () => {

    if (this.count > 0) {
      this.count = this.count - 1;
    }else{
      alert(`You reached the end of counter limit ${this.count}`) 

    }

  }

  handleReset = () => {
    this.count = 0;
  }
}
