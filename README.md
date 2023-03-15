# Javascript Intro Challenges

This repository holds the vanilla JavaScript pair programming challenges for the 2023 Bravo cohort.

### Process Notes

- Anything wrapped in `< >` is an indication that this will be named uniquely, the `< >` are NOT included in the command
- `$` is an indication of a command line prompt, the `$` is not included
- Anything in `( )` is informational and not included in the command
- The term local/locally means your personal computer.
- The term remote means GitHub.

### Naming Conventions

Branches and file names should be in ***all lowercase letters with no spaces*** :

- Branch name: `topic-initials1-initials2`   
(ex. javascript-intro-ts-cb)
- File name: `topic-name1-name2.md`  
(ex. javascript-intro-trish-charlean.md)

### Informational Commands

Use this informational command to tell you what files have been modified and what phase of the git process you are on:

- $ `git status`

Use this informational command to the branches you have locally on a repo:

- $ `git branch`  

The branch that you are on currently will be denoted with an asterisk.
```bash
* javascript-intro-ts-cb
  main
```
Use this command to see your location within a folder or file, present working directory  
- $ `pwd` 


### Cloning the Repo

Use this command if you don't have the repository (folder) on your local machine:

- $ `git clone <repo-url>` (the url is the https address copied and pasted from the code dropdown button on GitHub)

![Repo-Url](./assets/repo-url.png)


### Create a Branch

Use this command if you need to create a branch that does not exist on either repos locally or remotely:

- $ `git checkout -b <topic-initials1-initials2>`  
(ex. git checkout -b javascript-intro-ts-cb)


### Changing to a Local Branch

Use this command to move to a branch that exists on your local machine:

- $ `git checkout <branch-name>`  
(ex. git checkout javascript-intro-ts-cb)

Best practice is to ensure you update the branch to include any changes made to the branch
- $ `git pull origin <branch-name>`  
(ex. git pull origin javascript-intro-ts-cb)


### Changing to a Remote Branch

Use these commands if the repo you are working on has a branch remotely that is ***NOT on your local machine***:

- $ `git fetch origin <branch-name>`
- $ `git checkout <branch-name>`

Use this command if the repo you are working on has a branch remotely that ***is on your local machine but DON'T have the latest version of the code from GitHub***:
- $ `git pull origin <branch-name>`

### Pushing Local Code to GitHub

Use these commands to add the code you have on your local machine to GitHub:

- $ `git status` 
- $ `git add <file-name>`
- $ `git commit -m "message describing the work that was accomplished"`
- $ `git push origin <branch-name>`


### Deleting a Branch on GitHub

Branches exist on your local machine and on the remote. Always delete your branch in both places.

- Branches in GitHub can be deleted via the GUI


### Deleting a Branch on Local

Branches exist on your local and on the remote. Always delete your branch in both places.

- $ `git checkout main`
- $ `git pull origin main`
- $ `git branch -d <branch-name>`