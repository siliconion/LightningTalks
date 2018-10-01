./cleanup.sh

git init
git add .
git commit -m "initial commit"

cp src/master_1.js ./main.js
git add .
git commit -m "create main commit 1"

git co -b feature_nc

cp src/feature_nc_1.js ./main.js
git add .
git commit -m "create non-conflicting feature, commit 1"

cp src/feature_nc_2.js ./main.js
git add .
git commit -m "create non-conflicting feature, commit 2"

cp src/feature_nc_3.js ./main.js
git add .
git commit -m "create non-conflicting feature, commit 3"

git co master
git co -b feature_c

cp src/feature_c_1.js ./main.js
git add .
git commit -m "create conflicting feature, commit 1"

cp src/feature_c_2.js ./main.js
git add .
git commit -m "create conflicting feature, commit 2"

cp src/feature_c_3.js ./main.js
git add .
git commit -m "create conflicting feature, commit 3"

git co master

cp src/master_2.js ./main.js
git add .
git commit -m "create main commit 2"

cp src/master_3.js ./main.js
git add .
git commit -m "create main commit 3"
