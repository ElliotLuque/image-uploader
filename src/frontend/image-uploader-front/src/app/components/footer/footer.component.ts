import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', 'footer.component-media-queries.css']
})
export class FooterComponent {
  authorRepository: String = 'https://github.com/ElliotLuque';
  devChallenges: String = 'https://devchallenges.io/';
}
