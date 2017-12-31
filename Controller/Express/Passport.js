/**
 * Requires
 */
var express = require('express');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


module.exports = function(app){
    
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(path.join(__dirname, '../View/public')));

    /**
     * Passport Config
     */
    /* var User = require('../Model/db_models/User');
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser()); */



}