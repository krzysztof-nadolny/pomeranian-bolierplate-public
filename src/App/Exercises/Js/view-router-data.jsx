import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as booleanMetaDataJsFunction1 } from './Boolean/router-data';
import { blockRouterMetaData as ifSwitchMetaDataJsFunction1 } from './If-switch/router-data';
import { blockRouterMetaData as numbersMetaDataJsFunction1 } from './Numbers/router-data';
import { blockRouterMetaData as jsNumbersTrainingMetaDataJsFunction1 } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as emptyValuesAndCommentsMetaDataJsFunction1 } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as jsStringTrainingMetaDataJsFunction1 } from './JsStringTraining/router-data';
import { blockRouterMetaData as arraysMetaDataJsFunction1 } from './Arrays/router-data';
import { blockRouterMetaData as arraysExerciseMetaDataJsFunction1 } from './Arrays-Exercise/router-data';
import { blockRouterMetaData as objectsMetaDataJsFunction1 } from './Objects/router-data';
import { blockRouterMetaData as jsFunctionsBasicsMetaData } from './JsFunctionsBasics/router-data';
import { blockRouterMetaData as ExercisejsfunctionsextendedMetaData } from './Exercise-js-functions-extended/router-data';
import { blockRouterMetaData as dateAndTimeRouterMetaData } from './DateAndTime/router-data';
import { blockRouterMetaData as dateAndTimeExerciseRouterMetaData } from './TimeExercise/router-data';
import { blockRouterMetaData as HitTheMoleRouterMetaData } from './HitTheMole/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanMetaDataJsFunction1,
  ifSwitchMetaDataJsFunction1,
  numbersMetaDataJsFunction1,
  jsNumbersTrainingMetaDataJsFunction1,
  emptyValuesAndCommentsMetaDataJsFunction1,
  jsStringTrainingMetaDataJsFunction1,
  arraysMetaDataJsFunction1,
  arraysExerciseMetaDataJsFunction1,
  objectsMetaDataJsFunction1,
  jsFunctionsBasicsMetaData,
  ExercisejsfunctionsextendedMetaData,
  dateAndTimeRouterMetaData,
  dateAndTimeExerciseRouterMetaData,
  HitTheMoleRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
