"use strict";
var main_view_model_1 = require("./main-view-model");
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxxREFBb0Q7QUFFcEQsc0JBQTZCLElBQWU7SUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ2hELENBQUM7QUFKRCxvQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG59Il19