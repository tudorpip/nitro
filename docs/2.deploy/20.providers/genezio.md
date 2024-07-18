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
#### Deploy your project:
```bash
genezio deploy
```
