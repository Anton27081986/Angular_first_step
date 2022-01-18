import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'carFilter',
    pure: true
})
export class CarFilterPipe implements PipeTransform {

    transform(carList, saerchStr: string, fildName: string) {
        console.log('Started');


        if (carList.length === 0 || saerchStr === '') {
            return carList;
        }
        return carList.filter(car => car[fildName].toLowerCase().indexOf(saerchStr.toLowerCase()) !== -1);
    }
}
