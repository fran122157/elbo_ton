const http = require('http');

// Initialize using signing secret from environment variables
const { createEventAdapter } = require('@slack/events-api');
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const port = process.env.PORT || 3000;

// Initialize an Express application
const express = require('express');
const app = express();

// Mount the event handler on a route
// NOTE: you must mount to a path that matches the Request URL that was configured earlier
app.use('/slack/events', slackEvents.expressMiddleware());

app.post('/slack/commands', (req, res) => {
    res.status(200).send('SI SE ÑOR');
})

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on('message', (event)=> {
  console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// Start the express application
http.createServer(app).listen(port, () => {
  console.log(`server listening on port ${port}`);
});