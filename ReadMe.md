# Emojoe

- GitHub: https://github.com/webjay/emojoe.expo
- Expo: https://expo.dev/accounts/emojoe/projects/emojoe2

## Expo

- `npm run expo upgrade` to upgrade Expo and any relevant packages.
- `npx expo config --type introspect` to check config.
- `npm run eas update` to ship an update.
- `npm run eas build -- --profile preview --platform ios` for internal distribution.

### Links

- `npx uri-scheme open --ios exp://127.0.0.1:19000/--/group/join/927934dd-5bd6-493c-9d1e-cb15f61da6db`

## Amplify

`npm run amplify` ...

- `status` will show you what you've added already and if it's locally configured or deployed.
- `add <category>` will allow you to add features like user login or a backend API.
- `update <category>` will allow you to edit features.
- `push` will build all your local backend resources and provision it in the cloud.
- `console` to open the Ampify Console and view your project status.
- `publish` will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud.
- `pull --envName dev` to get the latest client configuration files.
- `rebuild api --envName dev` to recreate ALL of the tables backing models in your schema. ALL DATA in ALL TABLES will be deleted.

### Schema

    amplify/backend/api/doapp/schema.graphql

### Hacks

- sync failure: https://github.com/aws-amplify/amplify-adminui/issues/495#issuecomment-1061205308
