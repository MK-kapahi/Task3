import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'filter'
})
export class Filterpipe implements PipeTransform
{
    transform(data: any[], filterText: string) 
    {
        if(data.length===0 || filterText === '')
        {
            return data;
        }

        else
        {
            return data.filter((indata)=>{
              return indata.status.toLowerCase() ===filterText.toLowerCase();
            })
        }
    }

}