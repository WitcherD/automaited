## backend

- Simple .net 6 grpc-web server.
- References .proto contracts using `Grpc.Tools` package for automatic code generating.
- Exposes http endpoint only. Port `5000` for docker deployment and `5001` for standalone. 
- Default `dockerfile` with a single `sdk` base image (without final `runtime` image)
- `GET /healthz` for checking service availability.
- No authorization, monitoring etc.

## firefox extension

- `npx webpack` to build the extension and put the bundle into `/dist` folder.
- No development/production environments. GRPC endpoint is hardcoded in `background.ts`. No popups, inputs or other UI elements for configuration.
- No automatic reinstallation during development process. 
- To update GRPC contracts [follow instruction](/extension/readme.md).
- Subscription for `browser.tabs.onActivated` event only. The server will not be notified when URL is being changed in the active tab.
- No errors handling

## tests 

Kreya project to manually test grpc-web endpoints in the UI tool.