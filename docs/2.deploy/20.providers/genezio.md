# Genezio

> Deploy Nitro apps to Genezio.

**Preset:** `genezio`

:read-more{title="Genezio" to="https://genezio.com"}

# Project Setup

## 1. Install genezio CLI globally

```bash
npm install genezio -g
```

## Build and deploy

#### Build your Nitro project using the `Genezio` preset:

```bash
nitro build --preset genezio
```

Building the project will automatically create a default `genezio.yaml` configuration file, if it doesn't already exist.

To further customize the file to your needs, you can consult the
[official documentation](https://genezio.com/docs/project-structure/genezio-configuration-file/).

## 2. Deploy your project

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

For more information about environment variables, you can check the [official documentation](https://genezio.com/docs/project-structure/backend-environment-variables).

## 3. Test your app

After deploying your application, you can test it to ensure it's running correctly. To verify that your Nitro.js app is working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.
