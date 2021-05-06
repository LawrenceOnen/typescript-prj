var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//functions
var fname = "Lawrence";
var getName = function (name) {
    return "Your name is:" + name;
};
console.log(getName(fname));
var user = {
    fname: "Lawrence",
    age: 38,
    getMessage: function () {
        return 'Hello ' + fname;
    }
};
var user2 = {
    fname: "Lawrence",
    getMessage: function () {
        return 'Hello ' + fname;
    }
};
/*
* Generic types
*/
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var student = {
    fname: "Lawrence"
};
var reuslt = addId(student);
console.log(reuslt);
