#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , credits     = require('./credits')
    , menu        = require('./exercises/menu')

    , name        = 'learnyounode'
    , title       = 'Aprendiendo NODE.JS!'
    , subtitle    = '\x1b[23mElije un ejercicio y presiona \x1b[3mEnter\x1b[23m para empezar'


function fpath (f) {
  return path.join(__dirname, f)
}


workshopper({
    name        : name
  , title       : title
  , subtitle    : subtitle
  , exerciseDir : fpath('./exercises/')
  , appDir      : __dirname
  , helpFile    : fpath('help.txt')
  , menuItems   : [ {
        name    : 'credits'
      , handler : credits
    } ]
})
