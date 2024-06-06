# Support Repository for PusherExpoDemo

This repository serves as a support for the [PusherExpoDemo repository](https://github.com/eylonshm/PusherExpoExample). Please ensure you have cloned and installed the [PusherExpoDemo repository](https://github.com/eylonshm/PusherExpoExample) before proceeding.

## How to Run the Server

1. Run `npm install` to install dependencies.
2. Ensure you have created a Pusher account and a Pusher channel.
3. Create a `.env` file at the root level of the project and add the following configuration:
    ```
    PUSHER_APP_ID="Your Pusher App ID"
    PUSHER_KEY="Your Pusher Key"
    PUSHER_SECRET="Your Pusher Secret"
    PUSHER_CLUSTER="Your Pusher Cluster"
    ```
4. Run `npm start` to start the server, and then navigate back to the [PusherExpoDemo repository](https://github.com/eylonshm/PusherExpoExample).
