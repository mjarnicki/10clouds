import { FormGroup } from '@angular/forms';

export function UnderAge() {
    return (formGroup: FormGroup) => {
        const day = formGroup.controls['day'];
        const month = formGroup.controls['month'];
        const year = formGroup.controls['year'];

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate(); 

      let calculatedAge = currentYear - year.value;
  
      if (currentMonth < month.value - 1) {
          calculatedAge--;
      }
      if (month.value - 1 == currentMonth && currentDay < day.value) {
          calculatedAge--;
      }
      if(calculatedAge < 18) {
            month.setErrors({ mustMatch: true });
        } else {
            month.setErrors(null);
        }
    }
}