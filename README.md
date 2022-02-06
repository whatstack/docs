[![license](https://img.shields.io/badge/License-UNLICENSED-red?style=flat)](./LICENSE.md)
[![security policy](https://img.shields.io/badge/policy-SECURITY.md-red)](/SECURITY.md)
[![](https://img.shields.io/badge/semver-2.0.0-informational)](https://semver.org)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/whatstack/docs)

# 👋 WhatStack documentation website repository 

## ABSTRACT
This repository hosts the contents of the [WhatStack documentation](https://docs.whatstack.io) website.

## 🚀 CONTRIBUTE

### Run locally

```sh
# Clone this repo
git clone https://github.com/whatstack/docs.git
# Install dependencies
npm install
# Start VuePress in developer mode
npm run dev
```

### CI/CD
Deployment is automated by the [cicd](./.github/workflows/cicd.yml) GitHub Action:
1. Checkout the `main` branch when a push is detected
2. Build the static assets using the [VuePress](https://vuepress.vuejs.org/) `build` command and commit changes
3. Push changes to the `published` branch
4. Deploy `/dist` to Azure Static Website

## 📃 Change Log
See [CHANGELOG](./CHANGELOG.md).

## 🔐 Security Policy
See [SECURITY](./SECURITY.md).

## © License
See [LICENSE](./LICENSE.md).
