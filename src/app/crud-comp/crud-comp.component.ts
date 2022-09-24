import {Component, OnInit} from '@angular/core';
import {StudentDto} from "../dto/StudentDto";
import {CrudService} from "./crud.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-crud-comp',
  templateUrl: './crud-comp.component.html',
  styleUrls: ['./crud-comp.component.scss']
})
export class CrudCompComponent implements OnInit {

  studentDtoList: StudentDto[] = [];
  studentDtoFg: FormGroup;
  editFlag: boolean = false;


  constructor(
    private fb: FormBuilder,
    public studentService: CrudService,
  ) {
  }

  ngOnInit(): void {
    this.studentDtoFg = this.fb.group({
      id: [null],
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
    });
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAllStudent().subscribe(res => {
      this.studentDtoList = res.map((e: any) => {
        const data: StudentDto = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('err while fetching data');
    })
  }

  deleteStudent(student: StudentDto) {
    if (window.confirm('Delete' + student.firstName + ' ?' )) {
      this.studentService.deleteStudent(student);
    }
  }


  addStudent() {
   const newStudent: StudentDto = this.studentDtoFg.value;
   this.studentService.addStudent(newStudent);
   this.studentDtoFg.reset();
  }

  onEdit(student: StudentDto) {
    this.studentDtoFg.patchValue(student);
    this.editFlag = true;
  }

  onUpdate () {
    const t: StudentDto = new StudentDto({});
    const updateStudent: StudentDto = {...t,...this.studentDtoFg.value};
    this.studentService.updateStudent(updateStudent);
    this.studentDtoFg.reset();
    this.editFlag = false;
  }
}
