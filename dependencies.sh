#!/bin/sh

# Install dev dependencies
apt-get -y update && apt-get install -y wget default-jre

# Download allure report
wget -c https://github.com/allure-framework/allure2/releases/download/2.31.0/allure_2.31.0-1_all.deb

# Install allure report
dpkg -i allure_2.31.0-1_all.deb

# Check allure report version
allure --version
