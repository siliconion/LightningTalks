# git merge vs git rebase

Plots taken from [Atlassian tutorial](https://www.atlassian.com/git/tutorials/merging-vs-rebasing). 

run `./initial_commit.sh` will generate commit tree as the following: 

```aidl
* [2018-10-01] [1826832] | create conflicting feature, commit 3   (feature_c)
* [2018-10-01] [bdbd4e0] | create conflicting feature, commit 2
* [2018-10-01] [34f95e4] | create conflicting feature, commit 1
| * [2018-10-01] [822987e] | create non-conflicting feature, commit 3   (feature_nc)
| * [2018-10-01] [313ce51] | create non-conflicting feature, commit 2
| * [2018-10-01] [d8b0e00] | create non-conflicting feature, commit 1
|/
| * [2018-10-01] [a99e567] | create main commit 3   (HEAD -> master)
| * [2018-10-01] [89dc77a] | create main commit 2
|/
* [2018-10-01] [338ac40] | create main commit 1
* [2018-10-01] [d9cae3d] | initial commit
```

where `feature_c` branch contains conflicting commits, and `feature_nc` contains non-conflicting commits. 

To try merge for commits that don't have merge conflicts, do
```$xslt
git checkout feature_nc
git merge master
```

To try merge for commits that don't have merge conflicts, do
```$xslt
git checkout feature_nc
git rebase master
```

To try merge for commits that do have merge conflicts, do
```$xslt
git checkout feature_c
git merge master
```
You will encounter merge conflict once.

To try merge for commits that do have merge conflicts, do
```$xslt
git checkout feature_c
git rebase master
```
You will encounter merge conflict 2 to 3 times. 

