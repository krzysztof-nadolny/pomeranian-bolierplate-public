import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockSelectorsAndCascade as selectorsAndCascade } from './SelectorsAndCascade/router-data';
import { blockTextFundamentals } from './TextFundamentals/router-data';
import { blockGoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as CssMetaData } from './CssFilter/router-data';
import { blockRouterMetaData as ImageFilesMetaData } from './ImageFiles/router-data';
import { blockRouterMetaData as BoxModelMetaData } from './BoxModel/router-data';
import { blockRouterMetaData as TableTennisMetaData } from './TableTennis/router-data';
import { blockRouterMetaData as ArrayRenderingMetaData } from './ArrayRendering/router-data';
import { blockRouterMetaData as ArrayRenderingToTableMetaData } from './ArrayRenderToTable/router-data';
import { blockRouterMetaData as FloatAndPositioningMetaData } from './FloatAndPositioning/router-data';
import { blockRouterMetaData as MediaQueriesMetaData } from './MediaQueries/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  selectorsAndCascade,
  blockTextFundamentals,
  blockGoogleFonts,
  CssMetaData,
  ImageFilesMetaData,
  BoxModelMetaData,
  TableTennisMetaData,
  ArrayRenderingMetaData,
  ArrayRenderingToTableMetaData,
  FloatAndPositioningMetaData,
  MediaQueriesMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
