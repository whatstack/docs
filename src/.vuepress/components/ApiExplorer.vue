<template>
  <div>
    <div id='swagger-ui'></div>
  </div>
</template>

<script>
  export default {
    mounted () {
      const OPENAPI_URL = '/api/latest/whatstack-openapi-definition.yaml'

      const script = document.createElement('script')
      script.setAttribute('src', '/js/swagger-viewer.bundle.js')
      script.onload = () => { loadUi() }
      document.head.appendChild(script)

      function loadUi () {
        const ui = SwaggerUIBundle({
          url: OPENAPI_URL,
          dom_id: '#swagger-ui',
          deepLinking: true,
          displayOperationId: true,
          displayRequestDuration: false,
          defaultModelsExpandDepth: 0,
          defaultModelExpandDepth: 0,
          showExtensions: false,
          filter: false,
          operationsSorter: 'alpha',
          tagsSorter: 'alpha',
          tryItOutEnabled: true,
          syntaxHighlight: {
            activate: true,
            theme: 'agate',
          },
          presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
          plugins: [
            SwaggerUIBundle.plugins.DownloadUrl,
            {
              statePlugins: {
                spec: {
                  wrapActions: {
                    updateJsonSpec: function (oriAction, system) {
                      return (spec) => {
                        // Replace API URL with local in dev mode
                        const urlParams = new URLSearchParams(window.location.search)
                        const devmode = urlParams.get('dev')
                        if (
                          window.location.host.indexOf('localhost', 0) > -1 ||
                          window.location.host.indexOf('gme', 0) > -1 ||
                          devmode === 'true'
                        ) {
                          // change spec.servers here to add new entry, use concat to put it as the first & default one
                          spec.servers = [
                            {
                              url: 'https://gme-dev-api.ngrok.io/api/v1.0',
                              description: 'Development Environment',
                            }
                          ].concat(spec.servers || [])
                          // Show server list
                          var checkExist = setInterval(function () {
                            if (document.querySelector('.information-container') !== null) {
                              clearInterval(checkExist)
                              // Show containers
                              document.querySelector('.information-container').style.display = 'block'
                              document.querySelector('.scheme-container').style.display = 'block'
                            }
                          }, 100); // check every 100ms
                        }
                        return oriAction(spec)
                      };
                    },
                  },
                },
              },
            },
          ],
          // To make the open api file url visible, add:
          // layout: 'StandaloneLayout'
        })
        window.ui = ui
      }
    }
  }
</script>

<style scoped></style>