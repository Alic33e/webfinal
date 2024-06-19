import { Component, OnInit } from "@angular/core";
import { WaifuService } from '../../services/waifu.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  serviciosData: any[] = [];

  constructor(private WaifuService: WaifuService) { }

  ngOnInit() {
    this.getServicios();
  }

  getServicios() {
    this.WaifuService.getServiciosData().subscribe(
      data => {
        this.serviciosData = data;
        console.log(this.serviciosData);
      }
    );
  }
}
