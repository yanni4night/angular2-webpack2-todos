import {platformBrowser} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';

import {IndexModuleNgFactory} from '../../aot/src/index/index.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(IndexModuleNgFactory);
