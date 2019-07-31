import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '@app/env';

export function I18nLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${environment.i18n.prefix}/assets/i18n/`, '.json');
}
