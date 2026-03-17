# PrimeNG Helper

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.3.14.

## Installing dependency

Add the NPM package into your project with the following command:

```node
npm i @von-development-studio/primeng-helper -S
```

## Global settings

- Add PrimeNG MessageService provider in your `ApplicationConfig`.

## Form Validation

### Usage

1. Import FormValidate directive to your component

   ```ts
   import {
     VonFormValidateDirective,
     VonFormValidationDirective
   } from '@von-development-studio/primeng-helper';

   ...

   @Component({
     imports: [
       ...
       VonFormValidateDirective,
       VonFormValidationDirective,
       ...
     ]
   })
   export class CustomComponent { }
   ```

2. Add event _**(validate)**_ (instead of _**submit**_ or _**ngSubmit**_) & _**novalidate**_ attribute to the form tag:

```html
<form (validate)="login()" novalidate></form>
```

3. Add attribute _**validation**_ in all the input fields you want to add the custom verification:

```html
<input pInputText type="text" name="username" [(ngModel)]="login.username" validation required />
```

4.  Your button `type` should be _**submit**_ to trigger the validation

```html
<button type="submit">Login</button>
```

### Directives

- _**required:**_ Checks null or empty value.

  ```html
  <input name="requiredField" [(ngModel)]="value" validation required />
  ```

- _**equalTo:**_ Checks a value is equal to (value or variable).

  ```html
  <input name="eqField01" [(ngModel)]="value01" validation equalTo="TEST" />
  ```

  ```html
  <input name="eqField02" [(ngModel)]="value02" validation [equalTo]="'value01'" />
  ```

  - _**equalToIgnoreCase:**_ Allows to compare the string value ignoring UPPER or LOWER case.

- _**customValidation:**_ Performs a custom validation.

  ```html
  <input name="eqField01" [(ngModel)]="value01" validation [customValidation]="value01 === 'TEST'" />
  ```

### Default validation messages

- _**requiredMessage:**_ `The field '${name}' is required`
- _**equalToMessage:**_ `The field '${name}' is not equal`
- _**customValidationMessage:**_ `The field '${name}' is not valid`

<hr>

## Message Service

### Usage

1. Add service _**VonMessageService**_ in your constructor and use it:

```typescript
import { VonMessageService } from '@von-development-studio/primeng-helper';

...

@Component({
  selector: 'lib-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly messageService = inject(VonMessageService);

  addInfo = () => this.messageService.info('Info Message');

  addSuccess = () => this.messageService.success('Success Message');

  addWarning = () => this.messageService.warning('Warning Message');

  addError = () => this.messageService.error('Error Message');
}
```

<hr>

## Wrapper Components

### Toast

1. Import the component `VonToastComponent`.

2. Add it to your `AppComponent` as: `<von-toast />`

<hr>

## Powered by

[Luis Garcia Castro](https://github.com/lfgarcia22)

_[By Von Development Studio](https://www.von-development-studio.com/)_
