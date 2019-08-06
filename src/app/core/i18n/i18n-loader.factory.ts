import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { appConfig } from '@app/config';

export function I18nLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${appConfig.i18n.prefix}/assets/i18n/`, '.json');
}
