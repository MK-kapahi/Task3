import { Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { map, Observable, tap } from "rxjs";

@Component
({
    selector :'app-display',
    templateUrl :'./display.component.html',
    styleUrls :['./display.component.css']
})

export class DisplayComponent implements OnInit
{

    case:string='';
    public Id!:number;
    showselect:boolean =false;
    
    ngOnInit(): void 
    {
    }
    Statusarr = ['in_progress','completed','on_hold','cancelled','not_started']
    @Input()
    data!: Array <{id : number,name : string, status : string, Startdate:string,Enddate:string}>;

    Show(value: string, id: number)
    {
        this.case= value;
        this.Id=id;
        console.log("the id is "+this.Id);
        alert("the id is "+id);
    }

    @Output() changestatus = new EventEmitter<object>();

    Selectedval(i:number,id :number,event:any)
    {
        const val = event.target.value ;
        this.changestatus.emit({ index :i,ID : id, value :val});
        // alert("The selected code is "+this.selectedvalue);
        // console.log("The selected code is "+this.selectedvalue)
        // alert("The selected code is "+this.Id)
    }

}