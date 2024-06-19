import { Component, OnInit } from '@angular/core';
import { WaifuService } from '../../services/waifu.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  serviciosData: any[] = [];

  constructor(private waifuService: WaifuService) { }

  ngOnInit() {
    this.getServicios();
  }

  getServicios() {
    this.waifuService.getServiciosData().subscribe(
      data => {
        this.serviciosData = data;
        console.log(this.serviciosData);
      }
    );
  }
}
