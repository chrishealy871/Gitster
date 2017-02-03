
    constructor(private _http:Http) {
        console.log('Github API service ready!');
        // we will remove this later when we want to search for other users
        //this.userName = "BrenLong"
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