export class TwitterService {
  constructor($http, $interval) {
    'ngInject';

    this.$http = $http;
    this.$interval = $interval;
    this.url = 'http://10.0.1.137:8080/api';
    this.page = [];

  }

  sendTweet(tweet) {
    return this.$http.post(this.url + '/tweets', tweet);
  }

  getTweets() {
    return this.$http.get(`${ this.url }/tweets?page=0&size=10&sort=createdDate,desc`)
      .then((response) => {
        let tweetsFormated = [];
        let tweets = response.data._embedded.tweet;
        this.page = response.data.page;
        console.log(this.page);
        tweets.forEach((tweet) => {
          let goodTweet = this.constructTweet(tweet);
          tweetsFormated.push(goodTweet);
        });
        return tweetsFormated;
      }, (error) => {
        return error;
      });
  }

  deleteTweet(tweet) {
    return this.$http.delete(tweet.selfLink.href);

  }

  getTweetsPage(pageindex) {
    if (pageindex >= this.page.totalPages - 1) {
      return [];
    }

    return this.$http.get(`${ this.url }/tweets?page=` + pageindex + `&size=10&sort=createdDate,desc`)
      .then((response) => {
        let tweetsFormated = [];
        let tweets = response.data._embedded.tweet;
        this.page = response.data.page;
        tweets.forEach((tweet) => {
          let goodTweet = this.constructTweet(tweet);
          tweetsFormated.push(goodTweet);
        });

        return tweetsFormated;
      }, (error) => {
        return error;
      });
  }

  constructTweet(data) {
    return {
      name: data.name,
      message: data.message,
      date: new Date(
        data.createdDate.year,
        data.createdDate.monthValue - 1,
        data.createdDate.dayOfMonth,
        data.createdDate.hour,
        data.createdDate.minute,
        data.createdDate.second
      ),
      selfLink: data._links.self
    }
  }

}
