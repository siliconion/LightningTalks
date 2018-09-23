./cleanup.sh

git init
echo "git test" > main.js
git add .
git commit -m "initial commit"

./add_commit.sh main.js "main code 1"

git co -b feature_c
./add_commit.sh main.js "feature code 1"
./add_commit.sh main.js "feature code 2"
./add_commit.sh main.js "feature code 3"

git co master
git co -b feature_nc
./add_commit.sh feature.js "feature code 1"
./add_commit.sh feature.js "feature code 2"
./add_commit.sh feature.js "feature code 3"

git co master
./add_commit.sh main.js "main code 2"
./add_commit.sh main.js "main code 3"
