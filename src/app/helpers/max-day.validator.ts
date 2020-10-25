import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MaxDay() {
    return (formGroup: FormGroup) => {
        const day = formGroup.controls['day'];
        const month = formGroup.controls['month'];
        const year = formGroup.controls['year'];
        
        if(((year.value % 4 == 0) && (year.value % 100 != 0)) || (year.value % 400 == 0)){
            if(day.value > 29 && month.value-0 === 2){
                day.setErrors({ mustMatch: true });
            }
        }
        else {
            if(day.value > 28 && month.value-0 === 2){
                day.setErrors({ mustMatch: true });
            }
        }
    
        if(day.value == 31 && (month.value-0 === 4 || month.value-0 === 6 || month.value-0 === 9 || month.value-0 === 11)){
            day.setErrors({ mustMatch: true });
        }
        if(day.value > 31){
            day.setErrors({ mustMatch: true });
        }
    }
}