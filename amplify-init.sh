#!/bin/bash

set -e

AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\
\"accessKeyId\":\"${AWS_ACCESS_KEY_ID}\",\
\"secretAccessKey\":\"${AWS_SECRET_ACCESS_KEY}\",\
\"region\":\"eu-central-1\"\
}"

AMPLIFY="{\
\"projectName\":\"emojoeexpo\",\
\"appId\":\"d249ll2h4fem2z\",\
\"envName\":\"dev\"\
}"

FRONTEND="{\
\"frontend\":\"javascript\",\
\"framework\":\"react-native\",\
\"config\":$REACTCONFIG}"

PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG}"

AUTHCONFIG="{\
\"googleAppIdUserPool\": \"${AMPLIFY_GOOGLE_CLIENT_ID}\",\
\"googleAppSecretUserPool\": \"${AMPLIFY_GOOGLE_CLIENT_SECRET}\"\
}"

CATEGORIES="{\
\"auth\":$AUTHCONFIG}"

npm run amplify init -- --providers $PROVIDERS --amplify $AMPLIFY --categories $CATEGORIES --yes
