import { VonLocalizationModel } from "../form-validation/models/von-localization.model";
import { VonValidationMessagesModel } from "../form-validation/models/von-validation-messages.model";

const VALIDATION_MESSAGES_EN: VonLocalizationModel = {
  requiredMessage: 'The field \'${name}\' is required',
  equalToMessage: 'The field \'${name}\' is not equal to \'${equalTo}\'',
  customMessage: "The field '${name}' is not valid"
};

const VALIDATION_MESSAGES_ES: VonLocalizationModel = {
  requiredMessage: 'El campo \'${name}\' es requerido',
  equalToMessage: 'El campo \'${name}\' no es igual a \'${equalTo}\'',
  customMessage: "El campo '${name}' no es válido"
};

export const VALIDATION_MESSAGES: VonValidationMessagesModel = {
  ngModelRequired: 'You need to add [(ngModel)] into the element',
  EN: VALIDATION_MESSAGES_EN,
  ES: VALIDATION_MESSAGES_ES
};
