import {Component,Input,OnInit} from '@angular/core';
@Component({
    selector:'ranker',
    template:`
        <div class="ranker">
            <div class="ranker-rate">
            
            </div>
            <div class="smile-panel">
                <div class="smile">
                <div class="smile" *ngFor="let imgLink of smileImgs">
                     <img [src]="imgRoot+imgLink">
                </div>
                </div>
            </div>    
        </div>
    `,
    styles:[`
        .ranker{
       
            position:relative;
    
        }
        .ranker-rate{
            background-color:#468499;
            height:5px;
            width:80%;
            position:absolute;
            margin-top:10px;
            margin-right:10%;
            margin-left:10%;
            
        }
        .smile-panel{
             position:absolute;
           
        }
        .smile{
            display:inline;
            margin-left:12px;
        }
        .smile img{
            width:25px;
            height:25px;
           
        }
       
    `]
})
export class RankerComponent implements OnInit{

    imgRoot= 'assets/img/ranker/';
    smileImgs= ['smile0.png','smile1.png','smile2.png','smile3.png','smile4.png'];

    rank:Number;

    ngOnInit(){
        this.rank = 3;
    }

}