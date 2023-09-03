import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { routerMetaData as IfStatementsMetaData } from './IfStatements/router-data';
import { IfStatementsMoreOrLessMetaData } from './IfStatementsMoreOrLess/router-data';
import { GuessMeMetaData } from './GuessMe/router-data';
import { toDoMetaData } from './ToDoWithServer/router-data';
import { reactUseRefMetaData } from './ReactUseRef/router-data';
import { submitFormMetaData } from './SubmitForm/router-data';
import { librariesValidationForm } from './LibrariesForm/router-data';


export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  IfStatementsMetaData,
  IfStatementsMoreOrLessMetaData,
  GuessMeMetaData,
  toDoMetaData,
  reactUseRefMetaData,
  submitFormMetaData,
  librariesValidationForm,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
