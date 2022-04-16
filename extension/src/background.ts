import { UrlChangedRequest } from "./grpc/automaited_pb";
import { NotificationsServiceClient } from "./grpc/automaited_pb_service"

browser.tabs.onActivated.addListener(activeInfo => notifyTabUrlUpdated(activeInfo.tabId));
// browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => notifyTabUrlUpdated(tabId));

const client = new NotificationsServiceClient('http://localhost:5000', {
  debug: true
});

function notifyTabUrlUpdated(tabId: number) {
    var activeTab = browser.tabs.get(tabId);
    activeTab.then(tab => {
      if (!tab.url)
        return;

      console.log(tab.url);

      const request = new UrlChangedRequest();
      request.setNewurl(`you are on ${tab.url}`);

      client.notifyUrlChanged(request, (err, response) => {
        console.log('err', err);
        console.log('response:', response);
      });
    });
}
