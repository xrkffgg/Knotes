set -e
git add -A
git commit -m 'auto: commit & push'
git push origin master

yarn build

cd ..
rm -rf xrkffgg.github.io/Knotes/
cp -a Knotes/Knotes/ xrkffgg.github.io/Knotes/

cd xrkffgg.github.io/
git add -A
git commit -m 'auto: update Knotes'
git push origin master