/* global PhotoEditorSDK, Image, LibraryProvider, PhotoRollProvider */
window.addEventListener('load', function () {
  setTimeout(function () {
    window.runEditor = function () {
      var options = PhotoEditorSDK.Utils.deepDefaults(
        JSON.unflatten(window.editorConfig),
        {
          container: document.querySelector('#container'),
          editor: {
            image: myImage,
            watermarkImage: watermarkImage,
            controlsOptions: {
              library: {
                provider: LibraryProvider
              },
            }
          },
          photoRoll: {
            provider: PhotoRollProvider
          }
        }
      )
      // options.crossOrigin = 'none'
      options.assets.baseUrl = 'https://pesdk-html5-cors-eg.s3.eu-central-1.amazonaws.com/assets'
      options.editor.controlsOptions.overlay = {}
      options.editor.controlsOptions.overlay.overlays = [{
        identifier: 'imgly_overlay_golden',
        defaultName: 'Golden',
        image: 'overlays/imgly_overlay_golden.jpg',
        thumbnail: 'overlays/imgly_overlay_golden_thumb.jpg',
        blendMode: 'lighten'
      }]
      options.editor.controlsOptions.overlay.replaceOverlays = true
      window.editor = (function () {
        switch (options.ui.type) {
          case 'reactui': return new PhotoEditorSDK.UI.ReactUI(options)
          case 'desktopui': return new PhotoEditorSDK.UI.DesktopUI(options)
        }
      })()
    }

    /**
     * Watermark
     */

    function isPresent (str) {
      return (str.length && str.length > 0)
    }

    var watermarkImage = null
    var myImage = null

    var resources = []
    if (isPresent(window.editorConfig['data.imageSrc'])) {
      resources.push(
        PhotoEditorSDK
          .Loaders.ImageLoader
          .load(window.editorConfig['data.imageSrc'])
      )
    }
    if (isPresent(window.editorConfig['data.watermarkImageSrc'])) {
      resources.push(
        PhotoEditorSDK
          .Loaders.ImageLoader
          .load(window.editorConfig['data.watermarkImageSrc'])
      )
    }
    PhotoEditorSDK.Promise.all(resources)
      .then(function (result) {
        myImage = result[0]
        watermarkImage = result[1]
        window.runEditor()
      }).catch(function (error) {
        console.log(error.message)
      })
  }, 1000)
})
