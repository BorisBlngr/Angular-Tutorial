export class MainController {
  constructor(TwitterService, $interval, $state) {
    'ngInject';

    const intervalValue = 3000;

    this.toto = "toto";
    this.array = [1, 6, 7, 3, 56, 90, 3, 2];
    this.date = new Date();

    this.twitterService = TwitterService;
    this.$interval = $interval;
    this.$state = $state;

    this.intervalId = this.$interval(() => {
      this.getTweets();
    }, intervalValue);

    this.tweets = [];
    this.getTweets();
  }

  clearInput() {
    this.name = "";
  }

  getTweets() {
    this.twitterService.getTweets()
      .then((response) => {
        console.log(response);
        this.tweets = response;
      });
  }

  deleteTweet(tweet) {
    this.twitterService.deleteTweet(tweet)
      .then(() => {
        this.getTweets();
      });
  }

  goToNewTweet() {
    this.$interval.cancel(this.intervalId);
    this.$state.go("newTweet");
  }

  goToPage() {
    this.twitterService.getTweetsPage(this.page)
      .then((response) => {
        console.log(response);
        this.tweets = response;
      });
  }

}
