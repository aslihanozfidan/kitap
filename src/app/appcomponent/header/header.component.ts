import {Component} from '@angular/core';
@Component({
	selector:'headerc',
	template:`
		<nav class="navbar navbar-light bg-faded">
			<a class="navbar-brand" href="#"> <img [src]="logoUrl" ></a>
			<ul class="nav navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#">ANA SAYFA</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">KİTAP LİSTESİ</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
					KATEGORİLER
					</a>
					<div class="dropdown-menu" aria-labelledby="Preview">
						<a class="dropdown-item" href="#">Dropdown Link 1</a>
						<a class="dropdown-item" href="#">Dropdown Link 2</a>
						<a class="dropdown-item" href="#">Dropdown Link 3</a>
					</div>
				</li>
					<li class="nav-item">
					<a class="nav-link" href="#">YARDIM</a>
				</li>
				<span class nav-item-right>
					<li class="nav-item ">
						<a class="nav-link" href="#">ÜYE GİRİŞİ</a>
					</li>
					<li class="nav-item ">
						<a class="nav-link" href="#">ÜYE OL</a>
					</li>
				</span>
			</ul>
		</nav>
	`,
	styles:[`
	    .navbar{
			padding:0px;
		}
		.navbar-brand{
			margin-left:200px;
			padding-top:0px;
		}
		.navbar-light .navbar-nav .nav-link {
			color:#282828;
			padding-left:20px;
			font-size:13px;
		}
		
		.nav-item-right{
			color:#7f7f7f;
			float:right;
		}
	
		ul li:first-child{
			margin-left:100px;
		}
		.bg-faded {
			background-color:#e3e3e3;
			height:40px;
		}
	`]
	})
export class HeaderComponent{
	logoUrl = 'assets/img/logo.png';
}
