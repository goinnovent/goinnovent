serve:
	browser-sync start --server '_site' --files '_site'

deploy:
	jekyll build && now _site/

images:
	imagemin images/* --out-dir=images
	imagemin images/heroes/* --out-dir=images/heroes

.PHONY: serve, deploy, images
