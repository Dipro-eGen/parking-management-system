import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {VehicleDto} from "../dto/VehicleDto";

@Injectable()
export class CrudService {

  constructor(private store: AngularFirestore) {
  }

  //add
  addStudent(vehicleDto: VehicleDto) {
    vehicleDto.id = this.store.createId();
    return this.store.collection('/Vehicles').add(vehicleDto);
  }

  //get
  getAllVehicle() {
    return this.store.collection('/Vehicles').snapshotChanges();
  }

  //delete
  deleteVehicle(vehicle: VehicleDto) {
    return this.store.collection('Vehicles').doc(vehicle.id).delete();
  }

  //update

  updateVehicle(vehicle: VehicleDto) {
   return this.store.collection('Vehicles').doc(vehicle.id).update(vehicle);
   }
}
