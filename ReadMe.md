# Do

- GitHub: https://github.com/doitwithsamagain/app
- Amplify Studio: https://eu-central-1.admin.amplifyapp.com/admin/d11lva892bavia/dev/home
- Expo: https://expo.dev/accounts/doitwithsamagain/projects/do

## Expo

- `npm run expo upgrade` to upgrade Expo and any relevant packages.
- `npx expo config --type introspect` to check config.
- `npm run eas update` to ship an update.

## Amplify

`npm run amplify` ...

- `status` will show you what you've added already and if it's locally configured or deployed.
- `add <category>` will allow you to add features like user login or a backend API.
- `update <category>` will allow you to edit features.
- `push` will build all your local backend resources and provision it in the cloud.
- `console` to open the Ampify Console and view your project status.
- `publish` will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud.
- `pull --appId d11lva892bavia --envName dev` to get the latest client configuration files.
- `rebuild api --envName dev` to recreate ALL of the tables backing models in your schema. ALL DATA in ALL TABLES will be deleted.

### Schema

    amplify/backend/api/doitwithsamagain/schema.graphql

### Hacks

- sync failure: https://github.com/aws-amplify/amplify-adminui/issues/495#issuecomment-1061205308
