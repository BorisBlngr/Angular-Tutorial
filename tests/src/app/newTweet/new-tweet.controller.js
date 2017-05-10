export class NewTweetController {
  constructor(TwitterService, $state) {
    'ngInject';

    this.twitterService = TwitterService;
    this.$state = $state;
  }

  sendTweet() {
    let tweet = {name: this.name, message: this.message};
    this.twitterService.sendTweet(tweet).then(()=>{
      this.$state.go("home");
    });
  };

  goHome(){
    this.$state.go("home");
  }

}
