import {Injectable} from '@angular/core';
import {Http, Headers}  from'@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

	private userName:string;
	private client_id:string = '287b42cba5d3292bccb1';
	private client_secret:string = '9c5fb653001ce1f8de29a7d4842a84f78c48e44d';

  constructor(private _http:Http) {
        console.log('Github API service ready!');
   
         }
    getUser()
        {return this._http.get('http://api.github.com/users/' 
            + this.userName
            + '?client_id=' + this.client_id
            + '&client_secret=' + this.client_secret).map(res => res.json());
    }
    getRepos()
        {
            return this._http.get('http://api.github.com/users/'
            + this.userName 
            + '/repos?client_id=' + this.client_id 
            + '&client_secret=' + this.client_secret).map(res => res.json());
        }
    updateUser(username:string)
    {
        this.userName = username;
    }
}