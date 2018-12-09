#!/bin/bash

cd /opt && \
  git init --bare identiform_sales.git && \
  git clone identiform_sales.git identiform_sales

cp /root/.scripts/post-receive /opt/identiform_sales.git/hooks
chmod ug+x /opt/identiform_sales.git/hooks/post-receive
cp /root/.scripts/.env /opt/identiform_sales
