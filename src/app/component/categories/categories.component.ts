import {Component,OnInit} from '@angular/core';
import {Book} from '../../concreate/book';
import {CategoryService} from '../../services/category';
@Component({
	selector:'indexli',
	templateUrl:'./categories.component.html',
	styleUrls:['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
   
     lastBooks:Book[];

	 constructor(private categoryService:CategoryService){
		
	 }

	 ngOnInit(){
			
	 }

}

