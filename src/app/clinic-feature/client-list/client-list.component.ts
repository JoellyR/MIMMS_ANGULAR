import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router/src/shared';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  displayedColumns = ['warningIcon', 'disclosureIcon', 'rescindIcon', 'name', 'dateOfBirth', 'gender', 'clientId', 'service', 'routingAction'];
  dataSource = new MatTableDataSource(PATIENT_DATA);
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit() {
    //let selectedClinic = ELEMENT_DATA.filter(element => element.id === this.route.snapshot.paramMap.get('id'));
    let clinicId = this.route.snapshot.paramMap.get('id')
    this.setClinicName(clinicId)
    /*var clinicName = this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.setClinicName(params.get('id'))
    );*/
    /*this.route.paramMap.switchMap((params: ParamMap) =>
      clinicId = params.get('id')

    )*/
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  setClinicName = (id) => {
    let selectedClinic = ELEMENT_DATA.filter(element => element.id === id);
    
    this.titleService.setTitle(selectedClinic[0].name);
  }

}
export interface Element {
  id: string;
  name: string;
  dates: string;
  clients: number;
  downloaded: string;
  status: string;
}

const ELEMENT_DATA: Element[] = [
  {id: '249291', name: 'DC-Test Clinic 1', dates:'2017 Dec 21', clients: 38, downloaded: '2018 Jan 19', status: 'warning'},
  {id: '222141', name: 'DC-Test Clinic 2', dates:'2017 May 12', clients: 38, downloaded: '2018 Jan 18', status: 'warning'},
  {id: '249441', name: 'DC-Test Clinic 3', dates:'2017 Dec 13', clients: 38, downloaded: '2018 Jan 17', status: 'warning'},
  {id: '223412', name: 'DC-Test Clinic 4', dates:'2017 Feb 18', clients: 38, downloaded: '2018 Jan 19', status: 'warning'},
];

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