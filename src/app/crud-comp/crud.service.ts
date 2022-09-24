import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {StudentDto} from "../dto/StudentDto";

@Injectable()
export class CrudService {

  constructor(private store: AngularFirestore) {
  }

  //add
  addStudent(student: StudentDto) {
    student.id = this.store.createId();
    return this.store.collection('/Students').add(student);
  }

  //get
  getAllStudent() {
    return this.store.collection('/Students').snapshotChanges();
  }

  //delete
  deleteStudent(student: StudentDto) {
    return this.store.collection('Students').doc(student.id).delete();
  }

  //update

  updateStudent(student: StudentDto) {
   return this.store.collection('Students').doc(student.id).update(student);
   }
}
