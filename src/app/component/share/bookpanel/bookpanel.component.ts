import {Component,Input,OnInit} from '@angular/core';
import {Book} from '../../../concreate/book';
@Component({
    selector:'bookpanel',
    template:`
        <div class="book-panel">
            <img [src]=book.book_img>
            <br>
            <div class="book-panel-categories">
                 <span *ngFor="let cat of bookCategories">
                     {{cat}}
                </span>
            </div>
            <br>
            <ranker>
            
            </ranker>
        </div>
    `,
    styleUrls:['./bookpanel.css','./bookpanel.media.css']
})
export class BookPanelComponent implements OnInit{

    @Input() book:Book;

    bookImgUrl:string;
    bookCategories:String[];
    rank:Number;

    ngOnInit(){
        this.bookCategories = ['Psikoloji','Dram','Felsefe'];
        this.rank = 3;
    }

}