#!/bin/bash

set -e
IFS='|'

REACTCONFIG="{\
\"SourceDir\":\"src\",\
\"DistributionDir\":\"dist\",\
\"BuildCommand\":\"npm run-script build\",\
\"StartCommand\":\"npm run-script start\"\
}"

AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\
\"profileName\":\"default\",\
\"accessKeyId\":\"${AWS_ACCESS_KEY_ID}\",\
\"secretAccessKey\":\"${AWS_SECRET_ACCESS_KEY}\",\
\"region\":\"eu-central-1\"\
}"

AMPLIFY="{\
\"projectName\":\"emojoeexpo\",\
\"appId\":\"d249ll2h4fem2z\",\
\"envName\":\"dev\",\
\"defaultEditor\":\"code\"\
}"

FRONTEND="{\
\"frontend\":\"javascript\",\
\"framework\":\"react-native\",\
\"config\":$REACTCONFIG}"

PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG}"

npm run amplify pull -- --providers $PROVIDERS --amplify $AMPLIFY --frontend $FRONTEND --yes
