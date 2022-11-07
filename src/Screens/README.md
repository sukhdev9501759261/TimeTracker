# Timer Tracker 

## Setup

Welcome! Before you get coding, there's a few setup-related tasks to complete. Specifically, you'll have to **1) install necessary development tools**, **2) configure your workflow**

### 0) Upgrade your machine, package managers

Make sure your computer is up to date! For MacOS/Linux, we highly recommend installing packages with [Homebrew](https://brew.sh/)

### 1) Devtools

The first step is making sure your computer has the necessary development software to run iOS and Android simulators.

#### brew (MacOS/Linux only)

Make sure `yarn` is installed

`brew install yarn`

Make sure `cocoapods` is installed

`brew install cocoapods`

Follow the instructions on React Native's docs [here](https://reactnative.dev/docs/environment-setup) under "React Native CLI Quickstart", being sure to follow directions for _your operating system_, for _both target operating systems_ (iOS and Android). **Skip the step about installing cocoapods, as you already installed it**. Stop upon reaching the section "Creating a new application", as our project already exists.

Windows users wishing to develop on iOS will have spin up a virtual Mac (through something like VirtualBox, free, or VMWare Workstation, paid). An alternative solution is to build a "Hackintosh". Unfortunately, none of these solutions are particularly ideal. If this is a major concern, please voice it to the team!

## My system cofigigurations

Node: 14.17.3
react: 18.1.0 
react-native: 0.70.1 
CocoaPods: 1.11.3

How to run project

IOS instruction
1. You need to install NPM 
2. Go to ios folder and install pod
3. Open workspace file from ios folder 
4. Run project from xcode

Android instruction
1. Install NPM
2. Run command react-native run-android

 
All project work is done in TimeTracker(src/Screens/TimeTracker) file (rest all other is basic setup)

Thanks