#!/bin/bash

# Setup for any server

initAuthbind()
{
    printf "[Script] Setting up authbind... \n.\n.\n."
    sudo apt-get install authbind -y
    sudo touch /etc/authbind/byport/80
    sudo chown node /etc/authbind/byport/80
    sudo chmod 755 /etc/authbind/byport/80
}

initPM2()
{
    printf "[Script] install/updating pm2... \n.\n.\n.\n."
    npm i -g pm2
}

aliasAuthbind()
{
    # Explicitly for pm2
    cmd="alias pm2=authbind --deep pm2" 
    authbind --deep pm2 update
    srcFile= ".aliases"
    echo $cmd >> $srcFile
    source 
}

initAuthbind
initPM2
aliasAuthbind
