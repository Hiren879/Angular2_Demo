import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId : module.id,
    selector: 'hero-detail-modal',
    templateUrl: 'hero-detail-modal.component.html'
})
export class HeroDetailModalComponent {

    constructor(public activeModal: NgbActiveModal) { }

}