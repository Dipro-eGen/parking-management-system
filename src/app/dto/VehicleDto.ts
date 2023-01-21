import {prop} from "@rxweb/reactive-form-validators";


export class VehicleDto{
  @prop()
  id: string| null;

  @prop()
  vehicleLicenceNumber: string| null;

  @prop()
  vehicleType: string | null;

  @prop()
  vehicleOwnerName: string | null;

  @prop()
  vehicleOwnerPhone: string | null;

  @prop()
  status: string;   // in or out

  @prop()
  vehicleOwnerAddress: string | null;

  @prop()
  vehicleEntryDate: string | null;

  @prop()
  entryTime: string | null;

  @prop()
  vehicleExitDate: string | null;

  @prop()
  exitTime: string | null;

  @prop()
  vehicleCharges: number | null;


  public constructor(o?: Partial<VehicleDto>) {
    Object.assign(this, o);
  }

}
