/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { TwitterService } from './services/twitter.service';
import { NewTweetController } from './newTweet/new-tweet.controller';

angular.module('tests', ['ngAnimate', 'ngSanitize', 'ui.router', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('NewTweetController', NewTweetController)
  .service('TwitterService', TwitterService);
