# git merge vs git rebase

Plots taken from [Atlassian tutorial](https://www.atlassian.com/git/tutorials/merging-vs-rebasing). 

run `./initial_commit.sh` will generate commit tree as the following: 

```aidl
* 7e90bb3 - feature code 3 - siliconion (feature_c)
* b984b46 - feature code 2 - siliconion
* e9f7506 - feature code 1 - siliconion
| * d821665 - feature code 3 - siliconion (feature_nc)
| * 16c0243 - feature code 2 - siliconion
| * 487b5f8 - feature code 1 - siliconion
|/  
| * d7e8e8c - main code 3 - siliconion (HEAD -> master)
| * baffad6 - main code 2 - siliconion
|/  
* 17f51f4 - main code 1 - siliconion
* 098b222 - initial commit - siliconion
```

where `feature_c` branch contains conflicting commits, and `feature_nc` contains non-conflicting commits. 