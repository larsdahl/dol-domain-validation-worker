const jsoncontent = `{
  "applinks": {
    "apps": ["RN45F2FWY7.com.dol-sensors.smartadjust", "B72VU8WM6T.com.dol-sensors.smartadjust"],
    "details": [
      {
        "appID": "RN45F2FWY7.com.dol-sensors.smartadjust",
        "paths": ["/Apps"]
      },
      {
        "appID": "B72VU8WM6T.com.dol-sensors.smartadjust",
        "paths": ["/Apps"]
      }
    ]
  }
 }`;

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response(jsoncontent, {
    headers: { 'content-type': 'application/json' },
  })
}
