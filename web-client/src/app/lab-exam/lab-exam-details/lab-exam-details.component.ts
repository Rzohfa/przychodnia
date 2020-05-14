import { Component, OnInit } from '@angular/core';
import { LaboratoryExaminationService } from 'src/app/service/laboratory-examination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LaboratoryExamination } from 'src/app/data/examination/laboratory-examination';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TextInputComponent } from 'src/app/modals/text-input/text-input.component';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/data/user/user';

@Component({
  selector: 'app-lab-exam-details',
  templateUrl: './lab-exam-details.component.html',
  styleUrls: ['./lab-exam-details.component.css']
})
export class LabExamDetailsComponent implements OnInit {

  examination: LaboratoryExamination
  userSub: Subscription
  labSub: Subscription
  user: User
  exam_id: number

  constructor(private laboratoryService: LaboratoryExaminationService, private userService: UserService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.exam_id = Number(this.route.snapshot.paramMap.get('id'))
    
    this.userSub = this.userService.getAuthenticationEvent().subscribe(user => {
      this.user = user
      if(this.user != null)
        this.labSub = this.laboratoryService.getLaboratoryExam(this.exam_id).subscribe(lab => this.examination = lab)
    })

    this.userService.getAuthenticationEvent().subscribe(user => {
      this.user = user
      if(this.user != null)
        this.labSub = this.laboratoryService.getLaboratoryExam(this.exam_id).subscribe(lab => this.examination = lab)
    })
  }

  // Change status
  changeStatus(status: string): void {
    this.laboratoryService.changeExaminationStatus(status, this.examination)
  }

  // Navigate to Examination list view
  navigateToList() {
    this.router.navigate(['exam-list'])
  }

  // Open modal
  openPopup(type: string): void {
    // Opening modal
    const modalRef = this.modalService.open(TextInputComponent, { size: 'lg' })
    // Retrieve text from modal
    modalRef.result.then((result) => {
      this.setText(type, result)
    }, (reason) => { })

    // Set Modal title & preInput
    switch (type) {
      case 'result':
        modalRef.componentInstance.title = 'Edytuj wynik badania'
        modalRef.componentInstance.preInput = this.examination.result
        break

      case 'note':
        modalRef.componentInstance.title = 'Edytuj notatkę kierownika'
        modalRef.componentInstance.preInput = this.examination.supervisorNote
        break
    }
  }

  // Set text retrieved from Modal
  setText(type: string, input: string): void {
    this.laboratoryService.changeExaminationResultNote(type, input, this.examination)
  }

}


