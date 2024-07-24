# Genezio

> Deploy Nitro apps to Genezio.

**Preset:** `genezio`

:read-more{title="Genezio" to="https://genezio.com"}

# Project Setup

## 1. Install genezio CLI globally

```bash
npm install genezio -g
```

## 2. Login to the Genezio cloud

```bash
genezio login
```
**Note**: To install the Genezio CLI you must have Node.JS >= 18.2

**Note**: If you are experiencing permission-denied errors on Windows, run the command below in Powershell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Build and deploy
#### Build your Nitro project using the `Genezio` preset:
```bash
npx nitro build --preset genezio
```
Building the project will automatically create a default `genezio.yaml` configuration file, if it doesn't already exist. To further customize the file to your needs, you can consult the
[official documentation](https://genezio.com/docs/project-structure/genezio-configuration-file/).

## 3. Deploy your project

Finally, deploy your project. A browser window will open, and you will be prompted to log in to your Genezio account and authorize the CLI to make the deployment.
Run the following command in your terminal:

```bash
genezio deploy
```

If your application use environment variables, you can deploy them using the following command:

```bash
genezio deploy --env <path-to-your-env-file>
```

:::info
You need to deploy your environment variables single time.
After that, you can deploy your project without the `--env` flag.
:::

For more information about environment variables, you can check the [official documentation](/docs/project-structure/backend-environment-variables.md).

## 4. Test your app

After deploying your application, you can test it to ensure it's running correctly. To verify that your Express.js app is working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.
