import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CrudService} from "../crud-comp/crud.service";
import {VehicleDto} from "../dto/VehicleDto";
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  vehicleDtoList: VehicleDto[] = [];
  microbusList: VehicleDto[] = [];
  carList: VehicleDto[] = [];
  truckList: VehicleDto[] = [];
  totalCapacity:number = 50;

  constructor(public vehicleService: CrudService,
              private router: Router,) { }

  ngOnInit(): void {
    this.getAllVehicle();

  }

  getAllVehicle() {
    this.vehicleService.getAllVehicle().subscribe(res => {
      this.vehicleDtoList = res.map((e: any) => {
          const data: VehicleDto = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        }
      )
    }, err => {
      alert('err while fetching data');
    })
  }

  getAvailableSlot(): number{
    let bookSlot = 0;
    this.vehicleDtoList.forEach(e=>{
      if(e.status === "In"){
        bookSlot++;
      }
    })
    return this.totalCapacity - bookSlot;
  }

  navigateToAdmin() {
    this.router.navigateByUrl('/vehicle');
  }

  isMoreThanTwoHours(vehicle: VehicleDto){
    return vehicle.status === 'In' && vehicle.entryTime['hour'] > 2;

  }
}
