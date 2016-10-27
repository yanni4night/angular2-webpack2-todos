import {platformBrowser} from '@angular/platform-browser';

import {IndexModuleNgFactory} from '../../aot/src/index/index.module.ngfactory';

platformBrowser().bootstrapModuleFactory(IndexModuleNgFactory);
