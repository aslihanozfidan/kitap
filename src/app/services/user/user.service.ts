import {Injectable} from '@angular/core';
@Injectable()
export class UserService{
	tekKitapGetir():any{
            return http.get('localhost:8000/kitap');


    }
}
