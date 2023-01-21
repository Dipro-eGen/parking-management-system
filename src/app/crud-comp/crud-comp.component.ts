import {Component, OnInit} from '@angular/core';
import {CrudService} from "./crud.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {VehicleDto} from "../dto/VehicleDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-comp',
  templateUrl: './crud-comp.component.html',
  styleUrls: ['./crud-comp.component.scss']
})
export class CrudCompComponent implements OnInit {

  vehicleDtoList: VehicleDto[] = [];
  vehicleDtoFg: FormGroup;
  editFlag: boolean = false;
  vehicleType: Array<string> = ["Microbus","Car","Truck"]

  constructor(
    private fb: FormBuilder,
    public vehicleService: CrudService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.vehicleDtoFg = this.fb.group({
      id: [null],
      vehicleLicenceNumber: [],
      vehicleType: [],
      vehicleOwnerName: [],
      status: [],
      vehicleOwnerPhone: [],
      vehicleOwnerAddress: [],
      vehicleEntryDate: [],
      entryTime: [],
      vehicleExitDate: [],
      exitTime: [],
      vehicleCharges: [],
    });


    this.getAllVehicle();
  }

  getAllVehicle() {
    this.vehicleService.getAllVehicle().subscribe(res => {
      this.vehicleDtoList = res.map((e: any) => {
        const data: VehicleDto = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('err while fetching data');
    })
  }




  addVehicle() {
   const newVehicle: VehicleDto = this.vehicleDtoFg.value;
   this.vehicleService.addStudent(newVehicle);
   this.vehicleDtoFg.reset();
  }

  onEdit(vehicleDto: VehicleDto) {
    this.vehicleDtoFg.patchValue(vehicleDto);
    this.editFlag = true;
  }

  onUpdate () {
    const t: VehicleDto = new VehicleDto({});
    const updateVehicle: VehicleDto = {...t,...this.vehicleDtoFg.value};
    this.vehicleService.updateVehicle(updateVehicle);
    this.vehicleDtoFg.reset();
    this.editFlag = false;
  }

  onSelectCarType(event: string) {
    if(event === 'Microbus'){
      this.vehicleDtoFg.patchValue({
        vehicleCharges: 150
      })
    }
   else if(event === 'Car'){
      this.vehicleDtoFg.patchValue({
        vehicleCharges: 100
      })
    }
    else if(event === 'Truck'){
      this.vehicleDtoFg.patchValue({
        vehicleCharges: 200
      })
    }

  }

  navigateToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
