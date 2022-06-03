import {Component, OnInit, ViewChild} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  rowData: Observable<any[]>;

    columnDefs: ColDef[] = [
    { field: 'make', rowGroup: true },
    { field: 'price' }
  ];

  autoGroupColumnDef: ColDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };
  defaultColDef: ColDef = {
    sortable: true,
      filter: true
  };
   items1= [
    { name:'Angular', active:true},
    { name:'React', active:true},
    { name:'Typescript', active:true},
    { name:'FoxPro', active:false},
    { name:'Javascript', active:true},
    { name:'ASP.NET Core', active:true},
    { name:'DBase', active:false}
  ];

  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  ngOnInit(): void {

  }

  getSelectedRows() {
    console.log(this.agGrid);
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log(selectedNodes);
    const selectedData = selectedNodes.map(node => {
      if (node.groupData) {
        return { make: node.key, model: 'Group' };
      }
      return node.data;
    });
    const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`);

  }

  onGridReady(params : any){
    console.log(params);
    this.agGrid = params;
  }
}
