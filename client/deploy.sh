#!/usr/bin/env sh

# abort on errors
set -e

# create a umbler branch based on master
git checkout -b umbler

# copy server files to root folder
cd server/
cp -R * ../

#back to root folder
cd ../

# build vue and mv dist to root folder
cd client/
npm i
npm run build
mv dist/ ../src/public

#back to root folder
cd ../

# remove server and client folders
rm -rf server/ client/ node_modules/

# does the deploy
git add --all
git commit -m 'deploy'
git push --force umbler umbler:master

# back to branch develop
git checkout master

# remove heroku local branch
git branch -D umbler