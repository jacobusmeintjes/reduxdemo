import {
  Component,
  ChangeDetectionStrategy,
  Output,
  ViewChild,
  EventEmitter,
  Input,
  ElementRef,
  OnInit
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.css']
})
export class TemplateModalComponent implements OnInit {
  private modalName = 'templateFormModal';
  private modalRef: NgbModalRef;

  @ViewChild('content') _templateModal: ElementRef;

  @Input()
  set modalState(_state: any) {
    if (_state === this.modalName) {
      this.open();
    } else if (this.modalRef) {
      this.closeModal();
    }
  }

  @Output()
  onCloseModal = new EventEmitter<any>();

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  openModal() {
    this.modalRef = this.modalService.open(this._templateModal, {backdrop: 'static', keyboard: false});
  }

  closeModal() {
    this.modalRef.close();
  }

  ngOnInit() {}
}
