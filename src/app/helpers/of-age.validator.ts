import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function OfAge() {
    return (formGroup: FormGroup) => {
        const day = formGroup.controls['day'];
        const month = formGroup.controls['month'];
        const year = formGroup.controls['year'];

        let date = new Date(`${day.value}-${month.value}-${year.value}`);
        
        // console.log(date.getFullYear(), "wybrany rok");
        // console.log(, "bierzący rok");

    }
}