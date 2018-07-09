import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpf]'
})
export class CpfDirective {
  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    let value = $event.target.value;

    if (value.length > 14) {
      value = value.substring(0, 14);
      $event.target.value = value;
    } else {
      value = value + '';
      value = value.replace(/\D/g, '');

      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      $event.target.value = value;
    }
  }
}
