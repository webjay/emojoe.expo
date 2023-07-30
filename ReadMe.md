# Emojoe

- GitHub: https://github.com/webjay/emojoe.expo
- Expo: https://expo.dev/accounts/emojoe/projects/emojoe2
- Sentry: https://webcomdk.sentry.io/issues/?project=4504628449116160

## Expo

- `npx expo-doctor` to check health.
- `npx expo install --fix` to upgrade all dependencies to match Expo SDK.

### Deploy

- Bump `expo.version`, `expo.ios.buildNumber` and `expo.android.versionCode` in `app.json`.
- `npx eas build`
- `npx eas submit`
- `git push` for the web app, handled by Amplify.

### Links

- `npx uri-scheme open --ios exp://127.0.0.1:8081/--/group/df1d0023-1814-434e-8ab1-f4fd5a526392/join`

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

    amplify/backend/api/emojoeexpo/schema.graphql

### Hacks

- sync failure: https://github.com/aws-amplify/amplify-adminui/issues/495#issuecomment-1061205308
