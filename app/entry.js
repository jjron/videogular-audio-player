'use strict';

require('./base.scss');

require('angular').module('myApp',
  [
    'ngSanitize',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
  ]
  )
  .controller('homeCtrl',
  ['$sce', function($sce) {
    this.config = {
      sources: [
        {src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/audios/videogular.mp3'), type: 'audio/mpeg'},
      ],
      theme: {
        url: 'http://www.videogular.com/styles/themes/default/latest/videogular.css',
      },
    };
  }]
);
