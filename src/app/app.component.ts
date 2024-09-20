import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'alpha';

  public images!:any;

  constructor(private meta:Meta) {
    
  }

  ngOnInit(): void {
    this.images= [
      {
        thumbImage:'https://images.pexels.com/photos/28292132/pexels-photo-28292132/free-photo-of-aerial-view-of-a-group-of-people-on-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        thumbImage:'https://images.pexels.com/photos/16112572/pexels-photo-16112572/free-photo-of-view-of-sun-shining-between-the-trees-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        thumbImage:'https://images.pexels.com/photos/27700804/pexels-photo-27700804/free-photo-of-a-man-is-riding-a-boat-through-a-tunnel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        thumbImage:'https://images.pexels.com/photos/27757573/pexels-photo-27757573/free-photo-of-two-women-standing-in-front-of-a-shop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        thumbImage:'https://images.pexels.com/photos/27700804/pexels-photo-27700804/free-photo-of-a-man-is-riding-a-boat-through-a-tunnel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
    ]
    this.setMetaTags()
  }


  setMetaTags() {
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:site', content: '@your_twitter_handle' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Dynamic Title' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Dynamic Description' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://images.pexels.com/photos/27700804/pexels-photo-27700804/free-photo-of-a-man-is-riding-a-boat-through-a-tunnel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' });
}


}
