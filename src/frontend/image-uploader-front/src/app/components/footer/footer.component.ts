import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', 'footer.component-media-queries.css']
})
export class FooterComponent implements OnInit {

  authorRepository: String = 'https://github.com/ElliotLuque';
  devChallenges: String = 'https://devchallenges.io/';

  constructor() { }

  ngOnInit(): void {
  }

}
