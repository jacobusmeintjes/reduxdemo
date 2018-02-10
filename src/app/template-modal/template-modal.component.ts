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
  set modalState(_modalState: any) {
    if (_modalState === this.modalName) {
      this.openModal();
    } else if (this.modalRef) {
      this.closeModal();
    }
  }

  @Output()
  onCloseModal = new EventEmitter<any>();

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalRef = this.modalService.open(this._templateModal, {backdrop: 'static', keyboard: false});
  }

  closeModal() {
    this.modalRef.close();
  }

  ngOnInit() {}
}
