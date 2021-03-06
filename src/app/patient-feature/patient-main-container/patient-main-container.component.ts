import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-patient-main-container',
  templateUrl: './patient-main-container.component.html',
  styleUrls: ['./patient-main-container.component.css']
})
export class PatientMainContainerComponent implements OnInit {

  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public titleService: Title,
  ) { }

  ngOnInit() {
    let clinicId = this.route.snapshot.paramMap.get('id')
    this.setClinicName(clinicId)
  }

  setClinicName = (id) => {
    let selectedPatient = PATIENT_DATA.filter(element => element.clientId === id);
    
    this.titleService.setTitle(selectedPatient[0].name);
  }
}

export interface Patient {
  warningIcon: string;
  disclosureIcon: string;
  rescindIcon: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  clientId: string;
  service: string;
}

const PATIENT_DATA: Patient[] = [
  {warningIcon: 'warning', disclosureIcon:'info_outline', rescindIcon:'school', name: 'Test, Joelly', dateOfBirth:'1993 Dec 21', gender: 'male', clientId: '1001316543', service: 'Needed'},
  {warningIcon: 'warning', disclosureIcon:'', rescindIcon:'', name: 'Test2, Joelly1', dateOfBirth:'2000 May 21', gender: 'female', clientId: '1001099942', service: 'Needed'},
  {warningIcon: 'warning', disclosureIcon:'', rescindIcon:'school', name: 'Doe, John', dateOfBirth:'2000 May 22', gender: 'male', clientId: '100191142', service: 'Immunized'},
];
