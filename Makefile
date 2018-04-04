
# Must have `sentry-cli` installed globally
# Following variable must be passed in
#  SENTRY_AUTH_TOKEN

SENTRY_ORG=testorg-az
SENTRY_PROJECT=ember
VERSION=`sentry-cli releases propose-version`

setup_release: upload_sourcemaps associate_commits

#This task will create a new Release and upload sourcemaps
upload_sourcemaps:
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files \
		$(VERSION) upload-sourcemaps --url-prefix "~/assets" --validate dist/assets
		
#This task will associate commit info to the release that was just created
associate_commits:
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) set-commits --auto $(VERSION)

