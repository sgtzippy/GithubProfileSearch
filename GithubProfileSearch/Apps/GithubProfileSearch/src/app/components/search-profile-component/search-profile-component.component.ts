import { Component, OnInit } from '@angular/core';

import { SearchProfileServiceService } from '../../services/search-profile-service/search-profile-service.service';

import { ProfileSearchResponse } from '../../models/profile-search-response';

@Component({
  selector: 'app-search-profile-component',
  templateUrl: './search-profile-component.component.html',
  styleUrls: ['./search-profile-component.component.css']
})
export class SearchProfileComponentComponent implements OnInit {
    private profileSearchResponse: ProfileSearchResponse;
    private error: string;

    constructor(private searchProfileServiceService: SearchProfileServiceService) { }

    ngOnInit(): void {
    }

    search(query: string): void {
        this.searchProfileServiceService.searchProfiles(query)
            .subscribe(
                response => {
                    this.profileSearchResponse = response;
                    this.error = null;
                },
                error => {
                    this.error = error;
                    this.profileSearchResponse = null;
                }
            );
    }
}
