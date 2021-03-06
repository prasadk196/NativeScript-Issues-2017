"use strict";
var camera = require("nativescript-camera");
var permsPlugin = require("nativescript-permissions");
var REQUEST_REQUIRED_PERMISSIONS = 1234;
function navigatingTo(args) {
    var page = args.object;
    permsPlugin.requestPermissions(["android.permission.WRITE_EXTERNAL_STORAGE"]);
}
exports.navigatingTo = navigatingTo;
function takePhoto() {
    camera.requestPermissions();
    setTimeout(function () {
        camera.takePicture().then(function (res) {
            console.log(res);
        });
    }, 500);
}
exports.takePhoto = takePhoto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSw0Q0FBOEM7QUFHOUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFHdEQsSUFBSSw0QkFBNEIsR0FBRyxJQUFJLENBQUM7QUFFeEMsc0JBQTZCLElBQWU7SUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU3QixXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUE7QUFDakYsQ0FBQztBQUpELG9DQUlDO0FBRUQ7SUFDSSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUU1QixVQUFVLENBQUM7UUFDUCxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osQ0FBQztBQVJELDhCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25Nb2R1bGUgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbnZhciBwZXJtc1BsdWdpbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIik7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcbnZhciBSRVFVRVNUX1JFUVVJUkVEX1BFUk1JU1NJT05TID0gMTIzNDtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgcGVybXNQbHVnaW4ucmVxdWVzdFBlcm1pc3Npb25zKFtcImFuZHJvaWQucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFXCJdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFrZVBob3RvKCkge1xuICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9KVxuICAgIH0sIDUwMCk7XG59XG4iXX0=