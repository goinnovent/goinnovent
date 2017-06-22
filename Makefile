serve:
	browser-sync start --server '_site' --files '_site'

deploy:
	jekyll build && now _site/

.PHONY: serve, deploy
