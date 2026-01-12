# PrimeNG Helper

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.3.14.

## Installing dependency

Add the NPM package into your project with the following command:

```node
npm i @von-development-studio/primeng-helper -S
```

## Form Validation

### Usage

1. Import FormValidate directive to your component

    ```ts
    import { VonPrimengFormModule } from '@von-development-studio/primeng-form-validation';

    ...

    @Component({
      imports: [
        ...
        VonPrimengFormModule,
        ...
      ]
    })
    export class AppComponent { }
    ```

2. Add event _**(validate)**_ (instead of _**submit**_ or _**ngSubmit**_) & _**novalidate**_ attribute to the form tag:

  ```html
  <form (validate)="login()" novalidate>
  ```

3. Add attribute _**validation**_ in all the input fields you want to add the custom verification:

  ```html
  <input pInputText validation type="text" name="username" [(ngModel)]="login.username" [required]="true" />
  ```

  * You need to include the component [```<p-toast></p-toast>```](https://www.primefaces.org/primeng/#/toast) or [```<p-message></p-message>```](https://www.primefaces.org/primeng/#/toast) in your html if you want to see the custom validation message.

4.  Your button `type` should be _**submit**_ to trigger the validation

  ```html
  <button type="submit">Login</button>
  ```

### Directives

* _**required:**_ Checks null value

  ```html
  <input name="requiredField" [(ngModel)]="value" [required]="true" validation />
  ```

* _**equalTo:**_ Checks a value is equal to (value or variable)

  ```html
  <input name="eqField01" [(ngModel)]="value01" equalTo="TEST" validation />
  ```

  ```html
  <input name="eqField02" [(ngModel)]="value02" [equalTo]="value01" validation />
  ```

### Default validation messages

* _**requiredMessage:**_ `The field '${name}' is required`
* _**equalToMessage:**_ `The field '${name}' is not equal`
* _**customMessage:**_ `The field '${name}' is not equal`

<hr>

## Message Service

### Usage

1. Add _**VonMessageService**_ into your component `providers`

    ```typescript
    import { MessageService } from 'primeng/api';
    import { VonMessageService } from '@von-development-studio/primeng-message-service';

    ...

    @Component({
      providers: [
        ...
        MessageService,
        VonMessageService,
        ...
      ]
    })
    export class AppComponent { }
    ```

2. Add service _**VonMessageService**_ in your constructor and use it:

```typescript
import { Component } from "@angular/core";
import { VonMessageService } from "@von-development-studio/primeng-message-service";

@Component({
  selector: "lib-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(protected messageService: VonMessageService) {}

  addSuccess = () => this.messageService.addSuccess("Success Message");
  addInfo = () => this.messageService.addInfo("Info Message");
  addWarning = () => this.messageService.addWarning("Warning Message");
  addError = () => this.messageService.addError("Error Message");
}
```

<hr>

###### _[By Von Development Studio](https://www.von-development-studio.com/)_
