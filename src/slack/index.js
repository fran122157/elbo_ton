import { createEventAdapter } from '@slack/events-api';
import commandsHandler from './commands';

export default (app) => {
    // Initialize using signing secret from environment variables
    const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);

    // Mount the event handler on a route
    // NOTE: you must mount to a path that matches the Request URL that was configured earlier
    app.use('/slack/events', slackEvents.expressMiddleware());

    app.post('/slack/commands', commandsHandler);

    // Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
    slackEvents.on('message', (event)=> {
        console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
    });
  
    // Handle errors (see `errorCodes` export)
    slackEvents.on('error', console.error);

}