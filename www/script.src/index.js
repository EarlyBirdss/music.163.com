(function() {
    "use strict";

    var musicApp = angular.module("musicApp", []);

    musicApp.controller("topBarCtrl", ["$scope", function($scope) {
        $scope.navList = [{
            index: 0,
            txt: "发现音乐",
            subNav: [{
                index: 0,
                txt: "推荐"
            }, {
                index: 1,
                txt: "排行榜"
            }, {
                index: 2,
                txt: "歌单"
            }, {
                index: 3,
                txt: "主播电台"
            }, {
                index: 4,
                txt: "歌手"
            }, {
                index: 5,
                txt: "新碟上架"
            }]
        }, {
            index: 2,
            txt: "我的音乐"
        }, {
            index: 3,
            txt: "朋友"
        }, {
            index: 4,
            txt: "下载客服端"
        }];
        $scope.loginChoiceList = [{
            icoSrc: "",
            txt: "手机号登录",
            canUserd: true
        }, {
            icoSrc: "",
            txt: "微信号登录",
            canUserd: true
        }, {
            icoSrc: "",
            txt: "QQ号登录",
            canUserd: true
        }, {
            icoSrc: "",
            txt: "新浪微博登录",
            canUserd: true
        }, {
            icoSrc: "",
            txt: "网易邮箱登录",
            canUserd: true
        }];
        $scope.showedLoginPop = false;
    }]);


}());
