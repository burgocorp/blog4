

const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){


    let errors = {};

    data.username = !isEmpty(data.username)? data.username : '';
    data.email = !isEmpty(data.email)? data.email : '';
    data.password = !isEmpty(data.password)? data.password : '';
    data.password2 = !isEmpty(data.password2)? data.password2 : '';


    //1.
    if(!validator.isLength(data.username, {min : 2, max : 30})){
        errors.username = 'name must be between 2 and 30 characters';
    }
    //2.
    if(validator.isEmpty(data.username)){
        errors.username = 'name field is required';
    }
    //.3
    if(validator.isEmpty(data.email)){
        errors.email = 'email field is required';
    }
    //.4
    if(validator.isEmpty(data.password)){
        errors.password = 'password field is required';
    }
    //5.
    if(validator.isEmpty(data.password2)){
        errors.password2 = 'confirm password field is required';
    }
    //.6
    if(!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    //.7
    if(!validator.isLength(data.password, {min : 8, max : 12})){
        errors.password = 'password must be between 9 and 12';
    }
    //.8
    if(!validator.equals(data.password, data.password2)){
        errors.password2 = 'password must be match';
    }

    return{
        errors,
        invalid : isEmpty(errors)
    };


};