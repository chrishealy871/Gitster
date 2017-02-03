import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']

})

export class ProfileComponent implements OnInit {
	private user: any[]
	private repos: any[]
	private username: any;

	constructor(private _githubService: GithubService) {

	}
	searchUser() {
		this._githubService.updateUser(this.username);

		this._githubService.getUser().subscribe(user => {
			this.user = user
		})

		this._githubService.getRepos().subscribe(repos => {
			this.repos = repos
		})

	}
	ngOnInit() {
	}

}
