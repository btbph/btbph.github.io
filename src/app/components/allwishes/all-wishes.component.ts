import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import { WishlistService } from '../../services/wishlist.service';
import { Wish } from '../../models/wish';

@Component({
  selector: 'app-all-wishes',
  templateUrl: './all-wishes.component.html',
  styleUrls: ['./all-wishes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllWishesComponent implements OnInit {
  public wishes: Wish[];

  constructor(private wishListService: WishlistService) {}

  ngOnInit() {
    this.getAllWishes();
  }

  getAllWishes(): void {
    this
      .wishListService
      .getAllWishes()
      .subscribe(res => this.wishes = res);
  }

  deleteWish(wishId: number): void {
    this.wishListService.removeWish(wishId);
  }
}
