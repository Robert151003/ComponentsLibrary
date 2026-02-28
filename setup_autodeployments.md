Create a new directory with file name and directory names `.github\workflows\deploy.yml`

in this yml, put:
`name: Deploy Next.js Static Site

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment: Hostinger

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build static export
        run: npm run build

      - name: Upload to Hostinger via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.HOSTINGER_HOST }}
          username: ${{ secrets.HOSTINGER_USERNAME }}
          password: ${{ secrets.HOSTINGER_PASSWORD }}
          local-dir: out/
          server-dir: ${{ secrets.HOSTINGER_PATH }}
          port: ${{ secrets.HOSTINGER_PORT }}
          protocol: ftp`

Go to the environment secrets of the repository on git, create a new environment called `Hostinger` and create the relevant secrets.
Go to Hostinger and update these env secrets with the relevant info. (Port is 21)

When website created on hostinger, update the secrets here: https://github.com/Robert151003/ComponentsLibrary/settings/environments/12543379442/edit
