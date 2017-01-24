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
    styles:[`
        .book-panel{
            width:80%;
            height:380px;
            background-color:#eeeeee;
            margin-top:50px;
        }
        .book-panel img{
            width:100%;
            height:80%;
            border:5px solid #eeeeee;
          
         }
        .book-panel-categories{
            margin-top:5px;
            font-size:14px;
            text-align:center;
        }
    `]
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