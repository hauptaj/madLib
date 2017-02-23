var app = angular.module('myMod');

app.factory('infoFactory', function() { //this is where infoFactory is declared and named

  var storyData = {}; //the purpose of this object is a storage bin

  function setInfo(story) {
    storyData = story;
    console.log(storyData);
    return storyData;
    }

  function getInfo(story) {
    return storyData;
  }

  return {
    setInfo: setInfo,
    getInfo: getInfo
  }

});
