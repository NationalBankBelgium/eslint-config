#!/usr/bin/env bash

set -u -e -o pipefail

readonly currentDir=$(cd $(dirname $0); pwd)
readonly distFolder=${currentDir}/dist

export NODE_PATH=${NODE_PATH:-}:${currentDir}/node_modules
VERBOSE=false
TRACE=false

source ${currentDir}/scripts/ci/_ghactions-group.sh
source ${currentDir}/util-functions.sh

ghActionsGroupStart "clean dist" "no-xtrace"
rm -rf ${distFolder}
ghActionsGroupEnd "clean dist"

mkdir -p ${distFolder}

ghActionsGroupStart "build package" "no-xtrace"

logInfo "Copy essential files in dist"
syncOptions=(-a --include="README.md" --include="LICENSE" --include="package.json" --exclude="*" --exclude="**/*")
syncFiles ${currentDir} ${distFolder} "${syncOptions[@]}"
unset syncOptions

logInfo "Copy src content in dist"
syncOptions=(-a)
syncFiles "${currentDir}/src" ${distFolder} "${syncOptions[@]}"
unset syncOptions

logInfo "Generate npm package (tgz file)"
cd ${distFolder} > /dev/null
npm pack ./

ghActionsGroupEnd "build package"
