import { ENDPOINTS } from "../EndPoints/Endpoints";
import { Network } from "../Network";

export class Services {
   static getAbout() {
      return Network.fetch(ENDPOINTS.about.url, {
         method: ENDPOINTS.about.method,
      });
   }
   static config() {
      return Network.fetch(ENDPOINTS.config.url, {
         method: ENDPOINTS.config.method,
      });
   }
   static contactUs(values) {
      return Network.fetch(ENDPOINTS.contactUs.url, {
         body: JSON.stringify(values),
         headers: {
            'content-type': 'application/json'
         },
         method: ENDPOINTS.contactUs.method,
      });
   }
   static getLocations() {
      return Network.fetch(ENDPOINTS.locations.url, {
         method: ENDPOINTS.locations.method,
      });
   }
   static getSliders() {
      return Network.fetch(ENDPOINTS.sliders.url, {
         method: ENDPOINTS.sliders.method,
      });
   }
}
