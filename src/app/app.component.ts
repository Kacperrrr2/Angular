import { isNgTemplate } from '@angular/compiler';
import { Component,Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[]=[
    new WishItem('To learn angular'),
    new WishItem('Get Coffee',true),
    new WishItem('Find grass that cuts itself')

  ];

  filter:any = ()=>true;
  get visibleItems(): WishItem[]
  {
    return this.items.filter(this.filter);
  };


  title = 'wishlist';



}
