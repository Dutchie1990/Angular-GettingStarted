import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'pm-stars',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

    @Input() rating: number = 4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

    ngOnChanges(): void {
       this.starWidth = this.rating * 75 / 5;
    }

    OnClick(): void {
       this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }
}
