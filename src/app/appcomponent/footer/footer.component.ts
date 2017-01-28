import {Component} from '@angular/core';
@Component({
	selector:'footerc',
	template:`
		<div class="footer">
			<div class="col-xs-6">
			</div>
			<div class="col-xs-2">

			</div>
			<div class="col-xs-4 social-imgs">
				<img [src]="facebookImgUrl" >
				<img [src]="twitterImgUrl" >
				<img [src]="instagramImgUrl" >
			</div>
		</div>
	`,
	styles:[`
		.social-imgs{
			margin-top:18px;
		}
		.footer{
			background-color:#468499;
			height:85px;			
			bottom:0px;
			width:100%;
			clear:both;
		}  
	`]
	})
export class FooterComponent{
	facebookImgUrl='assets/img/facebookimg.png';; facebookLinkUrl;
	instagramImgUrl='assets/img/instagramimg.png';; instagramLinkUrl;
	twitterImgUrl='assets/img/twitterimg.png';;	twitterLinkUrl;

  

}
