import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WaifuService } from '../../services/waifu.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [WaifuService]
})
export class AboutComponent implements OnInit{
  waifuData: any;

  constructor(private waifuService: WaifuService) {}

  ngOnInit() {
    this.getWaifu();
  }

  getWaifu() {
    const type = 'sfw';
    const category = 'waifu';

    this.waifuService.getWaifuData(type, category).subscribe(
      data => {
        this.waifuData = data;
        console.log(this.waifuData);
      }
    );
  }
}
