module.exports = {
  VCAP_SERVICES: JSON.stringify({
   // Natural Language Classifier service credentials
   natural_language_classifier: [{
     credentials: {
       url: 'https://gateway.watsonplatform.net/natural-language-classifier/api',
       username: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
       password: 'xxxxxxxxxxxx'
     }
   }],
   // Tone Analyzer service credentials
   tone_analyzer: [{
     credentials: {
       url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
       username: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
       password: 'xxxxxxxxxxxx'
     }
   }],
   // Personality Insights service credentials
   personality_insights: [{
     credentials: {
       url: 'https://gateway.watsonplatform.net/personality-insights/api',
       username: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
       password: 'xxxxxxxxxxxx'
     }
   }]
  }),
  // Twitter app OAuth credentials
  TWITTER: JSON.stringify([{
    consumer_key: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    consumer_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }]),
  // Twitter search key (eg. @mybrand)
  TWITTER_TOPIC: 'xxxxxxxxxxxxx',
  // Natural Language Classifier ID
  CLASSIFIER_ID: 'xxxxxxxxx-xxx-xxxx',
  // AlchemyAPI service credentials
  ALCHEMY_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  DEBUG: 'scc:*'
};
