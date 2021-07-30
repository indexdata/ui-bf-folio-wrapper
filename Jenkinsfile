buildNPM {
  publishModDescriptor = false
  npmDeploy = 'no'
  runLint = true
  runSonarqube = true
  runScripts = [
   ['formatjs-compile': ''],
   ['test':'--karma.singleRun --karma.browsers ChromeDocker --karma.reporters mocha junit --coverage'],
  ]
}
