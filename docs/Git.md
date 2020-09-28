---
layout: post
title: "Git"
categories: [Git]
visible: true
---

# All about git


## - Discarding all local changes in a file
$ git checkout HEAD <filename> __Can't be undone__
## - Restoring a deleted File
$ git checkout HEAD <filename>
## Discarding chunks/lines in a File
$ git checkout -p <filename>
## Discarding all local changes
$ git reset --hard HEAD __Can't be undone__
## Fixing the last commit
$ git commit --amend -m "Correct" __--amend rewrites history!__
## Reverting a commit in the middle
$ git revert <commit_hash>
## Resetting to an old revision
$ git reset --hard <commit_hash>
$ git reset --mixed <commit_hash> __sets your HEAD__
## Resetting a File to an old revision
$ git checkout <commit_hash> -- <filename> __-- means we are not talking about branch__
# Reflog __A journal that logs every movement of the HEAD pointer__
$ git reflog
$ git branch <branch_name> <commit_hash>
## Recovering deleted branch
$ git reflog
$ git branch <branch_name> <commit_hash>
## Moving a commit to a new branch
$ git branch <branch_name>
$ git reset HEAD~1 --hard
## Moving a commit to a different branch
$ git checkout <branch_name>
$ git cherry-pick <hash_commit>
$ git checkout master
$ git reset --hard HEAD~1
# Interactive rebase
- How far you want to go? **_base_**
- $ git rebase -i HEAD~3
## Editing old commit messages
[Fixing the last commit](Fixing-the-last-commit)
$ git rebase -i HEAD~3 _then use_ **reword** _option_
## Deleting old commits __same as above but remove lines from unwanted commits__
## Squashing multiple commits into one
$ git rebase -i HEAD~3 _...then use_ **"squash"** _option_
## Adding a change to an old commit
$ git add <changes>
$ git commit --fixup <commit_hash>
$ git rebase -i HEAD~4 --autosquash __nothing to do in the next step__
## Splitting and Editing an old commit
