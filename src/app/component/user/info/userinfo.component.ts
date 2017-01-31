import {Component} from '@angular/core';
@Component({
    selector:'user-info',
    template:`
            <div class="row-user-info">
                <div class="col-user-info-left">
                    <ul>
                        <li>Ad Soyad:</li>
                        <li>Kullanıcı Adı</li>
                        <li>Okuduğu Kitap Sayısı</li>
                        <li>Puanladığı Kitap Sayısı</li>
                        <li>Son Aktiflik Saati</li>
                    </ul>
                </div>
                <div class="col-user-info-right">
                    <ul>
                        <li>: {{name}}</li>
                        <li>: {{userName}}</li>
                        <li>: {{readBooks}}</li>
                        <li>: {{likedBooks}}</li>
                        <li>: {{time}}</li>
                    </ul>    
                </div>
            </div>
         
    `,
    styleUrls:[`
    
        .col-user-info-left{
            margin-top:20px;
            float:left;
        }
        .col-user-info-left li{
            list-style-type: none;
            margin-top:5px;
            
        }
        .col-user-info-right{
            margin-top:20px;
            float:left;
        }
        .col-user-info-right li{
            margin-top:5px;
            list-style-type: none;
        }
        
    `]
})
export class UserInfoComponent{
    name ="Johhn Bravo";
    userName = "johhnn";
    readBooks = 32;
    likedBooks = 440;
    time = "28.12.2016 14:00";
}