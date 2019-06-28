# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
-  swiping

## [0.6.0] - 2019-06-25 
### Added
- minor release for cache headers

### Changed
- defering fonts and icons

### After-release
- fonts, icons cache headers are missed in this release.
- no noticable changes in lighthouse and webpage test results


## [0.5.0] - 2019-06-24
### Added
- Bundles and optimization
- lazy route added
- vendor chunk added(in client angular.json)

### Fixed
- prerender removing source map(in server angular.json)

### Removed
- removing ng material from angular json, theme;
- footer removed

### After-release
- performance is drastically increased. performance is 80-90 consistently and PWA is 100/100 😍😊


## [0.4.0] - 2019-06-23
### Changed
- evaluating MDC web instead of angular/material and the initial integration is successful.
- Firebase deployment id - ea3dd3

### Issues Faced
- SSR/Prerender broke initially because of mdc's window reference - workaround is while initializing mdcomponents checking for whether it is a server environment.
- mdc styles import in scss @Material gave error in the build:client-and-server-bundles script particularly in the server build - added style preprocessors node_modules for it.
sticky tabs is implemented(after a lot of frustation) but implementation can be improved.

### After release comments
- Lighthouse audit looks fine PWA -100/100 ; perfomance: 70(first run)55(second run)77(third run)
- Prerender styling is aso much bette


## [0.3.0] - 2019-06-13
### Added
- v8 upgrade
- using showhide custom css

### Fixed
- improved the prerender styling in home page, same will be implemented through the app.


## [0.2.0] - 2019-06-08
### Added
- Integrated flex-layout
- ngsw hash script added to pkg json
- search page added but no functionality is added

### Changed
- scss refactoring


## [0.1.0] - 2019-05-30
### Added
- added ngsw and caching support. ngsw manifest corrected