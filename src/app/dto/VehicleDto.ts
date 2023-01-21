import {prop} from "@rxweb/reactive-form-validators";


export class StudentDto{
  @prop()
  id: string| null;

  @prop()
  firstName: string| null;

  @prop()
  lastName: string | null;

  @prop()
  email: string | null;

  @prop()
  mobile: string | null;

  public constructor(o?: Partial<StudentDto>) {
    Object.assign(this, o);
  }

}
