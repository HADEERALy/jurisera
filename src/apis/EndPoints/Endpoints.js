import DomainUrl from "../Domains";

export const ENDPOINTS = {
   about: {
      url: `${DomainUrl}/about/`,
      method: 'GET',
   },
   config: {
      url: `${DomainUrl}/config/`,
      method: 'GET',
   },
   contactUs: {
      url: `${DomainUrl}/contact_us/`,
      method: 'POST',
   },
   locations: {
      url: `${DomainUrl}/location/`,
      method: 'GET',
   },
   sliders: {
      url: `${DomainUrl}/slider/`,
      method: 'GET',
   },
};
