// Get User Tweet timeline by user ID
// https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/quick-start

const needle = require('needle');

// this is the ID for @TwitterDev
const userId = '794104607131795456';
const url = `https://api.twitter.com/2/users/${userId}/tweets`;

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const bearerToken = process.env.TWITTER_BEARER_TOKEN;

const getUserTweets = async () => {
  let userTweets = [];

  // we request the author_id expansion so that we can print out the user name later
  let params = {
    max_results: 20,
    'tweet.fields': 'created_at',
    expansions: 'author_id'
  };

  const options = {
    headers: {
      'User-Agent': 'v2UserTweetsJS',
      authorization: `Bearer ${bearerToken}`
    }
  };

  let hasNextPage = true;
  let nextToken = null;
  let userName;
  // console.log('Retrieving Tweets...');

  while (hasNextPage) {
    let resp = await getPage(params, options, nextToken);
    if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {
      userName = resp.includes.users[0].username;
      if (resp.data) {
        userTweets.push.apply(userTweets, resp.data);
        hasNextPage = false; // TODO TEMP - added here as function timed out in testing
      }
      if (resp.meta.next_token) {
        nextToken = resp.meta.next_token;
        hasNextPage = false; // TODO TEMP - added here as function timed out in testing
      } else {
        hasNextPage = false;
      }
    } else {
      hasNextPage = false;
    }
  }

  return userTweets;
};

const getPage = async (params, options, nextToken) => {
  if (nextToken) {
    params.pagination_token = nextToken;
  }

  try {
    const resp = await needle('get', url, params, options);

    if (resp.statusCode != 200) {
      console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
      return;
    }
    return resp.body;
  } catch (err) {
    throw new Error(`Request failed: ${err}`);
  }
};

exports.handler = async (event, context) => {
  // fetch the API
  const res = await getUserTweets();

  // return the result
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  };
};
