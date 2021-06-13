// export function phoneNumberMask(value?: string) {
//   if (value) {
//     value = value.replace(/\D/g, '');

import moment from 'moment';

//     value = value.replace(/(\d)(\d{4})$/, '$1-$2');
//   }
//   return value;
// }

export function nameInputMask(value?: string) {
  let result = value;
  if (result) {
    result = result.replace(/[^a-zà-úA-ZÀ-Ú ]/g, '');
    // result = result.replace(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g, '');
  }

  return result?.substring(0, 40);
}

export function phoneNumberMask(value: string) {
  if (value) {
    value = value.replace(/\D/g, '');

    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
  }
}
// e.currentTarget.maxLength = 9;
// e.currentTarget.value = cepMask(e.currentTarget.value) || '';

// return e;

export function cepMask(value?: string) {
  console.log('CEP VALUE>>', value?.length);

  if (value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  }

  console.log('finallll>>', value);
  return value;
}

export function currencyMask(value: number) {
  let valueNumber = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  valueNumber = valueNumber.replace('R$', 'R$ ');
  return valueNumber;
}
export function datePickerMask(value: any) {
  if (value === String) {
    value = value.replace(/\D/g, ''); // Remove tudo o que não é dígito
    value = value.replace(/^(\d{2})$/g, '$1');
    value = value.replace(/^(\d{2})(\d{1,2})$/g, '$1/$2');
    value = value.replace(/^(\d{2})(\d{2})(\d{1,4})$/g, '$1/$2/$3');

    const x = moment(value).format('DD/MM/YYYY');

    return x;
  }

  const date = moment(value, 'DD/MM/YYYY').format('DD/MM/YYYY');

  return date;
}

export function timePickerMask(value: Date) {
  if (value) {
    const dateTime = moment(value).format('HH:mm');

    return dateTime;
  }
}
export function dateTextMask(value?: string) {
  let result = value;

  if (value?.includes('-') && !value.endsWith('-')) {
    const data = moment(value, 'YYYY-MM-DD').format('DD/MM/YYYY');
    return data;
  }

  if (result) {
    result = result.replace(/\D/g, ''); // Remove tudo o que não é dígito
    result = result.replace(/^(\d{2})$/g, '$1');
    result = result.replace(/^(\d{2})(\d{1,2})$/g, '$1/$2');
    result = result.replace(/^(\d{2})(\d{2})(\d{1,4})$/g, '$1/$2/$3');
  }
  return result;
}

// export function dateTextMask(dateFormat: string) {
//   const date = moment(dateFormat).format('DD/MM/YYYY');

//   return date;
// }

export function cpfMask(value?: string) {
  if (value) {
    value.toString();
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1-$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
  }

  return value;
}
