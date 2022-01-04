Before you can set up Firebase Hosting, you need to create a Firebase project.

Step 1: Install the Firebase CLI
Visit the Firebase CLI documentation to learn how to install the CLI or update to its latest version.

Step 2: Initialize your project
To connect your local project to your Firebase project, run the following command from the root of your local project directory:

firebase init

During project initialization, from the Firebase CLI prompts:

Select to set up Hosting.

If you want to set up other Firebase products for your project, refer to their documentation for setup information. Note that you can always run firebase init later to set up more Firebase products.

Select a Firebase project to connect to your local project directory.

The selected Firebase project is your "default" Firebase project for your local project directory. To connect additional Firebase projects to your local project directory, set up project aliases.

Specify a directory to use as your public root directory.

This directory contains all your publicly served static files, including your index.html file and any other assets that you want to deploy to Firebase Hosting.

The default for the public root directory is called public.

You can specify your public root directory now or you can specify it later in your firebase.json configuration file.

If you select the default and don't already have a directory called public, Firebase creates it for you.

If you don't already have a valid index.html file or 404.html file in your public root directory, Firebase creates them for you.

Choose a configuration for your site.

If you select to make a one-page app, then Firebase automatically adds rewrite configurations for you.

At the end of initialization, Firebase automatically creates and adds two files to the root of your local app directory:

A firebase.json configuration file that lists your project configuration. Learn more about this file on the configure hosting behavior page.

A .firebaserc file that stores your project aliases.

Step 3: Deploy to your site
To deploy to your site, run the following command from the root of your local project directory:

firebase deploy

This command deploys a release to your Firebase project's default Hosting sites:

projectID.web.app
projectID.firebaseapp.com



Documentation from this link : https://firebase.google.com/docs/hosting/quickstart