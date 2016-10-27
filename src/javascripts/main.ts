/**
  * Copyright (C) 2016 yanni4night.com
  * main.ts
  *
  * changelog
  * 2016-10-27[17:29:02]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
